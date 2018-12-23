
// handler that is called from the Present endpoint
exports.calling_bird_http = function(data, callback){

  const count = parseInt(data.birds);

  let body = "";
  body +="<html><body><h1>Day 4 Present</h1>";
  for (let i =0; i < count; i++)
    body += "<img src = 'https://usercontent2.hubstatic.com/4233451.jpg'/>";
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

exports.update_client = function(data, callback){

  const client = data.client;

  console.log("Got a client update for:", client.first_name, " ", client.last_name)
  client.getAnswer('rings').then( (rings) => {
    console.log(client.name, " now has ", rings, " rings");
  })
  
  callback(null, {});
}

