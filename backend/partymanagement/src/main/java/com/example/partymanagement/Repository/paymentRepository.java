package com.example.partymanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.partymanagement.Model.PaymentModel;

public interface paymentRepository extends JpaRepository<PaymentModel,Long> {

    
}