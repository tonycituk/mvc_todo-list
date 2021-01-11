//Main code
console.log("%cHello! 🎉","color: #888888; font-weight:bold; font-size: 35px; font-family:monospace; text-shadow: 1px 2px 0 #ffffff;");
console.log("🌟 star the github repo!: " + "https://github.com/Antonio-Cituk/mvc_todo-list");
/*
 ____    ____  ____   ____   ______    _                 __          __    _          _    
|_   \  /   _||_  _| |_  _|.' ___  |  / |_              |  ]        [  |  (_)        / |_  
  |   \/   |    \ \   / / / .'   \_| `| |-' .--.    .--.| |  .--.    | |  __   .--. `| |-' 
  | |\  /| |     \ \ / /  | |         | | / .'`\ \/ /'`\' |/ .'`\ \  | | [  | ( (`\] | |   
 _| |_\/_| |_     \ ' /   \ `.___.'\  | |,| \__. || \__/  || \__. |  | |  | |  `'.'. | |,  
|_____||_____|     \_/     `.____ .'  \__/ '.__.'  '.__.;__]'.__.'  [___][___][\__) )\__/  
*/
var myNotebook = new notebookModel();
var notebookControllerInstance = new notebookController(myNotebook, notebookView);