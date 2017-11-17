$(document).ready(function(){

	//creats a new input field
	$input = '<div class="form-group">' +
			'<input type="text" name="activity2" class="form-control inp" list="interests">' +
			'</div>';

	//a function to add the new input field	to the page when #add button is clicked	
	$('#add').on('click', function() {
		$('#inputs').append($input);
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
		for (var i = 1; i < 22; i++) {
			id = ""+i;
			console.log(document.getElementById(id).style.fontFamily);
			if (document.getElementById(""+i).style.fontFamily === "sans-serif") {
				flag = 1;
				break;
			}
		}

		if (flag) {
			return true;
		}

		return false;
	}

	//a function to validate that the inputs entered are valid before moving to next page
	function validFunc() {
		var flag;
		var counter = 0;
		var option;
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
			window.location.href= "step3.html";
		} else if (!validateCal()) {
			alert("נא למלא זמן שבו אתם פנויים.")
		} else {
			return false;
		}
	}
});