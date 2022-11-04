class admin_vis_guiada_l { 
    constructor(data) {
      this.template = `
      <div class="flex-wrapper">
      
      <br><br>
      <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: auto; border-radius: 10px; padding: 10px;">
          
          <center><h2>Visitas Guiadas</h2><p>&nbsp</p><hr><br>
                   <center>
                  <table class="MTable">
                      <thead>
                          <tr>
                              <th>Temática/Nombre</th>
                              <th>Fecha y Hora</th>
                              <th>Guia</th>
                              <th>Idioma</th>
                              <th>Sala</th>
                              <th>Operaciones</th>
                          </tr>
                      </thead>
                      <tbody id="datos">${data}</tbody>
                  </table>
             
          
           <p>&nbsp</p><hr><br>
           <a class="MButton" href="./admin_vis_guiada.C.html">Cargar Visita G.</a>
           <a class="MButton" href="../index.html">Volver</a>
          <p>&nbsp</p>
         
           
          </center>
      </div>
      <br>
  
  
</div>
      `;
    }
  }
  
  export async function PContent_admin_vg_func() {


      try {
        let newContent;
        async function getID_Idioma(id){     
            let idiVec = [];     
            await getApiInfo(`/api/idioma/${id}`).then(langList => {
                //console.log(langList)
                idiVec.push(langList[0].idioma);
                
            }); 
            return idiVec 
        }
    
         async function getGuia(id){
            let guiVec = [];
            await getApiInfo(`/api/guia/${id}`).then(guias => {
                for(let x in guias){
                    guiVec[x] = guias[x].nombre + " " + guias[x].apellido;
                }
    
                
            });
            return guiVec;
          }
        
          async function getSala(id){
            let salVec = [];
            await getApiInfo(`/api/sala/${id}`).then(salas => {
                for(let x in salas){
                    salVec[x] = salas[x].nombre_sala
                }
    
                
            });
            return salVec;
          }    
          
        return getApiInfo('/api/visita_guiada').then(vg => {
            
                for(let x in vg){ 
                    getGuia(vg[x].ID_guia).then(response => {
                        //console.log(response[0] + " - " + x)
                    newContent +=  `
                    <tr>
                        <td>${vg[x].nombreVisita}</td>
                        <td>${vg[x].FHora}</td>
                        <td>${response[0]}</td>
                        <td id="idioma${x}">
                        <td id="sala${x}">
                            <td>
                                <img del-id="${vg[x].ID_VG}" id="${vg[x].ID_VG}" src="../style/img/acc-minus.png" style="width:30px; height:30px" onclick="deleteEvent(event, '${vg[x].nombreVisita}')">
                                <a md-id="${vg[x].ID_VG}" id="${vg[x].ID_VG}" href="admin_vis_guiada.M.html?id=${vg[x].ID_VG}"><img  src="../style/img/pencil.png" style="width:30px; height:30px"></a>
                            </td>
                    `;
            
                    })
            
                }
  
            }).then(r =>{  

            return getApiInfo('/api/visita_guiada_idioma').then(vgi => {
                 for(let x in vgi){ 
                     getID_Idioma(vgi[x].ID_idioma).then(response => {
                        //console.log(response[0] + " " + x) 
                        newContent = newContent.replace(`<td id="idioma${x}">`, `<td id="idioma${x}">${response[0]}</td>`)
                        //document.getElementById(`idioma${x}`).innerHTML +=  response[0] + '</td>';
                     }) 
                 }
             })
      
            }).then(r2 => {

                return getApiInfo('/api/visita_guiada_salas').then(async vgs => {
                    let data2;
                    for(let x in vgs){ 
                                            
                        data2 = await getSala(vgs[x].ID_sala)

                        newContent = newContent.replace(`<td id="sala${x}">`, `<td id="sala${x}">${data2[0]}</td>`)
                        
                      
                       
                    }
                    
                   // console.log(newContent)
                    return newContent
                })
                
            }).then(newContent => { const content = new admin_vis_guiada_l(newContent);  return `${content.template}`});
  
      } catch (err) {
          
      }
  
  
  }
  
    

  
