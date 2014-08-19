
var DATA_SPREADSHEET_ID = '1zJ_w0DrF6K2-VUw_8ijPo2OC_T0_m8alhEsM9m6Gp1s';
var DATA_DOCUMENT_FEED = 'https://spreadsheets.google.com/feeds/list/'+DATA_SPREADSHEET_ID+'/od6/public/values?alt=json';

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
    $('#fact').html(entry.gsx$facts.$t);
    setColour();
}

function setColour()
{
    var r = Math.floor( Math.random()*51.2)*5;
    var g = Math.floor( Math.random()*51.2)*5;
    var b = Math.floor( Math.random()*51.2)*5;

    $('#bgcolor').css('background-color', 'rgb('+r+', '+g+', '+b+')');
//    $('#newfact').hover(function(){
//        $('#newfact').css('color','rgb('+r+', '+g+', '+b+')');
//        },function(){
//        $('#newfact').css('color','#fff');
//    });
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

