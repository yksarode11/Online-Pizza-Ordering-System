package com.app.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.User;
import com.app.service.IUserService;
@RestController // @Controller + @RespBody
@CrossOrigin//(origins="http://localhost:4200")
@RequestMapping("/user")
public class UserController {
	@Autowired
	private IUserService userService;
	@PostConstruct
	public void init() {
		System.out.println("in init " +  userService);
	}
	@PostMapping("/login")
	public ResponseEntity<?> ValidateUser(@RequestBody User u) {
		System.out.println("in validate user  "+u.getUserEmail()+u.getUserPassword());
		User a=userService.validateUser(u.getUserEmail(),u.getUserPassword());
		System.out.println("user is"+a);
		if(a == null)
		{
			
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<User>(a, HttpStatus.OK); 
		
		}
	//after /user alaways goes with getmapping
	@GetMapping
	public ResponseEntity<?> listUsers() {
		System.out.println("in list users");
		List<User> allusers = userService.getAllUsers();
		if (allusers.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<User>>(allusers, HttpStatus.OK);
	}
	// REST request handling method to create new resource : User
	@PostMapping("/register")
	public ResponseEntity<?> addUserDetails(@RequestBody User u) {
		System.out.println("in add user dtls " + u);
		try {
			return new ResponseEntity<User>(userService.addUserDetails(u), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	// REST request handling method to get user by id
		@GetMapping("/{user_id}")
		public ResponseEntity<?> getUserDetails(@PathVariable int user_id) {
			System.out.println("in user dtls " + user_id);
			User e = userService.getUserById(user_id);
			if (e == null)
				return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
			return new ResponseEntity<User>(e, HttpStatus.OK);
		}
		@GetMapping("/customers")
		public ResponseEntity<?> listCustomers() {
			System.out.println("in list Customers");
			List<User> allusers = userService.getAllCustomers();
			if (allusers.size() == 0)
				return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
			return new ResponseEntity<List<User>>(allusers, HttpStatus.OK);
		}
		
}
