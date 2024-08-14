 package com.example.partymanagement.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String message;

    @Column(nullable = false)
    private String venue;

    @Column(nullable = false)
    private String theme;

    @Column(nullable = false)
    private Date eventDate;

    @Column(nullable = false)
    private String eventTime;
}

