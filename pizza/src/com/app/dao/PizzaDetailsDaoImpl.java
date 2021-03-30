package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.PizzaDetails;

@Repository
@Transactional
public class PizzaDetailsDaoImpl implements IPizzaDetailsDao {
	private SessionFactory sf;
	
	public PizzaDetailsDaoImpl() {
		System.out.println("In Pizza Dao");
	}
	@Override
	public List<PizzaDetails> getdetail() {
		System.out.println("in List<pizzadetails> getpizzadetail() method");
		String jpql = "select u from PizzaDetails u";
		return sf.getCurrentSession().createQuery(jpql, PizzaDetails.class).getResultList();
	}
	


}
