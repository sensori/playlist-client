
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



// script to expose SoundCloud Widget JS object https://developers.soundcloud.com/docs/api/html5-widget
var SC=SC||{};SC.Widget=function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){function r(n){return!!(""===n||n&&n.charCodeAt&&n.substr)}function o(n){return!!(n&&n.constructor&&n.call&&n.apply)}function i(n){return!(!n||1!==n.nodeType||"IFRAME"!==n.nodeName.toUpperCase())}function a(n){var t,e=!1;for(t in b)if(b.hasOwnProperty(t)&&b[t]===n){e=!0;break}return e}function s(n){var t,e,r;for(t=0,e=I.length;t<e&&(r=n(I[t]),r!==!1);t++);}function u(n){var t,e,r,o="";for("//"===n.substr(0,2)&&(n=window.location.protocol+n),r=n.split("/"),t=0,e=r.length;t<e&&t<3;t++)o+=r[t],t<2&&(o+="/");return o}function c(n){return n.contentWindow?n.contentWindow:n.contentDocument&&"parentWindow"in n.contentDocument?n.contentDocument.parentWindow:null}function l(n){var t,e=[];for(t in n)n.hasOwnProperty(t)&&e.push(n[t]);return e}function d(n,t,e){e.callbacks[n]=e.callbacks[n]||[],e.callbacks[n].push(t)}function E(n,t){var e,r=!0;return t.callbacks[n]=[],s(function(t){if(e=t.callbacks[n]||[],e.length)return r=!1,!1}),r}function f(n,t,e){var r,o,i=c(e);return!!i.postMessage&&(r=e.getAttribute("src").split("?")[0],o=JSON.stringify({method:n,value:t}),"//"===r.substr(0,2)&&(r=window.location.protocol+r),r=r.replace(/http:\/\/(w|wt).soundcloud.com/,"https://cors-anywhere.herokuapp.com/" + "https://$1.soundcloud.com"),void i.postMessage(o,r))}function p(n){var t;return s(function(e){if(e.instance===n)return t=e,!1}),t}function h(n){var t;return s(function(e){if(c(e.element)===n)return t=e,!1}),t}function v(n,t){return function(e){var r=o(e),i=p(this),a=!r&&t?e:null,s=r&&!t?e:null;return s&&d(n,s,i),f(n,a,i.element),this}}function S(n,t,e){var r,o,i;for(r=0,o=t.length;r<o;r++)i=t[r],n[i]=v(i,e)}function R(n,t,e){return n+"?url="+t+"&"+g(e)}function g(n){var t,e,r=[];for(t in n)n.hasOwnProperty(t)&&(e=n[t],r.push(t+"="+("start_track"===t?parseInt(e,10):e?"true":"false")));return r.join("&")}function m(n,t,e){var r,o,i=n.callbacks[t]||[];for(r=0,o=i.length;r<o;r++)i[r].apply(n.instance,e);(a(t)||t===L.READY)&&(n.callbacks[t]=[])}function w(n){var t,e,r,o,i;try{e=JSON.parse(n.data)}catch(a){return!1}return t=h(n.source),r=e.method,o=e.value,(!t||A(n.origin)===A(t.domain))&&(t?(r===L.READY&&(t.isReady=!0,m(t,C),E(C,t)),r!==L.PLAY||t.playEventFired||(t.playEventFired=!0),r!==L.PLAY_PROGRESS||t.playEventFired||(t.playEventFired=!0,m(t,L.PLAY,[o])),i=[],void 0!==o&&i.push(o),void m(t,r,i)):(r===L.READY&&T.push(n.source),!1))}function A(n){return n.replace(Y,"")}var _,y,O,D=e(1),b=e(2),P=e(3),L=D.api,N=D.bridge,T=[],I=[],C="__LATE_BINDING__",k="https://cors-anywhere.herokuapp.com/" + "http://wt.soundcloud.dev:9200/",Y=/^http(?:s?)/;window.addEventListener?window.addEventListener("message",w,!1):window.attachEvent("onmessage",w),n.exports=O=function(n,t,e){if(r(n)&&(n=document.getElementById(n)),!i(n))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(e=e||{},n.src=R(k,t,e));var o,a,s=h(c(n));return s&&s.instance?s.instance:(o=T.indexOf(c(n))>-1,a=new _(n),I.push(new y(a,n,o)),a)},O.Events=L,window.SC=window.SC||{},window.SC.Widget=O,y=function(n,t,e){this.instance=n,this.element=t,this.domain=u(t.getAttribute("src")),this.isReady=!!e,this.callbacks={}},_=function(){},_.prototype={constructor:_,load:function(n,t){if(n){t=t||{};var e=this,r=p(this),o=r.element,i=o.src,a=i.substr(0,i.indexOf("?"));r.isReady=!1,r.playEventFired=!1,o.onload=function(){e.bind(L.READY,function(){var n,e=r.callbacks;for(n in e)e.hasOwnProperty(n)&&n!==L.READY&&f(N.ADD_LISTENER,n,r.element);t.callback&&t.callback()})},o.src=R(a,n,t)}},bind:function(n,t){var e=this,r=p(this);return r&&r.element&&(n===L.READY&&r.isReady?setTimeout(t,1):r.isReady?(d(n,t,r),f(N.ADD_LISTENER,n,r.element)):d(C,function(){e.bind(n,t)},r)),this},unbind:function(n){var t,e=p(this);e&&e.element&&(t=E(n,e),n!==L.READY&&t&&f(N.REMOVE_LISTENER,n,e.element))}},S(_.prototype,l(b)),S(_.prototype,l(P),!0)},function(n,t){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}},function(n,t){n.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}},function(n,t){n.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}]);

var startDate = new Date();
var endDate = new Date();
var dateRangeSelected = false;
var scWidgets = {}; // holds all the widgets loaded onto the page 
var widgetToDiv = {}; // dictionary for widgets to their parent divs, key is the soundcloud URL
var divCollection = []; // array of divs
var selectedMemberId = "";  // holds the ID of the selected group member
var memberSelected = false; // flag to check if user filtered by group member
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  // initialization
  SC.initialize({
    client_id: "15c5a12b5d640af73b16bd240753ffbb"
  });

// get all members on load and fill drop-down list
// $(document).ready(function(){
//   $('.combobox').combobox();
// });

// members edge was deprecated
// var theUrl = "https://peaceful-plateau-86783.herokuapp.com/getMembers"
// var request = httpGetAsync(theUrl, getMembersCallback)

// daterange picker
$(function() {

  $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });

  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
      startDate = picker.startDate;
      endDate = picker.endDate;
      dateRangeSelected = true;
  });

  $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('choose a date range');
      dateRangeSelected = false;
  });

  // $('#memberList').on('change', function (e) {
  //   var optionSelected = $("option:selected", this);
  //   var valueSelected = this.value;
  //   if (this.value != "") { // could have the blank option
  //     memberSelected = true; 
  //   }
  //   else {
  //     memberSelected = false;
  //   }   
// });

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
  var theUrl = "https://peaceful-plateau-86783.herokuapp.com/getPosts"
  if (dateRangeSelected == true) {
    theUrl += "?since=" + startDate.toISOString() + "&until=" + endDate.toISOString();
  }

  // check if user has selected a certain member
  // deprecated by facebook
  // var memberList = document.getElementById("memberList");
  // var selected = memberList.options[memberList.selectedIndex];
  // if (selected != null && selected.value != "") { // check if it's the empty option
  //   selectedMemberId = selected.value; // save the id for filtering posts
  //   if (dateRangeSelected == true) {
  //     theUrl += "&memberId=" + selectedMemberId;
  //   }
  //   else {
  //     theUrl += "?memberId=" + selectedMemberId;
  //   }
  // }

  var request = httpGetAsync(theUrl, getPostsCallback)
}

function responseErrorCheck(response){
  if (response.error != null && response.error.message) {
    console.log(response.error.message);
    return true;
  }
  return false;
}

function getMembersCallback(response){  
  if (responseErrorCheck(response) == false){
    var membersData = JSON.parse(response); // array of JSON'ed posts
    console.log(membersData);
    var memberList = document.getElementById("memberList");   

    for (var i = 0; i < membersData.length; i++){    
      var listOption = document.createElement("option");
      listOption.textContent = membersData[i].name;
      listOption.value = membersData[i].id;
      memberList.appendChild(listOption);
    }
    $('.combobox').combobox();
  }
}

function getPostsCallback(response){
  // check for errors
  if (responseErrorCheck(response) == true){
    console.log("error: " + response);
    return;
  }
  console.log('postData: ' + response);
  var responseData = JSON.parse(response); // array of JSON'ed posts; feed object from facebook API
  var postData = responseData.data;
  var soundCloudLinks = [];
  var ctr = 0;  

// // check if we have paged results  
// if (responseData.paging.next != null) {
//   // if so, request the next page
//   var theUrl = "https://peaceful-plateau-86783.herokuapp.com/getPosts"
//   theUrl += "?nextpage=" + responseData.paging.next; // send back the graph request for the next page
//   var request = httpGetAsync(theUrl, getPostsCallback);
// }
postData.forEach(function (post){
  if (post.link != null && post.link.includes('soundcloud.com')) {
    console.log('song links: ' + post.link);
    if (selectedMemberId == "" || 
    (selectedMemberId != "" && selectedMemberId == post.from.id)) { // filter by member ID if user has selected one
      soundCloudLinks.push(post.link);      
      
      var div = document.createElement("div");            
      div.id = ctr.toString(); // so we know sequentially which div this is
      divCollection.push(div); // keep a collection of divs to play sequentially
      widgetToDiv[post.link] = div; // add div to the dictionary for async access to correct div

      SC.oEmbed(proxyUrl + post.link, {maxheight: 200}, function(res) { // async call
        // set the new divs html, bind to events, and save reference to widget
        var widgetDiv = widgetToDiv[post.link];
        widgetDiv.innerHTML = res.html;
        var widget = SC.Widget(widgetDiv.children[0]);
        widget.bind(SC.Widget.Events.FINISH, function (){widgetFinished(post.link)});
        // if (parseInt(widgetDiv.id) == 0){ // may not need this?
        //   widget.bind(SC.Widget.Events.READY, firstWidgetReady);
        // }
        scWidgets[widgetDiv.id] = widget; // tie the widget to div's ID
      });
      document.getElementById("player").appendChild(div);
      ctr++;
    }
  }    
});
console.log('song links: ' + soundCloudLinks);

// function firstWidgetReady(){
//   scWidgets[0].play();
// }

  // call play on the next (sequential) widget
  // TODO: check if last track
  function widgetFinished(soundCloudUrl){    
    // get the div for the given url
    div = widgetToDiv[soundCloudUrl];

    // get the next player ID
    var numId = parseInt(div.id);
    var nextId = (numId + 1).toString();    
    scWidgets[nextId].play();

    // scroll player into view at top if not on screen
    document.getElementById(nextId).scrollIntoView( true );
  }

  // soundcloud widget stuff

  // autoplay
  // array of players - id the index
  // bind to play event for all players
  // bind to READY event for first player (maybe all?)
  // bind to FINISH events for now (eventually we want crossfade)
  // once first player is READY, start play
  // when FINISH event fires, start play of next player
}