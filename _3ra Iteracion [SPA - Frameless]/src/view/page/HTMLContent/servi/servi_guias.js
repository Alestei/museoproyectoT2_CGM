import { pcontent } from './servi_guias_insc.mjs'; 
document.getElementById('mainContent').innerHTML = `
<div class="flex-wrapper" style="background-color:rgba(17, 2, 2, 0.637);">
      <div id="content" style="color: white; text-align: center;">
        <div id="pushbar" style="padding-left: 35px; padding-top: 35px; padding-right: 35px;" ;>
    
         <center>
          <label style="font-size:75px; ">Visitas Guiadas</label><br>
          <label style="font-size:15px; ">&nbsp A continuación, se despliegan las visitas guiadas disponibles.</label>
         </center>
          <br>

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
    </center>

           
          </div>
      </div>
`
// ----
async function query(){ 
    return new Promise((resolve, reject) => {
            
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
                            let fecha = Date.parse(vg[x].FHora)
                            fecha = new Date(fecha).toUTCString()
                            document.getElementById('datos').innerHTML +=  `
                            <tr>
                                <td>${vg[x].nombreVisita}</td>
                                <td>${fecha}</td>
                                <td>${response[0]}</td>
                                <td id="idioma${x}">
                                <td id="sala${x}">
                                <td id="anotarse${x}">
                                    <a id="${vg[x].ID_VG}"  onclick="appendOperation(${vg[x].ID_VG}})">
                                    <img src="../style/img/acc-plus.png" style="width:30px; height:30px">
                                    </a>
                                </td>
                            </tr>
                            `;
                
                        })
                    }
            
                }).then(

                getApiInfo('/api/visita_guiada_idioma').then(vgi => {
                    for(let x in vgi){ 
                        getID_Idioma(vgi[x].ID_idioma).then(response => {
                        
                            document.getElementById(`idioma${x}`).innerHTML +=  response[0] + '</td>';
                        }) 
                    }
                })
                
                ).then(

                getApiInfo('/api/visita_guiada_salas').then(vgs => {
                    for(let x in vgs){ 
                        getSala(vgs[x].ID_sala).then(response => {
                        // console.log(vgs[x])
                            document.getElementById(`sala${x}`).innerHTML += response[0] + '</td></tr>';
                        }) 
                    }
                    
                })
                )

                }).then(
                    /* await import('./servi_guias_insc.mjs').then(response => {
                            console.log
                        })
                        */
                   
                )
    }
        window.onload = query()
       //

       
     document.getElementById('datos').innerHTML +=  `<b>`

       

        