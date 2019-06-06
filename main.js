//start button
document.getElementById("btn").onclick = function () {
    document.getElementById("appear").style.display="block";
    document.getElementById("btn").style.display="none";
    document.getElementById("stop_btn").style.display="inline";
    document.getElementById("stop_btn").style.textAlign="center";
    document.getElementById("timeShow").innerText = "Your Time 00:00";
    setTimeout(startGame,500);

};
//stop button
document.getElementById("stop_btn").onclick = function () {
    document.getElementById("appear").style.display="none";
    document.getElementById("stop_btn").style.display="none";
    document.getElementById("btn").style.display="inline";
    document.getElementById("btn").style.textAlign="center";
};

function startGame() {
    var start= new Date().getTime();
    createShape();
    document.getElementById("shape").onclick = function () {
        var end = new Date().getTime();
        var result = (end-start)/1000+"s";
        document.getElementById("timeShow").innerText = "Your Time : "+result;
        document.getElementById("appear").style.display="none";
        setTimeout(startGame,500);
    }
}
//create shapes with random parameters
function createShape() {
    document.getElementById("appear").style.display="inline";
    console.log(randomWidth()+"%");
    var styleShape = document.getElementById("shape").style;
    styleShape.borderRadius = randomWidth()+"%";
    styleShape.background  = randomColor();
    styleShape.left = (Math.floor(Math.random()*80)+10)+"%";
    styleShape.top =  (Math.floor(Math.random()*55)+28)+"%";
    document.getElementById("textInShape").style.lineHeight= styleShape.height = styleShape.width = (Math.floor(Math.random()*100)+100)+"px";

}
//function to determine random width of the border
function randomWidth() {
    var r_width;
    r_width=Math.floor(Math.random()*51)+50;
    return r_width;
}
//function to return random rainbow color
function randomColor() {
    var color;
    switch (Math.floor(Math.random()*7)+1) {
        case 1: color= "#9400D3";
            break;
        case 2: color= "#4B0082";
            break;
        case 3: color= "#0000FF";
            break;
        case 4: color= "#0000FF";
            break;
        case 5: color= "#FFFF00";
            break;
        case 6: color= "#FF7F00";
            break;
        case 7: color= "#FF0000";
            break;
    }
    return color;
}