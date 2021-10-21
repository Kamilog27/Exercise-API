var boton=document.getElementById("agregar");
var text=document.getElementById("text");
var homeworks=document.getElementById("homeworks");
function callApi(){
    
    $.get("https://immense-plateau-68535.herokuapp.com/list",function(data){
        
        for(let i=0;i<data.data.length;i++){
            var homework = document.createElement("div");
            var texto=document.createElement("h3");
            texto.innerHTML=data.data[i];
            homework.appendChild(texto);
            homework.classList.add("homework");
            homeworks.appendChild(homework);
        }
    });
    
}
callApi();
function agregar(){
    var texto=text.value;
    $.post("https://immense-plateau-68535.herokuapp.com/add",{
        todoitem:texto
    },function(data){
        
        callApi();
    });
    text.value="";
}

