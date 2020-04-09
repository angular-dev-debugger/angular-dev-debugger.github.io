var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://angular-dev-debugger.github.io/common.js?"+new Date().getTime();
head.appendChild(script);
