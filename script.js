
function calculateTip(){

    //setup variables
    var bill = parseFloat(document.querySelector("#bill").value);
    var billTip;
    var service = document.querySelector("#service").value;
    var serviceTip;
    var percentTip = parseFloat(document.querySelector("#tip").value);
    var people = parseFloat(document.querySelector("#people").value);
    var total;

    //tetermines price for quality of service
    if(service == "bad"){
        serviceTip = 0;
    }else if(service == "good"){
        serviceTip = 2.50;
    }else{
        serviceTip = 5;
    }

     billTip = bill / 100 * percentTip;  //calculates the percent
     total = bill + billTip + serviceTip; //calculates the total
     people = total / people; //divides the price for each person

    //makes sure the user enters all the details correctly
    //displays total amount
    if(total > 0){
    document.querySelector("#total").innerHTML = "Total amount is £" + total.toFixed(2);
    document.querySelector("#perperson").innerHTML = "This is £" + people.toFixed(2) + " per person.";
    }else{
        document.querySelector("#total").innerHTML = "Please enter all the details";
    }
}

//button the user clicks to activate the function
document.querySelector("#submit").addEventListener('click', function(){
    calculateTip();
});
