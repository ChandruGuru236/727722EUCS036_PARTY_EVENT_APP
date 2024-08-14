package com.example.partymanagement.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.partymanagement.Model.RefreshToken;
import com.example.partymanagement.Model.User;
import com.example.partymanagement.Repository.UserRepository;
import com.example.partymanagement.Service.AuthService;
import com.example.partymanagement.Service.JwtService;
import com.example.partymanagement.Service.RefreshTokenService;
import com.example.partymanagement.Util.AuthResponse;
import com.example.partymanagement.Util.LoginRequest;
import com.example.partymanagement.Util.RefreshTokenRequest;
import com.example.partymanagement.Util.RegisterRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin("http://localhost:3000") 
@RequestMapping("/api/users")
public class AuthController {
    private final AuthService authService;
    private final RefreshTokenService refreshTokenService;
    private final JwtService jwtService;
    private final UserRepository userRepository;
    public AuthController(AuthService authService, RefreshTokenService refreshTokenService, JwtService jwtService,UserRepository userRepository) {
        this.authService = authService;
        this.refreshTokenService = refreshTokenService;
        this.jwtService = jwtService;
        this.userRepository=userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest registerRequest) {
        return ResponseEntity.ok(authService.register(registerRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.login(loginRequest));
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<String> getUserNameByEmail(@PathVariable String email) {
        String userName = userRepository.findUserNameByEmail(email);
        if (userName == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(userName);
    }
    @GetMapping("/nam/{name}")
    public int getId(@PathVariable String name){
        return authService.findIds(name);
    }
    

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {
        RefreshToken refreshToken = refreshTokenService.verifyRefreshToken(refreshTokenRequest.getRefreshToken());
        User user = refreshToken.getUser();

        String accessToken = jwtService.generateToken(user);

        return ResponseEntity.ok(AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build());
    }
}
