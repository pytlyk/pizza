/**
 * Created by chaika on 25.01.16.
 */

$(function(){
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/PizzaMenu');
    var PizzaCart = require('./pizza/PizzaCart');

    var API = require('./API');

    API.getPizzaList(function(err, pizza_list){
        if(err) {
            return console.error(err);
        }
        PizzaCart.initialiseCart();
        PizzaMenu.initialiseMenu(pizza_list);
    });

    $(".order-button").click(function(){
        API.createOrder({
            name: "Andrii",
            phone: "Phone",
            pizza: PizzaCart.getPizzaInCart()
        }, function(err, result){
            if(err) {
                alert("Can't create order");
            } else {
                window.location = "/order.html";
                //alert("Order created");
            }
        });
    });
});