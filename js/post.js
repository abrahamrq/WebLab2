$(function(){
	$('form#poster').submit(function(e){
		e.preventDefault();
		var post = $('#post-textarea').val();
		if (post == ""){
			swal({
				title: 'Error',
				text: 'You are not posting anything',
				type: 'error',
				html: true
			});
		} else {
			$('#post-textarea').val('');
			var post_html = '<div class="post row">';
      post_html += '<hr>';
      post_html += '<div class="col-md-1 hidden-xs">';
      post_html += '<img src="images/fett.jpg" class="img-responsive">'
      post_html += '</div>'
      post_html += '<div class="col-md-11">'
      post_html += '<div class="post-owner"> Boba Fett</div>'
      post_html += '<div class="post-message">'+ post + '</div>'
      post_html += '<div class="post-timestamp">'
      post_html += '<span class="time"> Today at 12:00pm</span>'
      post_html += '<span class="place"> at Death Star</span>'
			post_html += '</div>'
      post_html += '</div>'
      post_html += '</div>'
      $('#posts').prepend(post_html);
		}
	});
});