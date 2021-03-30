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
import com.app.pojos.User;
import com.app.service.IPizzaService;

@RestController // @Controller + @RespBody
@CrossOrigin//(origins="http://localhost:4200")
@RequestMapping("/pizzas")
public class PizzaController {
	@Autowired
	private IPizzaService pizzaService;

	@PostConstruct
	public void init() {
		System.out.println("in init " + pizzaService);
	}
	
	@GetMapping
	public ResponseEntity<?> listpizza() {
		System.out.println("in list pizza");
		List<Pizza> allpizza = pizzaService.getAllpizza();
		if (allpizza.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Pizza>>(allpizza, HttpStatus.OK);
	}
	
	
}
