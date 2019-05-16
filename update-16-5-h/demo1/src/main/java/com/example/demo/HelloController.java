package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.indus.apiFunction.ApiMethod;

@RestController
public class HelloController {

    @GetMapping("/login")
    public  String postController1(@RequestParam("aadhar") String aadharNum){
      System.out.println(aadharNum);
    	 ApiMethod apiMethod = new ApiMethod();
    	 String loginResponse= apiMethod.login(aadharNum);
	      System.out.println("The response for Login Request is   "+ loginResponse);
    	return loginResponse;
    }

    @GetMapping("/getSavingsDetails")
    public  String postController2(@RequestParam("aadhar") String aadharNum, @RequestParam("account") String accountNum){
       ApiMethod apiMethod = new ApiMethod();
       String savingsAccountsInquiryResponse = apiMethod.savingsAccountInquiry(aadharNum, accountNum);
    	 System.out.println("The response for SavingsAccountInquiry method is   "+ savingsAccountsInquiryResponse);
      return savingsAccountsInquiryResponse;
    }

    @GetMapping("/getLoanDetails")
    public  String postController3(@RequestParam("aadhar") String aadharNum, @RequestParam("account") String accountNum){
       ApiMethod apiMethod = new ApiMethod();
       String loanAccountsInquiryResponse = apiMethod.loanAccountInquiry(aadharNum, accountNum);
    	 System.out.println("The response for LoanAccountInquiry method is   "+ loanAccountsInquiryResponse);
      return loanAccountsInquiryResponse;
    }

    @PostMapping("/withdraw")
    public  String postController4(@RequestParam("aadhar") String aadharNum, @RequestParam("account") String accountNum,
    @RequestParam("currency") String currency, @RequestParam("amount") long amount, @RequestParam("cashBalance") long cashBalance){
       ApiMethod apiMethod = new ApiMethod();
       String balWithdrawResponse = apiMethod.balWithdraw(aadharNum, accountNum, currency, amount,"dbt","cdt", cashBalance);
    	 System.out.println("The response for balWithdraw method is   "+ balWithdrawResponse);
      return balWithdrawResponse;
    }

    @PostMapping("/deposit")
    public  String postController5(@RequestParam("aadhar") String aadharNum, @RequestParam("account") String accountNum,
    @RequestParam("currency") String currency, @RequestParam("amount") long amount, @RequestParam("cashBalance") long cashBalance){
       ApiMethod apiMethod = new ApiMethod();
       String fundDepositResponse = apiMethod.fundDeposit(aadharNum, accountNum, currency, amount,"dbt","cdt",cashBalance);
    	 System.out.println("The response for fundDeposit method is   "+ fundDepositResponse);
      return fundDepositResponse;
    }

    @GetMapping("/billFetch")
    public  String postController6(@RequestParam("billerCategory") String billerCategory, @RequestParam("mobileNum") String mobileNum,
    @RequestParam("billMerchantName") String billMerchantName){
       ApiMethod apiMethod = new ApiMethod();
       String billFetchResponse = apiMethod.billFetch(billerCategory, mobileNum, billMerchantName, "1000101001");
    	 System.out.println("The response for billFetch method is   "+ billFetchResponse);
      return billFetchResponse;
    }

    @PostMapping("/billPayment")
    public  String postController7(@RequestParam("aadhar") String aadharNum, @RequestParam("fromAccount") String fromAccountNum,
    @RequestParam("toAccount") String toAccountNum, @RequestParam("accType") String accType, @RequestParam("amount") long amount, @RequestParam("cashBalance") long cashBalance){
       ApiMethod apiMethod = new ApiMethod();
       String paymentResponse = apiMethod.payment(aadharNum, fromAccountNum, toAccountNum, accType, amount,"dbt","cdt",cashBalance,"");
       System.out.println("The response for payment method is   "+ paymentResponse);
      return paymentResponse;
    }
}
