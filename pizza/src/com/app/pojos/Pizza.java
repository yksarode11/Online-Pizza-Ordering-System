package com.app.pojos;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Pizza {
	//primary key
private Integer pizzaId;
private String pizzaName;
//one to one mapping 
private PizzaDetails pizzaDetail;
//many to one mapping add foreign key by name orderId
private OrderDetail order;
public Pizza() {
	System.out.println("In PIZZA pojo ctor");
}
public Pizza(String pizzaName) {
	super();
	this.pizzaName = pizzaName;
}
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public Integer getPizzaId() {
	return pizzaId;
}
public void setPizzaId(Integer pizzaId) {
	this.pizzaId = pizzaId;
}
@Column(length = 20)
public String getPizzaName() {
	return pizzaName;
}
public void setPizzaName(String pizzaName) {
	this.pizzaName = pizzaName;
}
@OneToOne
@JoinColumn(name = "pizzaDetailsId")
public PizzaDetails getPizzaDetail() {
	return pizzaDetail;
}
public void setPizzaDetail(PizzaDetails pizzaDetail) {
	this.pizzaDetail = pizzaDetail;
}
@ManyToOne
@JoinColumn(name = "orderId")
public OrderDetail getOrder() {
	return order;
}
public void setOrder(OrderDetail order) {
	this.order = order;
}
@Override
public String toString() {
	return "Pizza [pizzaId=" + pizzaId + ", pizzaName=" + pizzaName + "]";
}

}
