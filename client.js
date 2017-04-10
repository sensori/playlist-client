
// define(function (require) {
//     var https = require('https');
// });
// var https = require('https')
// app.use((request, response, next) => {  
//   console.log(request.headers)
//   next()
// })

// app.use((request, response, next) => {  
//   request.chance = Math.random()
//   next()
// })
// $(document).ready(function() {
//   // initialization
//   SC.initialize({
//     client_id: "15c5a12b5d640af73b16bd240753ffbb"
//   });

//   // Play audio
//   $("#embedTrack").click(function() {
//     var player = $("#player");
//     SC.oEmbed('https://soundcloud.com/mureed-abbas-shah/sami-meri-waar-by-qb-umair', {
//       maxheight: 200
//     }, function(res) {
//       $("#player").html(res.html);
//     });
//   });
// })
  // initialization
  SC.initialize({
    client_id: "15c5a12b5d640af73b16bd240753ffbb"
  });

function httpGetAsync(theUrl, callback)
{  
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function getPosts(){ 
  console.log('call back')
  var theUrl = "https://peaceful-plateau-86783.herokuapp.com/"
  var request = httpGetAsync(theUrl, getPostsCallback)
}

function getPostsCallback(response){
  var postData = JSON.parse(response); // array of JSON'ed posts
  var soundCloudLinks = [];

  postData.forEach(function (element){
    console.log('song links: ' + element.message);
    soundCloudLinks.push(element.message);
    SC.oEmbed(element.message, {maxheight: 200}, function(res) {
      document.getElementById("player").appendChild(res.html);      
    });    
  });
  console.log('song links: ' + soundCloudLinks);
  
  // var player = $("#player");
  // SC.oEmbed('https://soundcloud.com/mureed-abbas-shah/sami-meri-waar-by-qb-umair', {
  //   maxheight: 200
  // }, function(res) {
  //   // $("#player").html(res.html);
  //   console.log(res.html);
  //   document.getElementById("player").appendChild(res.html);
  // });
    // var trackUrl = 'https://soundcloud.com/mureed-abbas-shah/sami-meri-waar-by-qb-umair';
    // SC.oEmbed(trackUrl, {maxheight: 200}, document.getElementById("player"));
    //   // $("#player").html(res.html);
    // console.log(res.html);
    // document.getElementById("player").appendChild(res.html);
}