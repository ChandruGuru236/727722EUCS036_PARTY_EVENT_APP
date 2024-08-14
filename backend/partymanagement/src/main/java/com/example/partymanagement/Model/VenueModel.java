package com.example.partymanagement.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.GenerationType;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class VenueModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "venueName")
    private String venueName;

    @Column(name = "eventType")
    private String eventType;

    @Column(name = "eventDate")
    private String eventDate;

    @Column(name = "eventTime")
    private String eventTime;

    @Column(name = "numGuests")
    private String numGuests;

    @Column(name = "theme")
    private String theme;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonBackReference
    private User user;
}