package com.example.partymanagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.partymanagement.Model.Contact;
import com.example.partymanagement.Repository.ContactRepository;
@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;
    
    public  Contact saveContactForm(Contact contact) {
        return contactRepository.save(contact);
    }
}





