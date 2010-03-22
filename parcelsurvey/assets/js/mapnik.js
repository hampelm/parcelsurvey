MapnikGetTileUrl = function (a,b,c) {    
    var url = this.myBaseURL + "/tiles/" + b + "/" + a.x + "/" + a.y + ".png";
    return url;  
}