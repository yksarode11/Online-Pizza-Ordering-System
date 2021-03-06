package com.app.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IPizzaDao;
import com.app.pojos.Pizza;

@Service // B.L methods
@Transactional
public class PizzaServiceImpl implements IPizzaService {
	@Autowired
	private IPizzaDao pizzaDao;
	@PostConstruct
	public void myInit() {
		System.out.println("in init of " + getClass().getName() + " " + pizzaDao);
	}
	@Override
	public List<Pizza> getAllpizza() {
		
		return pizzaDao.getpizza();
	}

}
