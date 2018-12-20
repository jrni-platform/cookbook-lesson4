
// handler that is called from the Present endpoint
exports.calling_bird_http = function(data, callback){

  let body = "";
  body +="<html><body><h1>Day 4 Present</h1>";
  body += "<img src = 'https://kscnewmancenter.files.wordpress.com/2012/12/aimgt104.jpg?w=400&h=399'/>";
  body += "</body></html>";

  const response = {
    statusCode: 200,
    response: body,
    proxy: true,
    headers: {
      "Content-Type": "text/html; charset=UTF-8"
    }
  };
  callback(null, response);
}

