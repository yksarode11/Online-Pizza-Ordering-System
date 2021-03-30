package com.app.dao;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Pizza;

@Repository
@Transactional
public class PizzaDaoImpl implements IPizzaDao {
	@Autowired
	private SessionFactory sf;
public PizzaDaoImpl() {
	System.out.println("In Pizza Dao");
}
	@Override
	public List<Pizza> getpizza() {
		System.out.println("in List<pizza> getAllpizza() method");
		String jpql = "select u from Pizza u";
		return sf.getCurrentSession().createQuery(jpql, Pizza.class).getResultList();
		
	}
	
}
