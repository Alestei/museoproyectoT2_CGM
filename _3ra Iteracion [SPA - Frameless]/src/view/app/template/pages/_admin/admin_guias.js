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
             <a class="MButton" href="admin_guias.C.html">Cargar Guia</a>
             <a class="MButton" href="../index.html">Volver</a>
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
              <a href="../index.html"><img src="../style/img/logo.png" width="100px" height="100px"></a>
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
               <input type="submit" class="MButton" onclick="sendGuia()">
               <a class="MButton" >Volver</a>
               
              <p>&nbsp</p>
              
               
          </center>
          </div>
      
      
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
                    <td>${data[x].nombre}</td>
                    <td>${data[x].apellido}</td>
                    <td>${data2.join('<br>')}</td>
                    <td>
                        <img del-id="${data[x].ID_Guia}" id="${data[x].ID_Guia}" src="../style/img/acc-minus.png" style="width:30px; height:30px" onclick="deleteEvent(event, '${data[x].nombre + ' ' + data[x].apellido}')">
                        <a md-id="${data[x].ID_Guia}" id="${data[x].ID_Guia}" ><img  src="../style/img/pencil.png" style="width:30px; height:30px"></a>
                    </td>
                    </tr>`; 
                    data2.length = 0;       
                }
              return newContent
            }).then(newContent => { const content = new admin_guias_L();  return `${content.list(newContent)}`});



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
           // console.log(response)
            for(let x in response_guia){
                
                getApiInfo('/api/idioma/' + response_guia[x].ID_idioma).then(response_idioma => {
                  /*
                    document.getElementById('idiomas_old').innerHTML += `
                    <b>${response_idioma[0].idioma}</b>
                    `*/
                    newContent.idiomasAnt += response_idioma[0].idioma + ' ';
                })

            }
         })
        }).then( r2 => {

        return getApiInfo('/api/idioma').then(response => {
            for(let x in response){
                /*
                document.getElementById('idiomas_s').innerHTML += `
                    <input type="checkbox" id=${response[x].ID_idioma} value=${response[x].ID_idioma}>${response[x].idioma}
                `*/
                newContent.idiomasAct += `<input type="checkbox" id=${response[x].ID_idioma} value=${response[x].ID_idioma}>${response[x].idioma}`
            }
            return newContent
        }).then(newContent => { const content = new admin_guias_L();  return `${content.modify(newContent)}`});
        
    })
    
    } catch (error) {
        
    }
}  
  
  

  




    