package com.example.partymanagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.partymanagement.Model.PaymentModel;
import com.example.partymanagement.Repository.paymentRepository;

@Service
public class paymentService {
    @Autowired
    private paymentRepository repo;
      public PaymentModel savePayment(PaymentModel payment) {
        return repo.save(payment);
    }

}
