package com.example.partymanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.partymanagement.Model.VenueModel;

public interface VenueRepository extends JpaRepository<VenueModel,Long> {

    
}
