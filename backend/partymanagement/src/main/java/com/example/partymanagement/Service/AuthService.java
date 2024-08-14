package com.example.partymanagement.Service;

import org.springframework.stereotype.Service;
import com.example.partymanagement.Model.User;
import com.example.partymanagement.Model.UserRoleEnum;
import com.example.partymanagement.Repository.UserRepository;
import com.example.partymanagement.Util.AuthResponse;
import com.example.partymanagement.Util.LoginRequest;
import com.example.partymanagement.Util.RegisterRequest;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
@Service
@RequiredArgsConstructor
public class AuthService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final RefreshTokenService refreshTokenService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest registerRequest) {

        UserRoleEnum role = UserRoleEnum.USER;
        
        // Check if the user should be an admin
        if (registerRequest.getEmail().equals("amrutha@gmail.com") && registerRequest.getPassword().equals("4249")) {
            role = UserRoleEnum.ADMIN;
        }

        var user = User.builder()
                .userName(registerRequest.getUserName())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(role)
                .build();

        User savedUser = userRepository.save(user);
        var accessToken = jwtService.generateToken(savedUser);
        var refreshToken = refreshTokenService.createRefreshToken(savedUser.getEmail());

        return AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build();
    }
    public AuthResponse login(LoginRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                        )
        );

        var user = userRepository.findByEmail(loginRequest.getEmail());
        System.out.print(user);
                                // .orElseThrow(() -> new UsernameNotFoundException("User not found!"));
        var accessToken = jwtService.generateToken(user);
        var refreshToken = refreshTokenService.createRefreshToken(loginRequest.getEmail());

        return AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build();
    }
    public User findByEmail(String email) {
        
        return userRepository.findByEmail(email);
    }

    public int findIds(String name){
        return userRepository.findId(name);
    }
}
