function addNewTeamMember(div){
	var member = '<p><label for="name">Member: </label><input type="text" class="team-member-name-input" name="name"> </p>'
	$(div).append(member);
}

function createNewTeam(){
	var html = '<hr>';
	html += '<h3><label for="team_name">Team Name: </label><input type="text" class="team-name-input" name="team_name" value="New Team"></h3>'
	html += '<div id="team-members"></div>'
	html += '<button class="new-member-button" type="button"> New member</button>'
	html += '<hr>';
	$('#new-team').html(html);
	addNewTeamMember('#team-members');
	$('.new-member-button').click(function(){
		addNewTeamMember('#team-members');
	});
}

function saveNewTeam(){
	var team_name = $('.team-name-input').val();
	if (team_name == ''){
		return false;
	}
	var team_members = [];
	$.each($('.team-member-name-input'), function(index, member){
		if ($(member).val() != ''){
			team_members.push($(member).val());
		}
	});
	if (team_members.length < 1){
		return false;
	}
	var html = '<div class="team-div">';
	html += '<h3>' + team_name + ' - Members: ' + team_members.length +  '</h3>';
	html += '<hr><ol type="1">';
	$.each(team_members, function(index, member_name){
		html += '<li>' + member_name + '</li>';
	});
	html += '</ul>';
	html += '</div>';
	$('#team-container').append(html);
	return true;
}

$(function(){
	$('#create-team-div').hide();
	$('.new-team-button').click(function(){
		createNewTeam();
		$('#create-team-div').show();
	});
	$('.create-team-button').click(function(){
		swal({
			title: "Are you sure?",
			text: "You will not be able to edit the team",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "Yes",
			cancelButtonText: "No",
			closeOnConfirm: false,
			closeOnCancel: false
		}, function(isConfirm){
			if (isConfirm) {
				if (saveNewTeam()){
					$('#new-team').html('');
					$('#create-team-div').hide();
					swal("Saved","You saved the new team", "success");
				} else {
					swal("Cancelled", "Check team data", "error");
				}
			} else {
				swal("Cancelled", "Keep editing your team", "error");
			}
		});
	});
}); 