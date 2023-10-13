"use strict";

// When page is loaded... 
$(document).ready( () => {

	// Pattern for checking Email...
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    
	// Moving focus to Pickup Date input....
	$("#pickup_date").focus();

	// As an when user submits the form following function will be executed....
	$("#reservation_form").submit(function(e){
		
		let formSubmit=true;

		// Getting data from inputs and trimming it...
		let pickup_date=$("#pickup_date").val().trim();
		let days=$("#days").val().trim();
		let name=$("#name").val().trim();
		let email=$("#email").val().trim();
		let phone=$("#phone").val().trim();

		// Checking if pickup date is empty or not...
		if(!pickup_date)
		{
			$("#pickup_date").next().text("Please Enter Pickup Date.");
			formSubmit=false;
		}
		else
		{
			$("#pickup_date").next().text("");
		}

		// Checking if number of days is empty or not and checking if there are no alphabets in input....
		if(!days)
		{
			$("#days").next().text("Please Enter Number Of Days.");
			formSubmit=false;
		}
		else if(isNaN(days))
		{
			$("#days").next().text("Please Enter Only Digits.");
			formSubmit=false;
		}
		else
		{
			$("#days").next().text("");
		}

		// Checking if name is empty or not...
		if(!name)
		{
			$("#name").next().text("Please Enter Your Name.");
			formSubmit=false;
		}
		else
		{
			$("#name").next().text("");
		}

		// Checking if email is empty or not and checking if email is matching the pattern or not...
		if(!email)
		{
			$("#email").next().text("Please Enter Email.");
			formSubmit=false;
		}
		else if(!email.match(emailPattern))
		{
			$("#email").next().text("Please Enter A Valid Email Address.");
			formSubmit=false;
		}
		else
		{
			$("#email").next().text("");
		}

		// Checking if phone is empty or not...
		if(!phone)
		{
			$("#phone").next().text("Please Enter Phone Number.");
			formSubmit=false;
		}
		else
		{
			$("#phone").next().text("");
		}

		// If all the inputs are correct the form will be submitted or else it won't be submitted...
		if(!formSubmit) {  e.preventDefault(); }
	});
		
}); // end