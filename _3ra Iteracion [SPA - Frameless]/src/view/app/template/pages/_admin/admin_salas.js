class admin_salas_L { 
    list(data) {
      return `
      <div class="flex-wrapper">
      
      <br><br>
      <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: auto; border-radius: 10px; padding: 10px;">
          
          <center>
          </a><h2>Salas</h2>
          <p>&nbsp</p>
          <hr><br>
                   <center>
                  <table class="MTable">
                      <thead>
                          <tr>
                              <th>Numero de Sala</th>
                              <th>Nombre de Sala</th>
                              <th>Operaciones</th>
                          </tr>
                      </thead>
                      <tbody id="datos">
                        ${data}
                      </tbody>
                  </table>
             
          
           <p>&nbsp</p><hr><br>
           <a l-id="button0" id="0" class="MButton" >Cargar Sala</a>
           <a l-id="button1" id="1" class="MButton" href="./">Volver</a>
          <p>&nbsp</p>
         
           
          </center>
      </div>
      <br>
      
      
      </div>
      `;
    }
    modify(data){
        return `
        <div class="flex-wrapper">
      
            <br><br>
            <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: 30%; border-radius: 10px; padding: 10px;">
                
                <center>
                        <h2>Modificar Sala</h2>
                        <small id="info">Estás modificando a ${data.info} </small>
                        <p>&nbsp</p>
                    <hr>
                    <br>
                <center>
              
                    <p><label for="Nombre">Nombre / Temática de la Sala</label></p>
                    <input class="MTextArea" type="text" id="nombre" placeholder="${data.tematica}">
                    
                  

                
                    
                 <p>&nbsp</p><hr><br>
                 <input id="sendinfo" type="submit" class="MButton" >
                 <a class="MButton" href="./">Volver</a>
                <p>&nbsp</p>
               
                 
                </center>
            </div>
            <br>
        
        
    </div> 
        `
    }
    load(data){
        return `
        <div class="flex-wrapper">
      
            <br><br>
            <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: 30%; border-radius: 10px; padding: 10px;">
                
                <center>
                        <h2>Cargar Sala</h2>
                        <p>&nbsp</p>
                    <hr>
                    <br>
                <center>
              
                    <p><label for="Nombre">Nombre / Temática de la Sala</label></p>
                    <input class="MTextArea" type="text" id="nombre" placeholder="">
                    
                  

                
                    
                 <p>&nbsp</p><hr><br>
                 <input id="sendinfo" type="submit" class="MButton">
                 <a class="MButton" href="./">Volver</a>
                <p>&nbsp</p>
               
                 
                </center>
            </div>
            <br>
        
        
    </div> 
    
        `
    }
  }
  
  export async function PContent_admin_salas_func() {
      try {
          return fetch('/api/sala')
          .then((response) => response.json())
          .then((data) => {
              let newContent
             
              for(let x in data){
                   newContent += `
                   <tr>
                   <td>${data[x].ID_sala}</td>
                   <td id="sala_${data[x].ID_sala}">${data[x].nombre_sala}</td>
       
                   <td>
                       <img del-id="${data[x].ID_sala}" id="${data[x].ID_sala}" src="../style/img/acc-minus.png" style="width:30px; height:30px">
                       <a md-id="${data[x].ID_sala}" id="${data[x].ID_sala} "><img  src="../style/img/pencil.png" style="width:30px; height:30px"></a>
                   </td>
               </tr>
                  `
              
              }
              newContent = newContent.replace(`undefined`, ``)
             return newContent
          }).then(newContent => { const content = new admin_salas_L();  return `${content.list(newContent)}`});
          
  
      } catch (err) {
          
      }
  
  
  }
  
export async function PContent_admin_salas_modify(queryID){
    try {
        let newContent = {
            info: '',
            tematica: ''
        }

        return getApiInfo('/api/sala/' + queryID).then(response =>{
            newContent.info = '<b>' +  response[0].nombre_sala + '</b>'
            newContent.tematica = response[0].nombre_sala
            return newContent
        }).then(newContent => {const content = new admin_salas_L(); return `${content.modify(newContent)}`})
     


    } catch (error) {
        
    }
}

export async function PContent_admin_salas_modify_send(queryID){
    try {
        document.getElementById('sendinfo').onclick = function(){
            const data = {
                nombre_sala : document.getElementById('nombre').value
            }

            putApiInfo('/api/sala/' + queryID, data)
      }
    } catch (error) {
        
    }
}

export async function PContent_admin_salas_load(){
    try {
            const content = new admin_salas_L();
            return `${content.load()}`
        
    } catch (error) {
        
    }
}
  
export async function PContent_admin_salas_load_send(){
    try {
        document.getElementById('sendinfo').onclick = function(){
            const data = {
                nombre_sala : document.getElementById('nombre').value
            }

            postApiInfo('/api/sala', data)
        }
    } catch (error) {
        
    }
}

export async function salas_deleteEvent(event){
    // alert(event.target.id);
    
    let choice =  confirm('¿Estás seguro que quieres eliminar ' + document.getElementById('sala_' + event.id).innerText + '?') 
     if(choice == true){
         deleteApiInfo('/api/sala/' + event.id); window.location.reload();
     }
     
}