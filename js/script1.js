$(document).ready(function(){

	//creats a new input field
	$input = '<tr> ' +
				'<div class="container">' +
					'<td>' +
						'<input type="text" name="activity2" class="form-control inp" list="interests">' +
					'</td>' +
					'<td>' +
						'<select class="form-control">' +
						  '<option>להשתתף</option>' +
							'<option>ללמוד</option>' +
						'</select>' +
					'</td>' +
				'</div>' +
			'</tr>';

	//a function to add the new input field	to the page when #add button is clicked	
	$('#add').on('click', function() {
		$('#pref').append($input);
	});

	//a function that marks which days were chosen in the #calender table
	var $day = $('td div');
	$day.on('click', function(){
		if ($(this).css("font-family") === "sans-serif") {
			$(this).css("background-color","white");
			$(this).css("font-family","serif");
		} else {
			$(this).css("background-color","#4d9ad4");
			$(this).css("font-family","sans-serif");
		}
	});

	function validateCal() {
		var flag = 0;
		var id;
		var font;
		for (var i = 1; i < 22; i++) {
			id = "#"+i;
			font = $(id).css("font-family");
			console.log(font);
			if (font === "sans-serif") {
				flag = 1;
				break;
			}
		}

		if (flag) {
			return true;
		}

		alert("נא למלא זמן שבו אתם פנויים.");
		return false;
	}

	//a function to validate that the inputs entered are valid before moving to next page
	function validFunc() {
		var flag;
		var counter = 0;
		var option;
		if ($("#inp1").val() == "" || $("#sel1").val() == "") {
			if ($("#inp1").val() == "" && $("#sel1").val() == ""){
				$("#inp1").css("border", "1.5px solid red");
				$("#sel1").css("border", "1.5px solid red");
			} else if ($("#inp1").val() == "") {
				$("#inp1").css("border", "1.5px solid red");
				$("#sel1").css("border", "1px solid rgba(0,0,0,.15)");
			} else {
				$("#inp1").css("border", "1px solid rgba(0,0,0,.15)");
				$("#sel1").css("border", "1.5px solid red");
			}
			alert("חובה למלא את השדות המסומנים באדום");
			return false;
		}

		$("input").each(function() {
			flag = 0;
			option = $("#interests option:first-child");
			//alert("Input is: " + $(this).val())
			for (var i=0; i < $("#interests option").size(); i++) {
				// alert("Option is: " + option.val());
				// alert("Input is: " + input.val());
				if ($(this).val() === option.val() || $(this).val() === "") {
					flag = 1;
					break;
				}
				option = option.next();
			}

			if (flag === 0) {
				alert("נא למלא ערך מהרשימה");
				return false;
			} else {
				counter++;
			}
		});
		if (counter === $("input").size() && validateCal()) {
			window.location.href = "step2.html"
			return true;
		} else {
			return false;
		}
	}

	$('#next').on('click', validFunc);
});