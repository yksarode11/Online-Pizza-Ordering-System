package com.app.pojos;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class OrderDetail {
	//primary key
private Integer orderId;
private Date orderDate;
private String orderDescription;
private OrderStatus orderStatus;
//many to one mapping add foreign key as custId 
private User customer;
//one to many mapping
private List<Pizza> Pizzas;
//one to one mapping
private Payment paymentDetails;
public OrderDetail() {
	System.out.println("In ORDER pojo ctor");
}

public OrderDetail(Date orderDate, String orderDescription, OrderStatus orderStatus) {
	super();
	this.orderDate = orderDate;
	this.orderDescription = orderDescription;
	this.orderStatus = orderStatus;
}

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public Integer getOrderId() {
	return orderId;
}
public void setOrderId(Integer orderId) {
	this.orderId = orderId;
}
@JsonFormat(pattern = "dd-MM-yyyy")
@Temporal(TemporalType.DATE)
public Date getOrderDate() {
	return orderDate;
}
public void setOrderDate(Date orderDate) {
	this.orderDate = orderDate;
}
@Column(length = 50)
public String getOrderDescription() {
	return orderDescription;
}
public void setOrderDescription(String orderDescription) {
	this.orderDescription = orderDescription;
}
@Enumerated(EnumType.STRING)
public OrderStatus getOrderStatus() {
	return orderStatus;
}
public void setOrderStatus(OrderStatus orderStatus) {
	this.orderStatus = orderStatus;
}
@JsonIgnore
@ManyToOne
@JoinColumn(name = "custId")
public User getCustomer() {
	return customer;
}
public void setCustomer(User customer) {
	this.customer = customer;
}
@OneToMany(mappedBy = "order",cascade = CascadeType.ALL,orphanRemoval = true, fetch = FetchType.EAGER)
public List<Pizza> getPizzas() {
	return Pizzas;
}
public void setPizzas(List<Pizza> pizzas) {
	Pizzas = pizzas;
}
@JsonIgnore
@OneToOne
@JoinColumn(name = "paymentId")
public Payment getPaymentDetails() {
	return paymentDetails;
}
public void setPaymentDetails(Payment paymentDetails) {
	this.paymentDetails = paymentDetails;
}
//Convenience method
public void addPayment(Payment p)
{
	//OrderDetail----->Payment
	this.paymentDetails = p;
	// Payment---> OrderDetail
	p.setOrder(this);
}
public void removePayment(Payment p)
{
	paymentDetails=null;
	p.setOrder(null);
}

@Override
public String toString() {
	return "OrderDetails [orderId=" + orderId + ", orderDate=" + orderDate + ", orderDescription=" + orderDescription
			+ ", orderStatus=" + orderStatus + "]";
}

}
