// business logic
function pizza(type,size,crust,topping,amount){
    this.type = type
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.amount = amount;
}

//ui logic
$(document).ready(function(){
    $("form#pizza").submit(function(event){
        event.preventDefault();
         
        var inputtedType = $("select#pizza").val();
        var inputtedSize = $("select#pizzaSize").val();
        var inputtedCrust  = $("select#crust").val();
        var inputtedToping = $("div#toping").val();
        var inputtedAmount = $("input#number").val();

        var newPizza = new pizza(inputtedType, inputtedSize , inputtedCrust, inputtedToping, inputtedAmount );
alert("you")
        $("ul#contact").append("<li>newPizza.type</li>")
        $("select#pizza").val()
        $("select#pizzaSize").val();
        $("select#crust").val();
        $("div#toping").val();
        $("input#number").val();
        
    });
});
