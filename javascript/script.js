


var price, cPrice, tPrice, totalPrice, Delivery, tTotal;
function mainPizza(size, topping, crust, number){
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.number = number;
}
$(document).ready(function(){
    $("#formPizza").submit(function(event){
        event.preventDefault();
        var pizzaSize = $("#pizzaSize").val()
        var crust = $("#crust").val()
        var toppings = $("#topping").val()
        var pizzaNumber = $("#number").val()
        
        switch(pizzaSize){
            case "small":
                price = 650;
            break;
            case "medium":
                price = 750
            break;
            case "large":
                price = 900;
            break;
            default:
                price = 0;
        }
        
        switch(crust){
            case "thinCrust":
                cPrice = 250;
            break;
            case "FlatbreadCrust":
                cPrice = 300
            break;
            case "ThickCrust":
                cPrice = 150;
            break;
            default:
                cPrice = 200;
        }
        switch(topping){
            case "tomato":
                tPrice = 30;
            break;
            case "GreenPepper":
                tPrice = 20
            break;
            case "mince":
                tPrice = 10;
            break;
            default:
                tPrice = 200;
        }
        Delivery = 250;
        totalPrice = (tPrice + cPrice + price) * pizzaNumber
        tTotal =( (tPrice + cPrice + price) * pizzaNumber)+Delivery

        $(".display").show(500)
         $("#realPrice").html(totalPrice)
         $("#pizNumber").html(pizzaNumber)
         $("#btnDeliver").click(function(){
             $("#locationForm").show(800)
             $(".display").hide(100)
             
                 $("list").append(`<td>${pizzaSize.size}</td>`)
             
         })
         $("#orderPlace").click(function(event){
            event.preventDefault()
            var name = $("#realName").val()
            var location = $("#locate").val()
            if(name==""){
                alert("please inpute name")
            }
            else{
            $("#ficha").show();
            $("#nName").html(name)
            $("#ongeza").html(tTotal)
            $("#priceDelivery").html(tTotal)
            $(".col-1").hide(500)
            $("#locationForm").hide(500)
            }

            // $(".display").hide()
            
            // $("#finall").append(totalPrice)
           })
            $("#else").click(function(){
                $("#pick").show()
                $(".text").hide()
                $("#priceDelivery").html(totalPrice)
                $(".col-1").hide(500)
            })
    })
    
})