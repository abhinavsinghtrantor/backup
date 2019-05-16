package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.indus.apiFunction.ApiMethod;

@RestController
public class HelloController {

    @GetMapping("/request")
    public  String postController(){
    	 ApiMethod apiMethod = new ApiMethod();
    	 String loginResponse= apiMethod.login("787612346756"); 
	 System.out.println("The response for Login Request is   "+ loginResponse);
    	return loginResponse;
    }

}