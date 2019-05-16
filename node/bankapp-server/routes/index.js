var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getSubCategories/:cId', function(req, res, next){
	var cId = req.params.cId;
	if(cId.toLowerCase() == "electronics"){
		var subCategories = [];
	  	subCategories[0] = {name : "Mobile Phones", imgUrl : "", offer: "30% Off"};
	  	subCategories[1] = {name : "Pendrives", imgUrl : "", offer: "30% Off"};
	  	subCategories[2] = {name : "Cameras", imgUrl : "", offer: "30% Off"};
	  	subCategories[3] = {name : "Headphones", imgUrl : "", offer: "30% Off"};
	}
	res.json({msg : "success", name : cId, bannerUrl : "", subCategories : subCategories});
})

router.get('/collection/:cId', function(req, res, next){
	var cId = req.params.cId;
	if(cId == "mobile-phones"){
		var collection = {};
		var productList = [];
		  	productList[0] = {pId:"mobileP1", name : "1IPhone X", aPrice : "Rs. 500", dPrice : "Rs. 400", offer : "30% Off", 
		  						imgUrl : ""};
		  	productList[1] = {pId:"mobileP2", name : "2IPhone X", aPrice : "Rs. 500", dPrice : "Rs. 400", offer : "30% Off", 
		  						imgUrl : ""};
		  	productList[2] = {pId:"mobileP3", name : "3IPhone X", aPrice : "Rs. 500", dPrice : "Rs. 400", offer : "30% Off", 
		  						imgUrl : ""};
		  	productList[3] = {pId:"mobileP4", name : "4IPhone X", aPrice : "Rs. 500", dPrice : "Rs. 400", offer : "30% Off", 
		  						imgUrl : ""};
		collection["name"] = "Mobile Phones";
		collection["productList"] = productList;
		res.json({msg : "success", data : collection});
	}
});

router.get('/collection/:cId/product/:pId', function(req, res, next){
	var cId = req.params.cId;
	var pId = req.params.pId;
	var productDetials = {title : "Enchanted Drapes Men Regular Fit Casual shirt - Brown"};
	productDetials["dPrice"] = 1000;
	productDetials["aPrice"] = 2000;
	productDetials["discount"] = "50%";
	productDetials["detail"] = ["Material : Cotton", "Fit : Regular Fit"];
	productDetials["img"] = "";
	productDetials["pId"] = "mobileP1";

	res.json({msg : "success", productDetails : productDetials});
});

router.get('/getAddress', function(req, res, next){
	var addressId = "a1001";
	var name = "Abhinav Singh";
	var address1 = "Houne No. 1091";
	var address2 = "Sector 15B";
	var city = "Chandigarh";
	var state = "Chandigarh";
	var pincode = "160015"
	var address = address1 + ", " + address2 + ", " + city + ", " + state + ", " + pincode;
	var completeAddress = {};
	completeAddress["name"] = name;
	completeAddress["address"] = address;
	completeAddress["mobile"] = "9140243067";

	res.json({msg : "success", address : completeAddress});
});

router.post('/saveAddress', function(req, res, next){
	var name = req.body.name;
	var address1 = req.body.address1;
	var address2 = req.body.address2;
	var city = req.body.city;
	var state = req.body.state;
	var pincode = req.body.pincode;
	var addressId = "a1002";

	res.json({msg : "success"});
});

router.get('/applyCoupon', function(req, res, next){
	res.json({msg : "success"});
});

router.get('/completeOrder', function(req, res, next){
	var cart = req.body.cart;
	var addressId = req.body.addressId;
	var payMode = "";
	var isPaySuccess = true;
	res.json({msg : "success"});
});

router.get('/trackOrder', function(req, res, next){
	var orderId = req.body.orderId;
	res.json({msg : "success", "status" : "Processing"});
});

module.exports = router;
