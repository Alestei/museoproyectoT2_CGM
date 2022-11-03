export const PContent_admin_vg = `
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
                            <tbody id="datos"></tbody>
                        </table>
                   
                
                 <p>&nbsp</p><hr><br>
                 <a class="MButton" href="./admin_vis_guiada.C.html">Cargar Visita G.</a>
                 <a class="MButton" href="../index.html">Volver</a>
                <p>&nbsp</p>
               
                 
                </center>
            </div>
            <br>
        
        
    </div>
`

export async function PContent_admin_vg_func(){
    try {
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

        getApiInfo('/api/visita_guiada').then(vg => {
                 
                for(let x in vg){ 
                    getGuia(vg[x].ID_guia).then(response => {
                        //console.log(response[0] + " - " + x)
                    document.getElementById('datos').innerHTML +=  `
                    <tr>
                        <td>${vg[x].nombreVisita}</td>
                        <td>${vg[x].FHora}</td>
                        <td>${response[0]}</td>
                        <td id="idioma${x}">
                        <td id="sala${x}">
                            <td>
                                <img id="${vg[x].ID_VG}" src="../style/img/acc-minus.png" style="width:30px; height:30px" onclick="deleteEvent(event, '${vg[x].nombreVisita}')">
                                <a   id="${vg[x].ID_VG}" href="admin_vis_guiada.M.html?id=${vg[x].ID_VG}"><img  src="../style/img/pencil.png" style="width:30px; height:30px"></a>
                            </td>
                    `;
            
                    })
            
                }
            }).then(r =>{  

            getApiInfo('/api/visita_guiada_idioma').then(vgi => {
                 for(let x in vgi){ 
                     getID_Idioma(vgi[x].ID_idioma).then(response => {
                        //console.log(response[0] + " " + x)
                        document.getElementById(`idioma${x}`).innerHTML +=  response[0] + '</td>';
                     }) 
                 }
             })
            }).then(r2 => {

             getApiInfo('/api/visita_guiada_salas').then(vgs => {
                 for(let x in vgs){ 
                     getSala(vgs[x].ID_sala).then(response => {
                       // console.log(vgs[x])
                        document.getElementById(`sala${x}`).innerHTML += response[0] + '</td></tr>';
                     }) 
                 }
             })
            })
    } catch (error) {
        console.log(error)
    }
}