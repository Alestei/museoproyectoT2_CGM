import { App } from "../../../DOM_Manager.js";

class admin_guias_L { 
    list(data){
        return  `
        <div class="flex-wrapper">
        
        <br><br>
        <!--<img src="https://picsum.photos/1366/768">-->
        <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: auto; border-radius: 10px; padding: 10px;">
            
            <center><h2>Guías</h2><p>&nbsp</p><hr><br>
                     <center>
                    <table class="MTable">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Idiomas</th>
                                <th>Operaciones</th>
                            </tr>
                        </thead>
                        <tbody id="datos">${data}</tbody>
                    </table>
               
            
             <p>&nbsp</p><hr><br>
             <a l-id="button0" id="0" class="MButton" >Cargar Guia</a>
            <p>&nbsp</p>
           
             
            </center>
        </div>
        <br>
        
        
        </div>
        `;
    }
    
     modify(dataM){ 
     return `
      <div class="flex-wrapper">
      
      <br><br>
      <!--<img src="https://picsum.photos/1366/768">-->
      <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: 30%; border-radius: 10px; padding: 10px;">
        
          <center>
                  <h2>Modificar Guia</h2>
                  <small id="info">Estás modificando a ${dataM.info} </small>
                  <p>&nbsp</p>
                  <hr>
                  <br>
          <center>
            
                  <p><label for="nombre">Nombre</label></p>
                  <input class="MTextArea" type="text" id="nombre" placeholder="${dataM.nombre}" required> 
                  
                  <p><label for="apellido">Apellido</label></p>
                  <input class="MTextArea" type="text" id="apellido" placeholder="${dataM.apellido}" required>
                  
                  <p><label for="idiomas_old">Idioma/s actuales</label></p>
                      <small id="idiomas_old">${dataM.idiomasAnt}</small>

                  <p>&nbsp</p><hr>
                  <p><label for="idiomas_s">Idioma/s</label></p>
                     <div id="idiomas_s">${dataM.idiomasAct}</div>
                      
                          
               <p>&nbsp</p><hr><br>
               <input id="sendGuia" type="submit" class="MButton" >
               <input id="goBack" type="submit" value="Salir" class="MButton" >
               
              <p>&nbsp</p>
              
               
          </center>
          </div>
      
      
    </div>
      `
    }

    load(dataL){
        return `
        <div class="flex-wrapper">
      
        <br><br>
    <!--<img src="https://picsum.photos/1366/768">-->
        <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: 30%; border-radius: 10px; padding: 10px;">
            
            <center>
                <h2>Cargar Guia</h2><p>&nbsp</p><hr><br>
            <center>
          
                <p><label for="Correo">Nombre</label></p>
                <input class="MTextArea" type="text" id="nombre" placeholder="">
                
                <p><label for="Correo">Apellido</label></p>
                <input class="MTextArea" type="text" id="apellido" placeholder="">

                <p><label for="idiomas">Idioma/s</label></p>
              
                    <select id="idiomas">
                        <option> - </option>
                        ${dataL.idiomas}
                    </select>
                    <button id="langSelect">Seleccionar</button>


                    <div id="idiomas_s" style="display:none">
                        <small id="idiomas_s_t">Seleccionaste: <br></small>
                    </div><br>

                
            
                
             <p>&nbsp</p><hr><br>
             <input id="sendGuia" type="submit" class="MButton" >
             <input id="goBack" type="submit" value="Salir" class="MButton" >
            <p>&nbsp</p>
           
             
            </center>
        </div>
        <br>
    
    
    </div>
        `
    }
    
  }
  
  export async function PContent_admin_guias_func() {
      try {
        let newContent ;
        let idiVec = [];    

        async function getID_Idioma(id){     
                     
           await getApiInfo(`/api/guia_idioma/lang/${id}`).then(langList => {
               
               for(let x in langList){
                   idiVec.push(langList[x].ID_idioma)
               }

               for(let x in idiVec){
                   if(idiVec[x] == 1){ idiVec[x] = 'Español'}
                   if(idiVec[x] == 2){ idiVec[x] = 'Inglés'}
                   if(idiVec[x] == 3){ idiVec[x] = 'Portugués'}
               }
               
           }); 
           return idiVec 
       }


         return fetch('/api/guia')
            .then((response) => response.json())
            .then((data) => {
                return data
            }).then(async data => {
                let data2;
                for(let x in data){
                    
                     data2 = await getID_Idioma(data[x].ID_Guia); 
                    newContent += `
                    <tr>
                    <td id="nombreT${data[x].ID_Guia}">${data[x].nombre}</td>
                    <td id="apellidoT${data[x].ID_Guia}">${data[x].apellido}</td>
                    <td>${data2.join('<br>')}</td>
                    <td>
                        <img del-id="${data[x].ID_Guia}" id="${data[x].ID_Guia}" src="../style/img/acc-minus.png" style="width:30px; height:30px">
                        <a md-id="${data[x].ID_Guia}" id="${data[x].ID_Guia}" ><img  src="../style/img/pencil.png" style="width:30px; height:30px"></a>
                    </td>
                    </tr>`; 
                    
                    data2.length = 0;      
                }
                newContent = newContent.replace(`undefined`, ``)
              return newContent
            }).then(newContent => { const content = new admin_guias_L();  return `${content.list(newContent)}`});



    } catch (error) {
        console.log(error)
    }
}
  
export async function PContent_admin_guias_func_load(){
    try {
        let newContent = {
            idiomas: ''
        };
        return getApiInfo('/api/idioma').then(response => {
            for(let x in response){
                newContent.idiomas += `
                    <option id=${response[x].ID_idioma} value=${response[x].ID_idioma} >${response[x].idioma}</option>
                `
            }
            return newContent
        }).then(newContent => { const content = new admin_guias_L();  return `${content.load(newContent)}`});
 

    } catch (error) {
        console.log(error)
    }
}

export async function PContent_admin_guias_func_load_send(){
    try {
        const goBack = document.getElementById('goBack')
        goBack.addEventListener("click", async function(){
            return await App(await PContent_admin_guias_func(), 'admin_guias', 'Guias')
        })

        let userData_guia_idioma = {
            idiomas : []
         }

    document.getElementById('langSelect').onclick = function(){

        if(document.getElementById('idiomas').value != "-"){
        document.getElementById('idiomas_s').style = "";
        document.getElementById('idiomas_s_t').innerHTML += document.getElementById('idiomas').selectedOptions[0].text + ', ';
        userData_guia_idioma.idiomas.push(parseInt(document.getElementById('idiomas').value));
        }
    }


    document.getElementById('sendGuia').onclick = function(){
        const userData_guia = {
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            ID : 0
        }
        

        postApiInfo('/api/guia',userData_guia).then(response => {

        })

     
        getApiInfo('/api/guia/uid/').then(response => {
                    
                    userData_guia_idioma.idiomas.forEach(sendGuia_Idioma)

                    function sendGuia_Idioma(item){
                        let data = {
                            ID_idioma : item,
                            ID_guia : response[0].ID_Guia,
                            ultima_vez : ''
                        }

                        postApiInfo('/api/guia_idioma', data)
                    }

            })
    
    }
 
    } catch (error) {
        console.log(error)
    }
}
  
export async function PContent_admin_guias_func_modify(id){
    try {
        let newContent = {
            info: '',
            nombre: '',
            apellido: '',
            idiomasAnt: '',
            idiomasAct: '',
        }

        return getApiInfo('/api/guia/' + id).then(response => {
            newContent.info = `<b>${response[0].nombre + ' ' + response[0].apellido}</b>`
            newContent.nombre = response[0].nombre;
            newContent.apellido = response[0].apellido
        
        }).then(r => {
        
        return getApiInfo('/api/guia_idioma/' + id).then(response_guia => {
            for(let x in response_guia){ 
                getApiInfo('/api/idioma/' + response_guia[x].ID_idioma).then(response_idioma => {

                    newContent.idiomasAnt += response_idioma[0].idioma + ' ';
                })
            }
         })
        }).then( r2 => {

        return getApiInfo('/api/idioma').then(response => {
            for(let x in response){
                newContent.idiomasAct += `<input type="checkbox" id=${response[x].ID_idioma} value=${response[x].ID_idioma}>${response[x].idioma}`
            }
            return newContent
        }).then(newContent => { const content = new admin_guias_L();  return `${content.modify(newContent)}`});
        
    })
    
    } catch (error) {
        
    }
}  
  
export async function PContent_admin_guias_func_modify_send(QueryID){
    try {
        const goBack = document.getElementById('goBack')
        goBack.addEventListener("click", async function(){
            return await App(await PContent_admin_guias_func(), 'admin_guias', 'Guias')
        })
        
        const formButtons = document.querySelectorAll('.MButton');
        formButtons.forEach( async function(elem) {
            elem.addEventListener("click", async function() {
                if(elem.id == 'sendGuia'){
                    let guia_newData = {
                        nombre : document.getElementById('nombre').value,
                        apellido: document.getElementById('apellido').value,
                    }
        
                    let guia_selectedIdiomas = {
                        ES : {
                            iC : document.getElementById('1').checked,
                            id : 1
                        },
                        EN : {
                            iC : document.getElementById('2').checked,
                            id : 2
                        },
                        PR : {
                            iC : document.getElementById('3').checked,
                            id : 3
        
                        }
                    }
                    //console.log(guia_selectedIdiomas)
                    if(guia_newData.nombre == '' || guia_newData.apellido == '' ){
                        alert("Los datos no pueden ser nulos.")
                    }else{
                        putApiInfo('/api/guia/' + QueryID, guia_newData).then(r => {
        
        
                        for(let x in guia_selectedIdiomas){
                            if(guia_selectedIdiomas[x].iC == true){
                                let guia_postIdiomas = {
                                    ID_idioma : guia_selectedIdiomas[x].id,
                                    ID_guia : QueryID,
                                    ultima_vez : ''
                                }
                                //console.log(guia_postIdiomas)
                                getApiInfo('/api/guia_idioma/' + QueryID).then(response => {
                                    if(response.length == 0){
                                        
                                        postApiInfo('/api/guia_idioma', guia_postIdiomas )
                                    }else{
                                    for(let x in response){
                                        if(response[x].ID_idioma != guia_postIdiomas.ID_idioma){
                                            postApiInfo('/api/guia_idioma', guia_postIdiomas )
                                        }
                                      }
                                     }
                                })
                            }else{
                                deleteApiInfo('/api/guia_idioma/pidi/' + guia_selectedIdiomas[x].id + '/' + QueryID)
                            }

                            }
                    
                        })
                    }
                }
            })

        })
    
    } catch (error) {
        
    }

}   

export async function guia_deleteEvent(event){
     //console.log(event.id)
     let choice =  confirm('¿Estás seguro que quieres eliminar a "' + document.getElementById(`nombreT${event.id}`).innerText + ' ' + document.getElementById(`apellidoT${event.id}`).innerText + '" ?') 
      if(choice == true){
          deleteApiInfo('/api/guia/' + event.id); 
      }
    
  }