nlp = window.nlp_compromise;

var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Chattersaurus', //name of the chatbot
  talking = true; //when false the speach function doesn't work

function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused, please say 'hi'."; //the default message

  if (lastUserMessage === 'hi') {
    botMessage = "Hey, I'm "+botName+". How are you feeling today?";
    console.log("first if");
  }else if (lastUserMessage === 'hello') {
    botMessage = "Hey, I'm "+botName+". How are you feeling today?";
  }else if(lastUserMessage === 'good') {
    botMessage = "That's great to hear! " + botName + " isn't doing so well.";
    console.log("second if");
    }else if(lastUserMessage === 'great') {
    botMessage = "That's great to hear! " + botName + " isn't doing so well.";}else if(lastUserMessage === 'fine') {
    botMessage = "That's great to hear! " + botName + " isn't doing so well.";}
    else if (lastUserMessage === "why"){
        botMessage = "Yesterday I got in a fight with Indominous Rex.";
        console.log("third if");
  }
    else if (lastUserMessage === "why?"){
        botMessage = "Yesterday I got in a fight with Indominous Rex.";
        }
    else if (lastUserMessage === "why not"){
        botMessage = "Yesterday I got in a fight with Indominous Rex.";}
    else if (lastUserMessage === "why not?"){
        botMessage = "Yesterday I got in a fight with Indominous Rex.";} 
  else if(lastUserMessage === "what happened"){
    botMessage = "I got dino sore. . . ";
  }else if(lastUserMessage === "what happened?"){
    botMessage = "I got dino sore. . . ";}
  
}

function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i]){
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
      }
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}