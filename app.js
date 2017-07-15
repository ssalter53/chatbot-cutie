var messages = [],
lastUserMessage = "",
botMessage = "",
botName = "ChatSaur",
talking = true

function chatbotResponse(){
	talking = true;
	botMessage = "I'm confused";

	if (lastUserMessage === "hi"){
		botMessage = "hELlo";
	}
	if (lastUserMessage === "name"){
		botMessage = "My name is" + botName;
	}


}
