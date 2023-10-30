const b1 = document.querySelector("#b1");

function mostrarDatos1(method, urlJSON, response, searchData)
{
    var contenedor0 = document.querySelector("#contenedor0");
    var hayHoteles = false;

    // Limpiar el div resultado1
    response.innerHTML = "";
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && xhr.status == 200)
        {
            // Extraer datos de JSON
            const datos1 = this.response;
            const datos2 = JSON.parse(datos1);
            const hoteles1 = datos2["hoteles"];
            let searchData2 = searchData.value.toLowerCase().trim();

            // Recoger datos de JSON
            for(let hotel of hoteles1)
            {

                if(hotel.nombre.toLowerCase().includes(searchData2) || 
                hotel.ciudad.toLowerCase().includes(searchData2)  || 
                searchData2 == hotel.categoria ||
                searchData2 == hotel.pvp )
                {
                    hayHoteles = true;

                    let div0 = document.createElement("div");
                    div0.setAttribute("class", "contenedor2-1");
                    response.appendChild(div0);

                    let div1 = document.createElement("div");
                    div1.setAttribute("class", "contenedor2-1-1");
                    div0.appendChild(div1);

                    let div2 = document.createElement("div");
                    div2.setAttribute("class", "contenedor2-1-1-1");
                    div1.appendChild(div2);

                    let h2 = document.createElement("h2");
                    h2.setAttribute("class", "titulo1");
                    h2.textContent = hotel.nombre;
                    div2.appendChild(h2);
                    
                    p1 = document.createElement("p");
                    p1.setAttribute("class", "texto1");
                    p1.textContent = hotel.ciudad;
                    div2.appendChild(p1);

                    p2 = document.createElement("p");
                    p2.setAttribute("class", "texto1");
                    p2.textContent = hotel.categoria;
                    div2.appendChild(p2);

                    let div3 = document.createElement("div");
                    div3.setAttribute("class", "contenedor2-1-1-2");
                    div1.appendChild(div3);

                    let p3 = document.createElement("p");
                    p3.setAttribute("class", "texto1 marco1 mano1");
                    p3.textContent = hotel.pvp;
                    div3.appendChild(p3);

                    let div4 = document.createElement("div");
                    div4.setAttribute("class", "contenedor2-1-2");
                    div0.appendChild(div4);

                    let img1 = document.createElement("img");
                    img1.setAttribute("class", "imagen1");
                    img1.setAttribute("alt", hotel.nombre);
                    img1.setAttribute("src", hotel.img);
                    div4.appendChild(img1);

                }
            }

            if(hayHoteles==true)
            {
                // Ocultar que no hay resultados
                contenedor0.classList.remove("visible");
                contenedor0.classList.add("oculto");

            } else if(hayHoteles==false)
            {
                // Limpiar HTML
                response.innerHTML = "";

                // Ocultar que no hay resultados
                contenedor0.classList.remove("oculto");
                contenedor0.classList.add("visible");
            }

            // Limpiar el campo de texto
            searchData.value = "";
        }
    };

    xhr.open(method, urlJSON, true);
    xhr.send();
    
}

if (b1){
    // Referencia de los elementos
    const response1 = document.querySelector("#resultado1");
    const urlJSON1 = 'json/bd1.json';
    const method1 = 'GET';
    const searchData1 = document.querySelector("#c1");

    b1.addEventListener("click", function(event){
        // Prevenir comportamiendo por defecto de un evento
        event.preventDefault();

        // Realizar la acción
        mostrarDatos1(method1, urlJSON1, response1, searchData1);

        //alert("Hola");
    });
}


// Uso de defer
// Uso de queryselector1