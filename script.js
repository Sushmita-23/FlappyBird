var block = document.getElementById('block');
var hole = document.getElementById("hole");
var charac = document.getElementById('charac');
 var jumping = 0;
 var counter = 0;

hole.addEventListener('animationiteration', () => {
    var ran= Math.random() * 3;
    var top = (ran* 100) + 150;
    hole.style.top = -(top) + "px";
    counter++;
});
setInterval(function () {
    var chTop = parseInt(window.getComputedStyle(charac).getPropertyValue("top"));
     if (jumping == 0) {
        charac.style.top = (chTop + 3) + "px";
    }
     var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
     var holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
     var chTop = parseInt(window.getComputedStyle(charac).getPropertyValue("top"));
    var cTop = -(500 - chTop);
     if ((chTop > 480) || ((blockleft < 20) && (blockleft > -50) && ((cTop < holetop) || (cTop > holetop + 130))))
    {
         alert("Game Over! Sore:" + counter);
         charac.style.top = 100 + "px";
         counter = 0;
    }
}, 10);

function jump() {
    jumping = 1;
    let jumpcount = 0;
    var jumpinterval = setInterval(function () {
        var chTop = parseInt(window.getComputedStyle(charac).getPropertyValue("top"));
        if ((chTop > 6) && (jumpcount < 15))
        {
            charac.style.top = (chTop - 5) + "px";
         }
        if (jumpcount > 20) {
            clearInterval(jumpinterval);
            jumping = 0;
            jumpcount = 0;
        }
        jumpcount++;
    }, 10);
}