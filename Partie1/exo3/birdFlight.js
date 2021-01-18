

function birdflight(lat1, lat2, long1, long2) {

    var R = 6371; // Radius of the earth in km 
    var dLat = (lat2 - lat1) * (Math.PI / 180); // deg2rad below 
    var dLon = (long2 - long1) * (Math.PI / 180);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km 
    return Math.ceil(d * 100) / 100;

}
console.log(birdflight(0.5, 0, 9.45, 78))