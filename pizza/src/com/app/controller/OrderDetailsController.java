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

import com.app.pojos.OrderDetail;
import com.app.service.IOrderDetailsService;
@RestController // @Controller + @RespBody
@CrossOrigin//(origins="http://localhost:4200")
@RequestMapping("/order_details")
public class OrderDetailsController {
	@Autowired
	private IOrderDetailsService orderDetailsService;
	@PostConstruct
	public void init() {
		System.out.println("in init " + orderDetailsService);
	}
	@GetMapping("/orders")
	public ResponseEntity<?> getAllOrderDetails() {
		System.out.println("in list Orders");
		List<OrderDetail> allorders = orderDetailsService.getAllOrderDetails();
		if (allorders.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<OrderDetail>>(allorders, HttpStatus.OK);
	}
}
