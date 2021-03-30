package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
@Entity
public class PizzaDetails {
	//PK
private Integer pizzaDetailsId;
private PizzaType pizzaType;
private String pizzaDescription;
private double pizzaAmt;
private PizzaSize pizzaSize;
//one to one mapping
private Pizza pizza;
public PizzaDetails() {
	System.out.println("In PIZZA pojo ctor");
}
public PizzaDetails(PizzaType pizzaType, String pizzaDescription, double pizzaAmt, PizzaSize pizzaSize) {
	super();
	this.pizzaType = pizzaType;
	this.pizzaDescription = pizzaDescription;
	this.pizzaAmt = pizzaAmt;
	this.pizzaSize = pizzaSize;
}
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public Integer getPizzaDetailsId() {
	return pizzaDetailsId;
}
public void setPizzaDetailsId(Integer pizzaDetailsId) {
	this.pizzaDetailsId = pizzaDetailsId;
}
@Enumerated(EnumType.STRING)
public PizzaType getPizzaType() {
	return pizzaType;
}
public void setPizzaType(PizzaType pizzaType) {
	this.pizzaType = pizzaType;
}
@Column(length = 50)
public String getPizzaDescription() {
	return pizzaDescription;
}
public void setPizzaDescription(String pizzaDescription) {
	this.pizzaDescription = pizzaDescription;
}
@Column(columnDefinition = "double(6,1)")
public double getPizzaAmt() {
	return pizzaAmt;
}
public void setPizzaAmt(double pizzaAmt) {
	this.pizzaAmt = pizzaAmt;
}

@Enumerated(EnumType.STRING)
public PizzaSize getPizzaSize() {
	return pizzaSize;
}
public void setPizzaSize(PizzaSize pizzaSize) {
	this.pizzaSize = pizzaSize;
}
@OneToOne(mappedBy = "pizzaDetail",cascade = CascadeType.ALL,orphanRemoval = true)
public Pizza getPizza() {
	return pizza;
}
public void setPizza(Pizza pizza) {
	this.pizza = pizza;
}

@Override
public String toString() {
	return "PizzaDetails [pizzaDetailsId=" + pizzaDetailsId + ", pizzaType=" + pizzaType + ", pizzaDescription="
			+ pizzaDescription + ", pizzaAmt=" + pizzaAmt + ", pizzaSize=" + pizzaSize + "]";
}


}
