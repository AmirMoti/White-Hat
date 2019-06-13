// create products Documents from Mongo DB
const mongoose = require('mongoose');
const Product = require('./product.model');

mongoose.connect("mongodb://localhost:27017/white-hat",function(){
	  const theProduct = new Product({
      name: "milk",
      price: 20,
      quantity: 5
    });
	  const theProduct1 = new Product({
      name: "banana",
      price: 7,
      quantity: 40
    });
	  const theProduct2 = new Product({
      name: "tomato",
      price: 55,
      quantity: 14
    });
	  const theProduct3 = new Product({
      name: "potato",
      price: 22,
      quantity: 6
    });
	  const theProduct4 = new Product({
      name: "corn",
      price: 40,
      quantity: 17
    });
	  const theProduct5 = new Product({
      name: "coca cola",
      price: 44,
      quantity: 8
    });
		  const theProduct6 = new Product({
      name: "sprite",
      price: 22,
      quantity: 70
    });
		  const theProduct7 = new Product({
      name: "bread",
      price: 50,
      quantity:200
    });
	theProduct.save();
	theProduct1.save();
	theProduct2.save();
	theProduct3.save();
	theProduct4.save();
	theProduct5.save();
	theProduct6.save();
	theProduct7.save();

}).catch((error) => {
  console.log('error');
  console.log('Connection to database failed!');
});
