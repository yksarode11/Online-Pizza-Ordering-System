package com.app.service;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IOrderDetailsDao;
import com.app.pojos.OrderDetail;

@Service // B.L methods
@Transactional
public class OrderDetailsServiceImpl implements IOrderDetailsService{
	@Autowired
	private IOrderDetailsDao orderDetailsDao;
	@PostConstruct
	public void myInit() {
		System.out.println("in init of " + getClass().getName() + " " + orderDetailsDao);
	}
	@Override
	public List<OrderDetail> getAllOrderDetails() {
		return orderDetailsDao.getAllOrderDetails();
	}

}
