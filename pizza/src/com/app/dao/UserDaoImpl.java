package com.app.dao;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.User;

@Repository
@Transactional
public class UserDaoImpl implements IUserDao{
	@Autowired
	private SessionFactory sf;

	public UserDaoImpl() {
		System.out.println("in UserDaoImpl ctor");
	}
	@Override
	public List<User> getAllUsers() {
		System.out.println("in List<User> getAllUsers() method");
		String jpql = "select u from User u";
		return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();	
	}

	@Override
	public User getUserById(int userId) {
		System.out.println("in getUserById(int userId) method");
		return sf.getCurrentSession().get(User.class, userId);
	}

	@Override
	public User addUserDetails(User u) {
		System.out.println("in addUserDetails(User u)  method");
		sf.getCurrentSession().persist(u);
		return u;
	}

	@Override
	public void deleteUser(User u) {
		System.out.println("in deleteUser(User u) method");
		sf.getCurrentSession().delete(u);
	}

	@Override
	public User validateUser(String email, String password) {
		System.out.println("in validateUser(String email, String password) method");
		String jpql = "select u from User u where u.userEmail=:email and u.userPassword=:password";
		return sf.getCurrentSession().createQuery(jpql, User.class).setParameter("email", email)
				.setParameter("password", password).getSingleResult();
	}
	@Override
	public List<User> getAllCustomers() {
		System.out.println("in List<User> getAllCustomers() method");
		String jpql = "select u from User u where u.userRole='CUSTOMER'";
		return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();	
		
	}
	@Override
	public List<User> getAllAdmin() {
		System.out.println("in List<User> getAllAdmin() method");
		String jpql = "select u from User u where u.userRole='ADMIN'";
		return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();	
		
	}


	
	
}
