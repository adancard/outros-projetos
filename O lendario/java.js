var b = document.querySelector(".a2");
b.addEventListener("mouseover",change);
function change()
{
    var i = Math.floor(Math.random()*200)+1;
    var j = Math.floor(Math.random()*250)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";
}