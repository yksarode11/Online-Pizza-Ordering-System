package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.OrderDetail;
import com.app.pojos.OrderStatus;

@Repository
@Transactional
public class OrderDetailsDaoImpl implements IOrderDetailsDao{
	@Autowired
	private SessionFactory sf;
	
	public OrderDetailsDaoImpl() {
		System.out.println("in OrderDetailsDaoImpl ctor");
	}
	@Override
	public List<OrderDetail> getAllOrderDetails() {
		System.out.println("in  getAllOrderDetails method");
		String jpql = "select o from OrderDetail o";
		return sf.getCurrentSession().createQuery(jpql, OrderDetail.class).getResultList();
	}

	@Override
	public OrderDetail getAllOrderDetails(int custId) {
		System.out.println("in  getAllOrderDetails(int custId) method");
		return sf.getCurrentSession().get(OrderDetail.class, custId);
	}

	@Override
	public OrderDetail getOrderDetailsById(int orderId) {
		System.out.println("in getOrderDetailsById(int orderId) method");
		return sf.getCurrentSession().get(OrderDetail.class, orderId);
	}

	@Override
	public OrderDetail addOrderDetails(OrderDetail o) {
		System.out.println("in addOrderDetails(OrderDetail o) method");
		sf.getCurrentSession().persist(o);
		return o;
	}

	@Override
	public void deleteOrderDetail(OrderDetail o) {
		System.out.println("in deleteOrderDetail(OrderDetail o) method");
		sf.getCurrentSession().delete(o);
	}

	@Override
	public void updateOrderStatus(int orderId, OrderStatus status) {
		System.out.println("in updateOrderStatus(int orderId, OrderStatus status) method");
		String jpql="update OrderDetail o set o.orderStatus=:status where o.orderId=:orderId";
		sf.getCurrentSession().update(jpql, OrderDetail.class);
		
	}
	
}
