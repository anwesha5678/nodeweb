var express = require('express');
var router = express.Router();
const Customer = require('../models').Customer;
const Order = require('../models').Order;
const Item = require("../models").Item;
const OrderItem = require("../models").OrderItems;

/* GET users listing. */

router.get("/test-your-api", async(req,res)=>{
	var message = 'my name is anwesha'
	res.json({
		success: true,
		code:200,
		message
	})
})


router.get("/create-all-customer-details", async(req,res)=>{
	var names = ['anwesha','saheli','suporna','sharmila','subrata','avijit','arpan','rahul'
	,'moumita','somenath']
	var addresses = ['bengaluru','pune','maharastra','kerala','kanyakumari',
	'digha','puri','odisha','shyamnagar','dakhsineswar']
	for(let i = 0; i<names.length; i++){
		var cust_details = await Customer.create({
		name:names[i],
		address:addresses[i]
		})
	}
	
	res.json({
		success: true,
		code:200,
		cust_details
	})
})

router.get("/create-all-item-details", async(req,res)=>{
	var names = ['chili-chicken','chili-mutton','chowmin','momo','kabab','fish-fry','fish-kobiraji','polao'
	,'eggroll','chickenroll']
	var addresses = ['150.50','142.30','190.25','200','180',
	'190','220','225','150','190']
	for(let i = 0; i<names.length; i++){
		var cust_details = await Item.create({
		name:names[i],
		price:addresses[i]
		})
	}
	
	res.json({
		success: true,
		code:200,
		cust_details
	})
})

router.get("/view-all-customer-details", async(req,res)=>{
	var customer_details = await Customer.findAll({
		order:[['id','ASC']]
	})
	res.json({
		code:200,
		success: true,
		customer_details
	})
})
router.get("/view-all-item-details", async(req,res)=>{
	var item_details = await Item.findAll({
		order:[['id','ASC']]
	})
	res.json({
		code:200,
		success: true,
		item_details
	})
})

module.exports = router;
