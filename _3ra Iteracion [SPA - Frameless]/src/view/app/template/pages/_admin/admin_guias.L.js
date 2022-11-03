export const PContent_admin_guias = `
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
                <tbody id="datos"></tbody>
            </table>
       
    
     <p>&nbsp</p><hr><br>
     <a class="MButton" href="admin_guias.C.html">Cargar Guia</a>
     <a class="MButton" href="../index.html">Volver</a>
    <p>&nbsp</p>
   
     
    </center>
</div>
<br>


</div>
`

export async function PContent_admin_guias_func(){
    try {
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



      
       getApiInfo('/api/guia').then(guia => {
                
               for(let x in guia){
                   getID_Idioma(guia[x].ID_Guia).then(result => { 
                       document.getElementById('datos').innerHTML +=  `
                       <tr>
                           <td>${guia[x].nombre}</td>
                           <td>${guia[x].apellido}</td>
                           <td>${result.join('<br>')}</td>
                           <td>
                               <img id="${guia[x].ID_Guia}" src="../style/img/acc-minus.png" style="width:30px; height:30px" onclick="deleteEvent(event, '${guia[x].nombre + ' ' + guia[x].apellido}')">
                               <a id="${guia[x].ID_Guia}" href="admin_guias.M.html?id=${guia[x].ID_Guia}"><img  src="../style/img/pencil.png" style="width:30px; height:30px"></a>
                           </td>
                       </tr>`;
                       result.length = 0;
                   })
                  
               }
           })
    } catch (error) {
        console.log(error)
    }
}
    