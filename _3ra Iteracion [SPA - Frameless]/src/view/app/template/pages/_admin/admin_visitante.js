
 class admin_visitante_L { 
  list(data) {
    return `
    <div class="flex-wrapper">
      
    <br><br> 
        <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: auto; border-radius: 10px; padding: 10px;">
        
        <center>
        <h2>Visitantes</h2>
        <p>&nbsp</p>
        <hr><br>
                 <center>
                <table class="MTable">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Operaciones</th>
                        </tr>
                    </thead>
                    <tbody id="datos">
                        ${data || ''}
                    </tbody>
                </table>
           
        
         <p>&nbsp</p><hr><br>
         <a l-id="button0" id="0"  class="MButton" >Cargar Visitante</a>
         <a l-id="button1" id="1"  class="MButton" href="./">Volver</a>
        <p>&nbsp</p>
       
         
        </center>
    </div>
    <br>
</div>
    `;
  }
  load(data){
    return `
    <div class="flex-wrapper">
      
            <br><br>
            <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: 30%; border-radius: 10px; padding: 10px;">
                
                <center>
                   <h2>Cargar Visitante</h2><p>&nbsp</p><hr><br>
                <center>
              
                    <p><label for="Nombre">Nombre</label></p>
                    <input class="MTextArea" type="text" id="nombre" placeholder="">
                    
                    <p><label for="Apellido">Apellido</label></p>
                    <input class="MTextArea" type="text" id="apellido" placeholder="">

                    <p><label for="Correo">Correo</label></p>
                    <input class="MTextArea" type="mail" id="Correo" placeholder="">
                  

                
                    
                 <p>&nbsp</p><hr><br>
                 <input id="sendVisitante" type="submit" class="MButton" >
                 <a class="MButton" href="./">Volver</a>
                <p>&nbsp</p>
               
                 
                </center>
            </div>
            <br>
        
        
    </div>
    `
  }
  modify(data){
    return `
     <div class="flex-wrapper">
      
            <br><br>
            <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: 30%; border-radius: 10px; padding: 10px;">
                
                <center>
                    <h2>Modificar Visitante</h2>
                    <small id="info">Estás modificando los datos de ${data.info} </small>
                    <p>&nbsp</p>
                    <hr><br>
                <center>
              
                    <p><label for="Nombre">Nombre</label></p>
                    <input class="MTextArea" type="text" id="nombre" placeholder="${data.nombre}">
                    
                    <p><label for="Apellido">Apellido</label></p>
                    <input class="MTextArea" type="text" id="apellido" placeholder="${data.apellido}">

                    <p><label for="Correo">Correo</label></p>
                    <input class="MTextArea" type="mail" id="correo" placeholder="${data.correo}">
                  

                
                    
                 <p>&nbsp</p><hr><br>
                 <input id="sendVisitante" type="submit" class="MButton" >
                 <a class="MButton" href="./">Volver</a>
                <p>&nbsp</p>
               
                 
                </center>
            </div>
            <br>
        
        
    </div>
    `
  }
}

export async function PContent_admin_visitante_func() {
    try {
        return fetch('/api/visitante')
        .then((response) => response.json())
        .then((data) => {
            let newContent
           
            for(let x in data){
                 newContent += `
                <tr>
                  <td id="nombreT${data[x].ID_VISITANTE}">${data[x].Nombre}</td>
                  <td id="apellidoT${data[x].ID_VISITANTE}">${data[x].Apellido}</td>
                  <td>${data[x].Correo}</td>
                  <td>
                   <img del-id="${data[x].ID_VISITANTE}" id="${data[x].ID_VISITANTE}" src="../style/img/acc-minus.png" style="width:30px; height:30px">
                   <a md-id="${data[x].ID_VISITANTE}" id="${data[x].ID_VISITANTE}" ><img  src="../style/img/pencil.png" style="width:30px; height:30px"></a>
                  </td>
                </tr>
                `
            
            }
            newContent = newContent.replace(`undefined`, ``)
           return newContent
        }).then(newContent => { const content = new admin_visitante_L();  return `${content.list(newContent)}`});
        

    } catch (err) {
        
    }

}

export async function PContent_admin_visitante_modify(QueryID){
    try {
        let newContent = {
            info: '',
            nombre: '',
            apellido: '',
            correo: ''
        }

       return getApiInfo('/api/visitante/' + QueryID).then(response =>{
            newContent.info += '<b>' + response[0].Nombre + ' ' + response[0].Apellido + '</b>'
            newContent.nombre = response[0].Nombre
            newContent.apellido = response[0].Apellido
            newContent.correo = response[0].Correo
            return newContent
        }).then(newContent => {const content = new admin_visitante_L(); return `${content.modify(newContent)}`})


    } catch (error) {
        
    }
}

export async function PContent_admin_visitante_modify_send(QueryID){
    try {
        document.getElementById('sendVisitante').onclick = function(){
        const userData = {
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            correo: document.getElementById('correo').value
        }

        putApiInfo('/api/visitante/' + QueryID, userData).then(result => {
            if(result){alert('Datos Enviados')}
        })
    }
    } catch (error) {
        
    }
}

export async function PContent_admin_visitante_load(){
    try {
        const content = new admin_visitante_L();
        return `${content.load()}`
    } catch (error) {
        
    }
}

export async function PContent_admin_visitante_load_send(){
    try {
        document.getElementById('sendVisitante').onclick = function(){
            const userData = {
                nombre: document.getElementById('nombre').value,
                apellido: document.getElementById('apellido').value,
                correo: document.getElementById('Correo').value
            }
    
            postApiInfo('/api/visitante', userData).then(result => {
                if(result){alert('Datos Enviados')}
            }).catch(err => alert('Ha ocurrido un error ' + err))
        }
    } catch (error) {
        
    }
}

export async function visitante_deleteEvent(event){

    
    let choice =  confirm('¿Estás seguro que quieres eliminar a ' + document.getElementById(`nombreT${event.id}`).innerText + ' ' + document.getElementById(`apellidoT${event.id}`).innerText + '?') 
     if(choice == true){
         deleteApiInfo('/api/visitante/' + event.id); 
     }
     
    
 }