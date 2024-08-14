package com.example.partymanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.partymanagement.Model.PaymentModel;
import com.example.partymanagement.Model.User;
import com.example.partymanagement.Repository.UserRepository;
import com.example.partymanagement.Service.paymentService;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/payment")
public class paymentController {

    @Autowired
    private paymentService paymentService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public ResponseEntity<?> createPayment(@RequestBody PaymentModel payment) {
        // Check if the user exists
        Optional<User> optionalUser = userRepository.findById(payment.getUser().getId());
        if (!optionalUser.isPresent()) {
            return ResponseEntity.badRequest().body("User does not exist");
        }

        // Set the user to ensure it's managed by the persistence context
        payment.setUser(optionalUser.get());

        // Save the payment
        PaymentModel savedPayment = paymentService.savePayment(payment);
        return ResponseEntity.ok(savedPayment);
    }
}
