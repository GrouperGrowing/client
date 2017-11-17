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

	alert("נא למלא זמן שבו אתם פנויים.")
	return false;
}
