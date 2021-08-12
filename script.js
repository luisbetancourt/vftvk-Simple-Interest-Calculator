function compute()
{
    p = document.getElementById("principal").value;
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    //Calculate Interest/Show Results
    document.getElementById("result").innerHTML = "If you deposit  <mark>" + principal +"</mark> <br/> at an interest rate of  <mark>" + rate + "</mark> <br/> You will receive an ammount of <mark>" + interest + "</mark> <br/> in the year <mark>" + year +"</mark>";

   //Checks Principal input
    if(principal == "" || principal <= 0)
    {
        alert("Please enter a valid number");
        document.getElementById("principal").focus();
        return;
    }

}

// Convert to year from No. of Years dropdown
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


