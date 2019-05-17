package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.json.JSONObject;

import com.indus.apiFunction.ApiMethod;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloController {

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login")
    public  String postController1(@RequestBody String data){
      JSONObject json = new JSONObject(data);
      String aadharNum = (String) json.get("aadharNum");
      System.out.println(aadharNum);
    	 ApiMethod apiMethod = new ApiMethod();
    	 String loginResponse= apiMethod.login(aadharNum);
	      System.out.println("The response for Login Request is   "+ loginResponse);
    	return loginResponse;
    }

    @PostMapping("/getSavingsDetails")
    public  String postController2(@RequestBody String data){
       JSONObject json = new JSONObject(data);
       String aadharNum = (String) json.get("aadharNum");
       String accountNum = (String) json.get("accountNum");

       ApiMethod apiMethod = new ApiMethod();
       String savingsAccountsInquiryResponse = apiMethod.savingsAccountInquiry(accountNum, aadharNum);
    	 System.out.println("The response for SavingsAccountInquiry method is   "+ savingsAccountsInquiryResponse);
      return savingsAccountsInquiryResponse;
    }

    @PostMapping("/getLoanDetails")
    public  String postController3(@RequestBody String data){
       JSONObject json = new JSONObject(data);
       String aadharNum = (String) json.get("aadharNum");
       String accountNum = (String) json.get("accountNum");
       ApiMethod apiMethod = new ApiMethod();
       String loanAccountsInquiryResponse = apiMethod.loanAccountInquiry(accountNum, aadharNum);
    	 System.out.println("The response for LoanAccountInquiry method is   "+ loanAccountsInquiryResponse);
      return loanAccountsInquiryResponse;
    }

    @PostMapping("/withdraw")
    public  String postController4(@RequestBody String data){
       JSONObject json = new JSONObject(data);
       String aadharNum = (String) json.get("aadharNum");
       String accountNum = (String) json.get("accountNum");
       String currency = (String) json.get("currency");
       String amountStr = (String) json.get("amount");
       double amount = Double.parseDouble(amountStr);
       String cashBalanceStr = (String) json.get("cashBalance");
       double cashBalance = Double.parseDouble(cashBalanceStr);
       
       ApiMethod apiMethod = new ApiMethod();
       String balWithdrawResponse = apiMethod.balWithdraw(aadharNum, accountNum, currency, amount,"dbt","cdt", cashBalance);
    	 System.out.println("The response for balWithdraw method is   "+ balWithdrawResponse);
      return balWithdrawResponse;
    }

    @PostMapping("/deposit")
    public  String postController5(@RequestBody String data){
       JSONObject json = new JSONObject(data);
       String aadharNum = (String) json.get("aadharNum");
       String accountNum = (String) json.get("accountNum");
       String currency = (String) json.get("currency");
       String amountStr = (String) json.get("amount");
       double amount = Double.parseDouble(amountStr);
       String cashBalanceStr = (String) json.get("cashBalance");
       double cashBalance = Double.parseDouble(cashBalanceStr);

       ApiMethod apiMethod = new ApiMethod();
       String fundDepositResponse = apiMethod.fundDeposit(aadharNum, accountNum, currency, amount,"dbt","cdt",cashBalance);
    	 System.out.println("The response for fundDeposit method is   "+ fundDepositResponse);
      return fundDepositResponse;
    }

    @PostMapping("/billFetch")
    public  String postController6(@RequestBody String data){
       JSONObject json = new JSONObject(data);
       String billerCategory = (String) json.get("billerCategory");
       String mobileNum = (String) json.get("mobileNum");
       String billMerchantName = (String) json.get("billMerchantName");

       ApiMethod apiMethod = new ApiMethod();
       String billFetchResponse = apiMethod.billFetch(billerCategory, mobileNum, billMerchantName, "1000101001");
    	 System.out.println("The response for billFetch method is   "+ billFetchResponse);
      return billFetchResponse;
    }

    @PostMapping("/billPayment")
    public  String postController7(@RequestBody String data){
       JSONObject json = new JSONObject(data);
       String aadharNum = (String) json.get("aadharNum");
       String fromAccountNum = (String) json.get("fromAccountNum");
       String toAccountNum = (String) json.get("toAccountNum");
       String accType = (String) json.get("accType");
       String amountStr = (String) json.get("amount");
       double amount = Double.parseDouble(amountStr);
       String cashBalanceStr = (String) json.get("cashBalance");
       double cashBalance = Double.parseDouble(cashBalanceStr);
       
       ApiMethod apiMethod = new ApiMethod();
       String paymentResponse = apiMethod.payment(aadharNum, fromAccountNum, toAccountNum, accType, amount,"dbt","cdt",cashBalance,"");
       System.out.println("The response for payment method is   "+ paymentResponse);
      return paymentResponse;
    }
}
