package com.Example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp2 {
	public static void main(String args[]) {
	ApplicationContext context = new ClassPathXmlApplicationContext("beans2.xml");

	Library lib = context.getBean("library", Library.class);
	lib.issueBook();
	}

}
