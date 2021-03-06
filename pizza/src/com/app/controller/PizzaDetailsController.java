package com.app.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Pizza;
import com.app.pojos.PizzaDetails;
import com.app.service.IPizzaDetailsService;

@RestController // @Controller + @RespBody
@CrossOrigin//(origins="http://localhost:4200")
@RequestMapping("/pizza_details")
public class PizzaDetailsController {
	@Autowired
	private IPizzaDetailsService pizzaDetailsService;

	@PostConstruct
	public void init() {
		System.out.println("in init " + pizzaDetailsService);
	}
	@GetMapping
	public ResponseEntity<?> pizzadetails() {
		System.out.println("in list pizzadetails");
		List<PizzaDetails> pizzadetails = pizzaDetailsService.getpizzadetails();
		if (pizzadetails.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<PizzaDetails>>(pizzadetails, HttpStatus.OK);
	}
		
		
		
		
	}

