var page = require("page");
var yoyo = require("yo-yo");
var empty = require('empty-element');
var template = require('./template');



page("/signup", function(ctx, next) {

    var main = document.querySelector("#main-container");
    empty(main).appendChild(template);
});