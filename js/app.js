/*
    Variable global que indica la posicion de la imagen. Empezamos
    siempre cero. 
*/
var actual = 0;
            /*
                Esta funcion se utiliza para mover la posicion para mover los puntos
                cuando se le hace click en el html. Recibe como parametro la imagen
                clickeada.
            */
			function puntos(n){
                //Obtiene todos los puntos del html
				var ptn = document.getElementsByClassName("punto");
				for(i = 0; i<ptn.length; i++){
                    //Busca el que esta activo
					if(ptn[i].className.includes("activo")){
                        //Lo pone inactivo
						ptn[i].className = ptn[i].className.replace("activo", "");
						break;
					}
				}
                /*Al punto clickeado se busca en el arreglo su pos
                    y se cambia a activo
                */
				ptn[n].className += " activo";
			}
             /*
                Esta funcion se utiliza para mover la posicion para mover de las imagenes
                cuando se le hace click en el html. Recibe como parametro la imagen
                clickeada.
            */
			function mostrar(n){
				var imagenes = document.getElementsByClassName("imagen");
				for(i = 0; i< imagenes.length; i++){
					if(imagenes[i].className.includes("actual")){
						imagenes[i].className = imagenes[i].className.replace("actual", "");
						break;
					}
				}
				actual = n;
				imagenes[n].className += " actual";
				puntos(n);
			}
            //Mueve hacia la imagen siguiente
			function siguiente(){
				actual++;
				if(actual > 3){
					actual = 0;
				}
				mostrar(actual);
			}
            //Mueve hacia la imagen anterior
			function anterior(){
				actual--;
				if(actual < 0){
					actual = 3;
				}
				mostrar(actual);
			}

            
			var velocidad = 5000; //cantidad de timepo en segundo que hara la transaccion.
			/*
                Automaticamente se abre el script se ejecuta esta
                esta funcion con la velocidad de 5s y la funcion "siguiente()"
                a traves de la funcion setInterval() que es como un timer para lo que
                mencionamos.
            */
            setInterval("siguiente()", velocidad);


			var velocidad = 5000;
			//var play = setInterval("siguiente()", velocidad);

/*============================================================*/
			// AboutUs Section
			function openTab(evt, person) {
			    // Declare all variables
			    var i, tabcontent, tablinks;

			    // Get all elements with class="tabcontent" and hide them
			    tabcontent = document.getElementsByClassName("tabcontent");
			    for (i = 0; i < tabcontent.length; i++) {
			        tabcontent[i].style.display = "none";
			    }

			    // Get all elements with class="tablinks" and remove the class "active"
			    tablinks = document.getElementsByClassName("tablinks");
			    for (i = 0; i < tablinks.length; i++) {
			        tablinks[i].className = tablinks[i].className.replace(" active", "");
			    }

			    // Show the current tab, and add an "active" class to the button that opened the tab
			    document.getElementById(person).style.display = "block";
			    evt.currentTarget.className += " active";
			}

