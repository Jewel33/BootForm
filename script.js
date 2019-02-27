function checkFirstName(){
	var firstNameValue = $('#firstName').val().length;
	if(firstNameValue>=6 && firstNameValue<=15){
		$('#firstError').text(' ');
		return true;
	}else{
		$('#firstError').text('First name should be 6 yo 15 chars');
		return false;
	}
}

$('#firstName').click(function() {
	checkFirstName();
});

$('#firstName').blur(function() {
	checkFirstName();
});

$('#firstName').keyup(function() {
	checkFirstName();
	
});

function checkLastName(){
	var lastNameValue = $('#lastName').val().length;
	if(lastNameValue>=6 && lastNameValue<=15){
		$('#lastError').text(' ');
		return true;
	}else{
		$('#lastError').text('last name should be 6 yo 15 chars');
		return false;
	}
}


$('#lastName').click(function() {
	checkLastName();
});

$('#lastName').blur(function() {
	checkLastName();
});

$('#lastName').keyup(function() {
	checkLastName();
	
});

function checkEmailAdd(){
	var pattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i);
	if(pattern.test($('#emailAdd').val())){
		$('#emailError').text(' ');
		return true;
	}else
	{
		$('#emailError').text('email is invalid');
		return false;
	}
}


$('#emailAdd').click(function() {
	checkEmailAdd();
});

$('#emailAdd').blur(function() {
	checkEmailAdd();
});

$('#emailAdd').keyup(function() {
	checkEmailAdd();
	
});

function checkPassword(){
	var password = $('#password').val();
	var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
	if(reg.test(password)){
		$('#passError').text(' ');
		return true;
	}else{
		$('#passError').text('invalid password');
		return false;
	}
}


$('#password').click(function() {
	checkPassword();
});

$('#password').blur(function() {
	checkPassword();
});

$('#password').keyup(function() {
	checkPassword();
	
});

$('#showHide').click(function() {
	var attrvalue = $('#password').attr('type');
	if(attrvalue == 'password'){
		$('#password').attr('type','text');
		return true;
	}else{
		$('#password').attr('type','password');
		return false;
	}
});

function confirmPassword(){
	var confrimPass = $('#Conpassword').val();
	var password = $('#password').val();
	if(password == confrimPass){
		$('#ConpassError').text(' ');
		return true;
	}else{
		$('#ConpassError').text('password did not match');
		return false;
	}
}


$('#Conpassword').click(function() {
	confirmPassword();
});

$('#Conpassword').blur(function() {
	confirmPassword();
});

$('#Conpassword').keyup(function() {
	confirmPassword();
	
});

function checkGender(){
	var genderInfo = $('input[type="radio"]:checked').val();
	if(genderInfo == 'Male' || genderInfo == 'Female'){
		$('#genderError').text(' ');
		return true;
	}else{
		$('#genderError').text('please give ur gender info');
		return false;

	}
}


function checkCity(){
	var cityInfo = $('#city').val();
	if(cityInfo == ' '){
		$('#cityError').text('please give ur city info');
		return true;
	}else{
		$('#cityError').text(' ');
		return false;

	}
}

$('#form').submit(function() {
	if(checkFirstName() == true && checkLastName() == true && checkEmailAdd() == true&& checkPassword() == true && confirmPassword() == true && checkGender() == true && checkCity == true){
		return true;
	}else{
		return false;
	}
});


