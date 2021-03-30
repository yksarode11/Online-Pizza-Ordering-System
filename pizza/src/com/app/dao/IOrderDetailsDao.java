package com.app.dao;

import java.util.List;

import com.app.pojos.OrderDetail;
import com.app.pojos.OrderStatus;

public interface IOrderDetailsDao {
	List<OrderDetail> getAllOrderDetails();
	OrderDetail getAllOrderDetails(int custId);
	OrderDetail getOrderDetailsById(int orderId);
	OrderDetail addOrderDetails(OrderDetail o);//u --transient 
	void deleteOrderDetail(OrderDetail o);
	void updateOrderStatus(int orderId,OrderStatus status);
}
