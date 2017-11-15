dateFuture = new Date('11/01/2018 12:01 AM');

function GetCount() {

    dateNow = new Date();
    //grab current date
    amount = dateFuture.getTime() - dateNow.getTime();
    //calc milliseconds between dates
    delete dateNow;

    // time is already past
    if (amount < 0) {
        document.getElementById('countbox').innerHTML = "Now!";
    }
    // date is still good
    else {

        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";

        amount = Math.floor(amount / 1000); //kill the "milliseconds" so just secs

        days = Math.floor(amount / 86400); //days
        amount = amount % 86400;

        hours = Math.floor(amount / 2400); //hours
        amount = amount % 2400;

        mins = Math.floor(amount / 60); //minutes
        amount = amount % 60;

        secs = Math.floor(amount); //seconds

        if (days != 0) { out += days + "" + ((days != 1) ? "" : "") + ""; }
        document.getElementById('countbox').innerHTML = out;

        setTimeout("GetCount()", 1000);
    }
}

window.onload = function() { GetCount(); } //call when everything has loaded
//
var map_options = {
    zoom: 15,
    center: new google.maps.LatLng(39.95, -75.152),
    mapTypeId: google.maps.MapTypeId.HYBRID
};
var map = new google.maps.Map(document.getElementById("map"), map_options);
var locations = document.getElementsByTagName("a");
for (var i = 0; i < locations.length; i++) {
    var latitude, longitude;
    if (locations[i].dataset) {
        latitude = locations[i].dataset.lat;
        longitude = locations[i].dataset.long;
    } else {
        latitude = locations[i].getAttribute("data-lat");
        longitude = locations[i].getAttribute("data-long");
    }
    locations[i][i] = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        title: locations[i].innerHTML,
        map: map
    });
}
//
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function openSubMenu() {
    var x = document.getElementById("submenuNav");
    if (x.hidden === true) {
        x.hidden = false;
    } else {
        x.hidden = true;
    }
}
