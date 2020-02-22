var http = require('http');
var url = require('url');
var q = require('querystring');


var myhtml = '<html> <head><title>server</title></head>'+'<body>'+'<form method="POST" action="/">'+
    'first name : <input name="firstname"><br>'+
    'last name : <input name="lastnamr"><br> '+
    '<input type="submit">'+
    '</form>'+
    '</body></html>';



var myhttp= http.createServer(function (request,response) {
  response.end(myhtml);


  if(request.method=='POST'){
    var body ="";
    request.on('data',function (data) {
body= body+data;
    });
    request.on('end',function () {
var post= q.parse(body);

console.log(post['firstname']);
      console.log(post['lastnamr']);
    });

  }


});

    myhttp.listen(8888);

console.log('we are lestining to port kl z8');