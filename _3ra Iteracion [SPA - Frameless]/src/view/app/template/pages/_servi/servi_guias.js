class servi_guias{
    list(data){
        return `
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
                <tbody id="datos">${data}</tbody>
            </table>
        </center>

            
            </div>
        </div>
        `
    }

    add(data){
        return `
        <div class="flex-wrapper">
        <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: 30%; border-radius: 10px; padding: 5px;">
                           
        <center>
            <h2>Inscripción</h2>
            <small id="vg">Se está inscribiendo a la visita ${data.info}</small>
            <p>&nbsp</p>
            <hr><br>
        <center>
      
            <p><label for="Nombre">Nombre</label></p>
            <input class="MTextArea" type="text" id="nombre" placeholder="">
            
            <p><label for="Apellido">Apellido</label></p>
            <input class="MTextArea" type="text" id="apellido" placeholder="">

            <p><label for="Correo">Correo</label></p>
            <input class="MTextArea" type="mail" id="correo" placeholder="">
          
            
        
            
         <p>&nbsp</p><hr><br>
         <input type="submit" class="MButton" id="sendVisitante">
         <a class="MButton" href="./">Volver</a>
        <p>&nbsp</p>
       
         
        </center>
    </div>
</div>
        `
    }
}

// ----

export async function PContent_servi_guias_func(){
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
                        <td id="vg${x}">${vg[x].nombreVisita}</td>
                        <td>${vg[x].FHora}</td>
                        <td>${response[0]}</td>
                        <td id="idioma${x}">
                        <td id="sala${x}">
                            <td>
                                <img md-id="${vg[x].ID_VG}" id="${vg[x].ID_VG}" src="../style/img/acc-plus.png" style="width:30px; height:30px">
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
                        newContent = newContent.replace(`undefined`, ``)
                      
                       
                    }
                    
                   // console.log(newContent)
                    return newContent
                })
                
            }).then(newContent => { const content = new servi_guias();  return `${content.list(newContent)}`});
  
      } catch (err) {
          
      }
  
  
}

export async function PContent_servi_guias_add(QueryID){
    try {
        let newContent = {
            info: '',
        }
        return getApiInfo('/api/visita_guiada/' + QueryID).then(response => {
            newContent.info += '<br><b>' + response[0].nombreVisita + '</b>';
            return newContent
        }).then(newContent => {const content = new servi_guias(); return `${content.add(newContent)}`})

    } catch (error) {
        
    }
}
 
export async function PContent_servi_guias_add_send(QueryID){
    try {
         document.getElementById('sendVisitante').onclick = function(){
            let visitante_data = {
                nombre: document.getElementById('nombre').value,
                apellido: document.getElementById('apellido').value,
                correo: document.getElementById('correo').value
            }

            postApiInfo('/api/visitante', visitante_data); 

            getApiInfo('/api/visitante/uid/').then(responseUID => {
                let visita_guiada_visitante_data = {
                    ID_VG : QueryID,
                    ID_visitante : responseUID[0].ID_VISITANTE
                }

                postApiInfo('/api/visita_guiada_visitante', visita_guiada_visitante_data).then()

            })

        }
    } catch (error) {
        
    }
}

        