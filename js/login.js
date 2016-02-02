$(function(){
	$('#login-form').submit(function(e){
		e.preventDefault();
		var errors = [];
		var fakeuser = "bobafett";
		var password = "slave2"
		if ($('#username').val() == '') errors.push('You must type a username');
		if ($('#password').val() == '') errors.push('You must type a password');
		if (errors.length > 0){
			swal({
				title: 'Error',
				text: errors.join('<br>'),
				type: 'error',
				html: true
			});
		} else {
			if ($('#username').val() == fakeuser && $('#password').val() == password){
				window.location.assign('home.html');
			} else {
				swal({
					title: 'Error',
					text: 'User or password invalid, try again',
					type: 'error',
					html: true
				});
			}
		}
	});
});