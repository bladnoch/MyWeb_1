
/**
 * weather.js: display weather on the screen
 * @author DoungukKim
 * @since 7/9/2023
 * @version v0.0.1
 */

function onGeoGo(position){
    const lat=position.coords.latitude;
    const lon=position.coords.latitude;
    console.log(lat, lon);
}

function onGeoError(){
    alert("can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoGo,onGeoError);