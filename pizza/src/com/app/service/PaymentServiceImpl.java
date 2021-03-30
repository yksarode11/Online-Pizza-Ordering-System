package com.app.service;
import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IPaymentDao;

@Service // B.L methods
@Transactional
public class PaymentServiceImpl implements IPaymentService{
	@Autowired
	private IPaymentDao paymentDao;
	@PostConstruct
	public void myInit() {
		System.out.println("in init of " + getClass().getName() + " " + paymentDao);
	}

}
