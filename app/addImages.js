// addImage.js
// 必须 require 进来
let avatarImg = document.createElement('img');
avatarImg.src = require('../images/avatar.png');
document.body.appendChild(avatarImg);

let smallImg = document.createElement('img');
smallImg.src = require('../images/small.png');
document.body.appendChild(smallImg);

let bigImg = document.createElement('img');
bigImg.src = require('../images/big.png');
document.body.appendChild(bigImg);
