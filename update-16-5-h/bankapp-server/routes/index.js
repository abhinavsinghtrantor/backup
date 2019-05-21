var express = require('express');
var router = express.Router();
var config = require('../config');
var request = require('request');
var jwt = require('jsonwebtoken');
const uuidV1 = require('uuid/v1');

var session = {};

/* GET home page. */
router.post('/login', function(req, res){
	var aadharNum = req.body.aadharNum;
	var data = JSON.stringify(req.body);
	request.post({
		url : 'http://localhost:8080/login', body: data}, function(err, httpResponse, body){
		var data =JSON.parse(body);
		if(data.status && data.status != "Success"){
			res.json(data);
		}else{
			var token = jwt.sign({ aadharNum: aadharNum }, config.secret, {
      			expiresIn: 86400 // expires in 24 hours
   			 });
			//var id = uuidV1();
			session[aadharNum] = token;
			data["token"] = token;
			data["id"] = "";
			res.json(data);
		}
	})
});

router.post('/bank', function(req, res){
	var token = req.headers['x-access-token'];
	if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

	jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    var aadharNum = decoded.aadharNum;
    if(session[aadharNum] == token){
    	var url = "http://localhost:8080/"+req.body.url;
    	delete req.body["url"];
		var data = JSON.stringify(req.body);
    	request.post({
    		url : url,
    		body: data
    	}, function(err, resp, body){
    		res.send(body);
    	})
    }else{
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
  });

})

router.post('/logout', function(req, res){
	var token = req.headers['x-access-token'];
	if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

	jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

		var aadharNum = decoded.aadharNum;
		if(session[aadharNum] == token){
			delete session[aadharNum];
		}
		res.json({msg : "success"});
});

});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getSubCategories/:cId', function(req, res, next){
	var cId = req.params.cId;
	if(cId.toLowerCase() == "electronics"){
		var subCategories = [];
	  	subCategories[0] = {name : "Mobile Phones", imgUrl : "mobile.jpg", offer: "30% Off", r: "/ecom/"+cId+"/collection/mobile-phones"};
	  	subCategories[1] = {name : "Pendrives", imgUrl : "pendrive.jpg", offer: "30% Off", r: "/collection/"+cId+"/pendrives"};
	  	subCategories[2] = {name : "Cameras", imgUrl : "camera.jpg", offer: "30% Off", r: "/collection/"+cId+"/cameras"};
	  	subCategories[3] = {name : "Headphones", imgUrl : "headphones.jpeg", offer: "30% Off", r: "/collection/"+cId+"/headphones"};
	}
	res.json({msg : "success", name : cId, bannerUrl : "", subCategories : subCategories});
})

router.get('/collection/:cId', function(req, res, next){
	var cId = req.params.cId;
	if(cId == "mobile-phones"){
		var collection = {};
		var productList = [];
		  	productList[0] = {pId:"mobileP1", name : "Mobile 1", aPrice : "Rs. 500", dPrice : "Rs. 400", offer : "30% Off",
		  						imgUrl : "mobile.jpg", r: "/ecom/electronics/collection/"+cId+"/product/mobileP1",
		  						rating: 1};
		  	productList[1] = {pId:"mobileP2", name : "Mobile 2", aPrice : "Rs. 500", dPrice : "Rs. 400", offer : "30% Off",
		  						imgUrl : "mobile.jpg", r: "/ecom/electronics/collection/"+cId+"/product/mobileP1",
		  						rating: 2};
		  	productList[2] = {pId:"mobileP3", name : "Mobile 3", aPrice : "Rs. 500", dPrice : "Rs. 400", offer : "30% Off",
		  						imgUrl : "mobile.jpg", r: "/ecom/electronics/collection/"+cId+"/product/mobileP1",
		  						rating: 3};
		  	productList[3] = {pId:"mobileP4", name : "Mobile 4", aPrice : "Rs. 500", dPrice : "Rs. 400", offer : "30% Off",
		  						imgUrl : "mobile.jpg", r: "/ecom/electronics/collection/"+cId+"/product/mobileP1", rating: 4};
				productList[4] = {pId:"mobileP5", name : "Mobile 5", aPrice : "Rs. 500", dPrice : "Rs. 400", offer : "30% Off",
							  						imgUrl : "mobile.jpg", r: "/ecom/electronics/collection/"+cId+"/product/mobileP1", rating: 4};
			  productList[5] = {pId:"mobileP6", name : "Mobile 6", aPrice : "Rs. 500", dPrice : "Rs. 400", offer : "30% Off",
																			imgUrl : "mobile.jpg", r: "/ecom/electronics/collection/"+cId+"/product/mobileP1", rating: 4};
		collection["name"] = "Mobile Phones";
		collection["productList"] = productList;
		res.json({msg : "success", data : collection});
	}
});

router.get('/collection/:cId/product/:pId', function(req, res, next){
	var cId = req.params.cId;
	var pId = req.params.pId;
	var productDetials = {title : "Enchanted Drapes Men Regular Fit Casual shirt - Brown"};
	productDetials["dPrice"] = "Rs. 1000";
	productDetials["aPrice"] = "Rs. 2000";
	productDetials["discount"] = "50% Off";
	productDetials["details"] = ["6.1-inch Liquid Retina display (LCD)", "IP67 water and dust resistant", "Face ID for secure authentication"];
	productDetials["imgUrl"] = "mobile.jpg";
	productDetials["pId"] = "mobileP1";
	productDetials["rating"] = 1;

	res.json({msg : "success", productDetails : productDetials});
});

router.post('/updateRating', function(req, res, next){
	var pId = req.body.pId;
	var rating = req.body.rating;
	var currentRating = 4;
	var currentRaters = 10;
	currentRating = currentRating * currentRaters;
	currentRaters = currentRaters + 1;
	currentRating = currentRating + rating;
	currentRating = Math.round(currentRating/currentRaters);
	// update rating in db
	return res.json({msg : 'success', rating : currentRating});
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

router.post('/completeOrder', function(req, res, next){
	var cart = req.body.cart;
	var addressId = req.body.addressId;
	var payMode = "";
	var isPaySuccess = true;
	res.json({msg : "success", orderId : "1"});
});

router.get('/trackOrder', function(req, res, next){
	var orderId = req.body.orderId;
	res.json({msg : "success", "status" : "Processing"});
});

module.exports = router;
