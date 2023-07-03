export class Messages {
  constructor(selector) {
    this.node = document.querySelector(selector);
  };
  
  renderMessage = (username, message) => {
    this.node.innerHTML += `[${username}]: ${message}\n`;
  };
  
  //wraper 
  renderSystemMessage = message => {
    this.renderMessage('system', message);
  };
};