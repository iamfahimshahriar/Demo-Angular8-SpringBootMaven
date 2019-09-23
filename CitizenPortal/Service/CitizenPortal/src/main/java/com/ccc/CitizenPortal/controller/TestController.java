package com.ccc.CitizenPortal.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ccc.CitizenPortal.model.User;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TestController {
		
	private List<User> users = createList();

	@RequestMapping (value = "/users", method = RequestMethod.GET,produces = "application/json" )
	public List<User> firstPage(){
		return users;
	}
	@DeleteMapping(path = { "/{id}" })
	public User delete(@PathVariable("id") String id) {
		User deletedEmp = null;
		for (User user : users) {
			if (user.getOid().equals(id)) {
				users.remove(user);
				deletedEmp = user;
				break;
			}
		}
		return deletedEmp;
	}

	@PostMapping
	public User create(@RequestBody User user) {
		users.add(user);
		System.out.println(users);
		return user;
	}

	private List<User> createList() {
		List<User> tempUsers = new ArrayList<>();
		User user1 = new User();
		user1.setName("Ashish Kumar Das");
		user1.setDesignation("Supervisor");
		user1.setOid("1");
		user1.setSalary(150000);
		
		User user2 = new User();
		user2.setName("Fahim Shahriar");
		user2.setDesignation("Junior Progremmer");
		user2.setOid("1");
		user2.setSalary(15000);
		
		tempUsers.add(user1);
		tempUsers.add(user2);
		
		
		return tempUsers;
	}
	
	
}
