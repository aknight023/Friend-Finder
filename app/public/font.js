$(document).ready(function () {

	$("#submitQuestionnaire").on("click", function(event) {
			event.preventDefault();
			var scoresArr = [];
			for (var i = 1; i<=10; i++) {

				var number = parseInt($('#q'+i).val());
				if (isNaN(number)) {
					$('.modal-title').text('ERROR!!');
					$('#modalresult').modal('toggle');
					$('#modal-img').hide();
					$("#modal-name").text('Please answer all of the questions');
					return false;
				} else {

					scoresArr.push(number);
				}
				
			}				

			var questionnaire = {
				name: $("#form-fullname").val().trim(),
				photo: $("#form-photoimage").val().trim(),          
				scores: scoresArr
			};
			
			$.post("/api/friends", questionnaire)
			.then(function(data) {
				console.log("Adding questionnaire...");						
			
				if (data) {
					$('#modalresult').modal('toggle');
					$('.modal-title').text('Best Fiends Match is '+ data.name);					
					$('#modal-img').show();
					$('#modal-img').attr("src", data.photo);

				} else {

					$("#modal-name").text("SOMETHING HAPPEN")
				}		

			});
	});

});