
var DATA_SPREADSHEET_ID = '1otkK6SidFVfwrOiU4L0l6fRu2bZKIaGJVrIRIqjDJJc';
var DATA_DOCUMENT_FEED = 'https://spreadsheets.google.com/feeds/list/'+DATA_SPREADSHEET_ID+'/default/public/values?alt=json';

function init()
{
    $.get(DATA_DOCUMENT_FEED, function(data) {
        window.data = data;
        window.len = data.feed.entry.length;
        window.author = data.feed.author[0].name;
        shuffle();
    });
}

function shuffle()
{
    var i = Math.floor( Math.random() * len );
    var entry = data.feed.entry[i];
    if (entry.gsx$season.$t && entry.gsx$episode.$t) {
        $('#season').html("Season " + entry.gsx$season.$t);
        $('#episode').html("Episode " + entry.gsx$episode.$t);
        $('#seperator').html('|');
    }
    $('#fact').html(entry.gsx$fact.$t);
    setColour();
}

function setColour()
{
    var r = Math.floor( Math.random()*51.2)*5;
    var g = Math.floor( Math.random()*51.2)*5;
    var b = Math.floor( Math.random()*51.2)*5;

    $('#bgcolor').css('background-color', 'rgb('+r+', '+g+', '+b+')');
}


$(document).ready(function(){
    
    init();
    setTimeout(function(){
        $('#content').hide().css("visibility", "visible").fadeIn(100);
    },50);

    setTimeout(function(){
        $('#mybutton').hide().css("visibility", "visible").fadeIn(200);
    },500);
});

