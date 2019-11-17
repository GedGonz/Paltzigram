var page = require('page');

var main = document.querySelector('#main-container');

page('/', function(ctx, next) {
    main.innerHTML = 'Home <a href="/signup">Signup</a>';
})
page('/signup', function(ctx, next) {
    main.innerHTML = 'signup  <a href="/">Other Home</a>';
})

page();