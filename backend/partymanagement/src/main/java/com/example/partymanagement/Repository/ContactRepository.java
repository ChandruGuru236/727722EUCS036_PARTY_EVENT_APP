package com.example.partymanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.partymanagement.Model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
