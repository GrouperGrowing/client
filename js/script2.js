function validate() {
	if ((document.getElementById("mail").value.length > 0) && checkMail()) {
		return true;
	} else {
		alert("נא להכניס אי מייל");
		return false;
	}		
}

function checkMail() {
	eEntered = document.getElementById("mail").value;
	if ((eEntered.indexOf(' ') === -1) && (eEntered.indexOf('@') > 0) && (eEntered.indexOf('.') < eEntered.length - 2) && (eEntered.indexOf('.') - eEntered.indexOf('@') > 0)) {
		return true;
	}
	return false;
}