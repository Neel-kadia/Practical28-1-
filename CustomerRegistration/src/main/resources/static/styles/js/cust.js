$(document).ready(function(){
	    		
	$("#first_form").validate({
	rules: {
	  		firstName : 'required',
	    	lastName : 'required',
	    	dateOfBirth : 'required',
	    	mobile : 'required',
	    	address1 : 'required',
	    	address2 : 'required',
	    	age : 'required',
	    	gender : 'required',
	    	email : {
	    			required : true,
	    			email : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	    			},
	       },
	messages: {
	    	    firstName: 'First Name is required',
	    		lastName : 'Last Name is required',
	    		dateOfBirth : 'Date Of Birth is required',
	    		mobile : 'Mobile number is required',
	    		address1 : 'Address is required',
	    		address2 : 'Address is required',
	    		age : 'Age is required',
	    		gender : 'please select gender',
	    		email :{
	    				required : 'Email is required',
	    				email : 'Enter valid Email',
	    			   } 
	    	  },
	submitHandler: function(form){
	    				form.submit();
	    			}
	    		});

});