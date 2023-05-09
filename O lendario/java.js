var b = document.querySelector(".a2");
b.addEventListener("mouseover",change);
function change()
{
    var i = Math.floor(Math.random()*350)+1;
    var j = Math.floor(Math.random()*290)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";
}