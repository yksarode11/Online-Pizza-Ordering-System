package com.app.pojos;

import javax.persistence.*;

@Entity
public class Payment {
	//primary key
private Integer paymentId;
private double paymentAmt;
//Enum type
private PaymentType paymentType;
private boolean paymentStatus;
//one to one mapping
private OrderDetail order;
public Payment() {
	System.out.println("In PAYMENT pojo ctor");
}
public Payment( double paymentAmt, PaymentType paymentType, boolean paymentStatus) {
	super();
	this.paymentAmt = paymentAmt;
	this.paymentType = paymentType;
	this.paymentStatus = paymentStatus;
}
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public Integer getPaymentId() {
	return paymentId;
}
public void setPaymentId(Integer paymentId) {
	this.paymentId = paymentId;
}
@Column(columnDefinition = "double(6,1)")
public double getPaymentAmt() {
	return paymentAmt;
}
public void setPaymentAmt(double paymentAmt) {
	this.paymentAmt = paymentAmt;
}
@Enumerated(EnumType.STRING)
public PaymentType getPaymentType() {
	return paymentType;
}
public void setPaymentType(PaymentType paymentType) {
	this.paymentType = paymentType;
}
public boolean isPaymentStatus() {
	return paymentStatus;
}
public void setPaymentStatus(boolean paymentStatus) {
	this.paymentStatus = paymentStatus;
}


@OneToOne(mappedBy = "paymentDetails",cascade = CascadeType.ALL)
public OrderDetail getOrder() {
	return order;
}
public void setOrder(OrderDetail order) {
	this.order = order;
}
@Override
public String toString() {
	return "Payment [paymentId=" + paymentId + ", paymentAmt=" + paymentAmt
			+ ", paymentType=" + paymentType + ", paymentStatus=" + paymentStatus + "]";
}

}
