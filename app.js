const loanAmount_=document.querySelector("#amount");
const interest_=document.querySelector("#interest");
const yearsToRepay_=document.querySelector("#years");
const calculate_=document.querySelector("#calculate");
const monthlyPayment_=document.querySelector("#monthly-payment");
const totalPayment_=document.querySelector("#total-payment");
const totalInterest_=document.querySelector("#total-interest");
const card=document.querySelector(".card");
const loader=document.querySelector("#loading");
const results=document.querySelector(".results");
results.style.display="none";
// console.log(loanAmount);
// console.log(interest);
// console.log(yearsToRepay);
// console.log(calculate);
// console.log(monthlyPayment);
// console.log(totalPayment);
// console.log(totalInterest);




calculate_.addEventListener("click",function(e){
    
    results.style.display="none";
    loader.style.display="block";
    var principal=parseFloat(loanAmount_.value);
    var rate=parseFloat(interest_.value)/100/12;
    var time=parseFloat(yearsToRepay_.value)*12;

    if(isNaN(principal)||isNaN(rate)||isNaN(time)){
        loader.style.display="none";
        const heading= document.querySelector("h3")
        const alert=document.createElement("div");
        alert.className="alert alert-danger";
        alert.attributes.role="alert";
        alert.textContent="Please Enter Valid Values";
        card.insertBefore(alert,heading);
        setTimeout(function(){
            alert.remove();
        },3000)
    }
    else{

        var temp=Math.pow(1+rate,time);
        var monthlyPayment=(principal*temp*rate)/(temp-1);
        setTimeout(function(){
            loader.style.display="none";
            results.style.display="block";
            monthlyPayment_.value=monthlyPayment.toFixed(2);
            totalPayment_.value=(monthlyPayment*time).toFixed(2);
            totalInterest_.value=((monthlyPayment*time)-principal).toFixed(2);
        },2000);
        
        
        
    }
    





    
    e.preventDefault();


})