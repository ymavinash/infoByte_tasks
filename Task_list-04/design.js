function ADD(){
   a=parseInt(document.getElementById("N1").value);
   b=parseInt(document.getElementById("N2").value);
   result=document.getElementById("res").textContent=a+b;

}
function SUB(){
    a=parseInt(document.getElementById("N1").value);
    b=parseInt(document.getElementById("N2").value);
   result=document.getElementById("res").textContent=a-b;
}
function MUL(){
    a=parseInt(document.getElementById("N1").value);
    b=parseInt(document.getElementById("N2").value);
   result=document.getElementById("res").textContent=a*b;
}
function DIV(){
    a=parseInt(document.getElementById("N1").value);
    b=parseInt(document.getElementById("N2").value);
   result=document.getElementById("res").textContent=a/b;
}