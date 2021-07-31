function pPizza(type, size, crusty, toping , number, total ){
    this.type = type;
    this.size = size;
    this.crusty = crusty;
    this.toping = toping;
    this.number = number;
    this.total = total;
}

$(document).ready(function(){
    $("#formPizza").submit(function(event){
        var pType = $("#pizza").val();
        var pSize = $("#pizzaSize").val();
        var pCrusty = $("#crust").val();
        var pToping = $("#topping").val();
        var pnumber = $("#number").val();
        var price = $("#list").append(pType)
        var list2 =$('#list1').append(pSize)
        event.preventDefault();
        
    })
 })
