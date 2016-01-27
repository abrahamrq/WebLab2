$(function(){
	$('#login-form').submit(function(e){
		e.preventDefault();
		var errors = [];
		if ($('#username').val() == '') errors.push('Username must be valid');
		if ($('#password').val() == '') errors.push('Password must be valid');
		if (errors.length > 0){
			swal({
				title: 'Error',
				text: errors.join('<br>'),
				type: 'error',
				html: true
			});
		} else {
			window.location.assign('home.html');
		}
	});
});