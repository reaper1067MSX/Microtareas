function DragDrop(drag, drop)
	{
var drag = document.getElementById(drag);
var drop = document.getElementById(drop);
	 
	 drag.ondragstart = function(e)
	 {
		//Guardamos el id del elemento para transferirlo al elemento drop
		//Contenido es una clave que nos permitirá acceder al valor asignado
		e.dataTransfer.setData("contenido", e.target.id);
	 }
	 
	 drop.ondragover = function(e){
		//Cancelar el evento que impide que podamos soltar el elemento drag
		e.preventDefault();
	 }
	 
	 drop.ondrop = function(e){
		//Obtenemos los datos a través de la clave contenido, en este caso el id
		var id = e.dataTransfer.getData("contenido");
		e.target.appendChild(document.getElementById(id));
	 }
	 
	}
	
	window.onload = function(){
		DragDrop("drag", "drop1");
	
		
	}