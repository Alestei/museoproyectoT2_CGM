class admin_salas_L { 
    constructor(data) {
      this.template = `
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
           <a class="MButton" href="admin_salas.C.html">Cargar Sala</a>
           <a class="MButton" href="../index.html">Volver</a>
          <p>&nbsp</p>
         
           
          </center>
      </div>
      <br>
      
      
      </div>
      `;
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
                   <td>${data[x].nombre_sala}</td>
       
                   <td>
                       <img del-id="${data[x].ID_sala}" id="${data[x].ID_sala}" src="../style/img/acc-minus.png" style="width:30px; height:30px" onclick="deleteEvent(event, '${data[x].nombre_sala}' )">
                       <a md-id="${data[x].ID_sala}" id="${data[x].ID_sala} "href="admin_salas.M.html?id=${data[x].ID_sala}"><img  src="../style/img/pencil.png" style="width:30px; height:30px"></a>
                   </td>
               </tr>
                  `
              
              }
             return newContent
          }).then(newContent => { const content = new admin_salas_L(newContent);  return `${content.template}`});
          
  
      } catch (err) {
          
      }
  
  
  }
  
  
  
  
  

  

