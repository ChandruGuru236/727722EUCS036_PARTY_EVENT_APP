package com.example.partymanagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.partymanagement.Model.User;
import com.example.partymanagement.Model.VenueModel;
import com.example.partymanagement.Repository.UserRepository;
import com.example.partymanagement.Repository.VenueRepository;

@Service
public class VenueService {

    @Autowired
    private VenueRepository venueRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public VenueModel postData(VenueModel obj) {
        // Ensure the User entity is managed
        User user = obj.getUser();
        if (user != null && user.getId() != null) {
            user = userRepository.findById(user.getId()).orElseThrow(() -> new RuntimeException("User not found"));
            obj.setUser(user);
        }
        return venueRepository.save(obj);
    }
}