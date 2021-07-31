
$(document).ready(function(){
    $("#formPizza").submit(function(event){
        var pType = $("#pizza").val();
        var pSize = $("#pizzaSize").val();
        var pCrusty = $("#crust").val();
        var pToping = $("#topping").val();
        var pnumber = $("#number").val();
        function price(){
            if(pSize == small){
                var price1 = 650
            }
            else if(pSize == medium){
                var price1 =750
            }
            else if (psize == large){
                var price1 = 900
            }
            return price1
        }
        alert(price()
        // var price = $("#list").append(pType)
        // var list2 =$('#list1').append(pSize)
        event.preventDefault();
        
    })
 })
