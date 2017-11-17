$(document).ready(function(){

	var $input = '<form class="form-inline">' +
				'<div class="form-group inpg" id="teach2div">' +
					'<input type="text" class="form-control" id="teach2" list="interests">' +
				'</div>' +
				'<div class="form-group selc" style="width:27%;margin-left:0">' +
					'<div class="btn-group bootstrap-select sel" style="width:100%;">' +
					'<select class="form-control">' +
							  '<option>נסיון</option>' +
							  '<option>מתחיל</option>' +
							  '<option>מנוסה</option>' +
							  '<option>מתקדם</option>' +
							  '<option>מומחה</option>' +
						  	'</select></div>' +
				'</div>' +
			  '</form>';

	$('#add').on('click', function() {
		$('#forms').append($input);
	});

	$('#next').on('click', function() {
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
		if (counter === $("input").size()) {
			window.location.href= "step3.html";
		}
	});
});