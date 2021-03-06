package com.app.service;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IPizzaDetailsDao;
import com.app.pojos.PizzaDetails;

@Service // B.L methods
@Transactional
public class PizzaDetailsServiceImpl implements IPizzaDetailsService {
	@Autowired
	private IPizzaDetailsDao pizzaDetailsDao;
	@PostConstruct
	public void myInit() {
		System.out.println("in init of " + getClass().getName() + " " + pizzaDetailsDao);
	}
	@Override
	public List<PizzaDetails> getpizzadetails() {
		// TODO Auto-generated method stub
		return pizzaDetailsDao.getdetail();
	}

}
