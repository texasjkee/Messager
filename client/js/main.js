import {Socket} from './modules/socket.js';
import {Username} from './modules/userName.js';

document.addEventListener('DOMContentLoaded', () => {
  const socket = new Socket();
  const userName = new Username('#username');

  socket.onSetUsername(userName.render);
});