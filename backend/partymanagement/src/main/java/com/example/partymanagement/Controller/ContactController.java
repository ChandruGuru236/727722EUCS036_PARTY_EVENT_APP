package com.example.partymanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.partymanagement.Model.Contact;
import com.example.partymanagement.Service.ContactService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/submit")
    public String submitContactForm(@RequestBody Contact contact) {
        contactService.saveContactForm(contact);
        return "Your message has been sent!";
    }
}
