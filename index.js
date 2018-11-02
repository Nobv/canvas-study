'use strict';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("canvas");
    canvas.height = screen.height;
    canvas.width = screen.width;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,screen.height, screen.width);

    canvas.addEventListener('mousedown', function (e) {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        ctx.fillStyle = "black";
        ctx.fillText("★", x, y);
    });


});

