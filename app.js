function chat(){
	var textBoxValue = document.getElementById("textBox").value;
	if (textBoxValue == "Hello"){
		document.getElementById("log2").innerHTML = "Hello!\n";
	}
	if (textBoxValue == "How are you?"){
		document.getElementById("log2").innerHTML = "I'm fine thank you!\n";
	}
	if (textBoxValue == "What time is it?"){
		document.getElementById("log2").innerHTML = "I'm fine thank you!\n";
	}
	document.getElementById("log").innerHTML += Date() + "\n";
	document.getElementById("log").innerHTML += "User: " + textBoxValue + "\n";
	document.getElementById("log").innerHTML += "Kirby: " + document.getElementById("log2").innerHTML + "\n";
}