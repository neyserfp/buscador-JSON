function mostrarDatos1(method, urlJSON, response, searchData)
{
 
    var contenedor0 = document.getElementById('contenedor0');
    var hayHoteles = false;
 
    // Limpiar el div resultado1
    response.innerHTML = "";
 
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if(this.readyState== 4 && this.status==200)
        {
            // Extraer los datos de JSON
            const datos1 = this.response;
            const datos2 = JSON.parse(datos1);
            const hoteles1 = datos2["hoteles"];
 
            // Recorrer los datos de JSON
            for (let hotel of hoteles1)
            {
                if
                (
                    searchData.value.toLowerCase().trim()==hotel.nombre.toLowerCase().trim() ||
                    searchData.value.toLowerCase().trim()==hotel.ciudad.toLowerCase().trim() ||
                    searchData.value.toLowerCase().trim()==hotel.categoria ||
                    searchData.value.toLowerCase().trim()==hotel.pvp
                )
                {
                    hayHoteles=true;
 
                    div0 = document.createElement('div');
                    div0.setAttribute('class', 'contenedor2-1');
                    response.appendChild(div0);
 
                    div1 = document.createElement('div');
                    div1.setAttribute('class', 'contenedor2-1-1');
                    div0.appendChild(div1);  
                   
                    div2 = document.createElement('div');
                    div2.setAttribute('class', 'contenedor2-1-1-1');
                    div1.appendChild(div2);
 
                    h2 = document.createElement('h2');
                    h2.textContent = hotel.nombre;
                    h2.setAttribute('class', 'titulo1');
                    div2.appendChild(h2);
 
                    p = document.createElement('p');
                    p.textContent = hotel.ciudad;
                    p.setAttribute('class', 'texto1');
                    div2.appendChild(p);
                   
                    p = document.createElement('p');
                    p.textContent = hotel.categoria + " estrellas";
                    p.setAttribute('class', 'texto1');
                    div2.appendChild(p);
                   
                    div2 = document.createElement('div');
                    div2.setAttribute('class', 'contenedor2-1-1-2');
                    div1.appendChild(div2);
 
                    p = document.createElement('p');
                    p.textContent = hotel.pvp + " €";
                    p.setAttribute('class', 'texto1 marco1 mano1');
                    div2.appendChild(p);
 
                    div1 = document.createElement('div');
                    div1.setAttribute('class', 'contenedor2-1-2');
                    div0.appendChild(div1);
 
                    img = document.createElement('img');
                    img.setAttribute("src", hotel.img);
                    img.setAttribute("alt", hotel.nombre);
                    img.setAttribute("class", "imagen1");
                    div1.appendChild(img);
 
                }
            }
            if(hayHoteles==true)
            {
                // Ocultar que no hay resultdos
                contenedor0.classList.remove("visible");
                contenedor0.classList.add("oculto");
            }
            else if(hayHoteles==false)
            {
                // Limpiar el resultado1
                response.innerHTML="";
                // Ocultar que no hay resultdos
                contenedor0.classList.remove("oculto");
                contenedor0.classList.add("visible");
            }
            // Limpiar el campo de texto
            searchData.value="";
        }
    };
    xhr.open(method, urlJSON, true);
    xhr.send();
   
}
 
// -------------------------------------- INICIO - Añadir Eventos
window.addEventListener("load", function()
{
    // -------------------------------------- INICIO - (click) Buscar hoteles 1
 
    // Paso 1 - Referencia de los elementos
    const b1 = this.document.getElementById("b1");
 
    // Paso 2 - Asociar el elemento al evento y llamada a la funcion
    if(b1)
    {
        // Referencia de los elementos
        const response1 = document.getElementById("resultado1");
        const urlJSON1 = 'json/bd1.json';
        const method1 = 'GET';
        const searchData1 = this.document.getElementById('c1');
 
        b1.addEventListener("click", function(event){
            // Prevenir el comportamiento por defecto de un evento
            event.preventDefault();
            // Realizar la petición
            mostrarDatos1(method1, urlJSON1, response1, searchData1);
        });
 
    }
 
    // -------------------------------------- FIN - (click) Buscar hoteles 1
});
// -------------------------------------- FIN - Añadir Eventos
