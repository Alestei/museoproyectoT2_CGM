class admin_vis_guiada_l { 
    list(data) {
      return `
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
           <a  l-id="button0" id="0" class="MButton">Cargar Visita G.</a>
           <a  l-id="button1" id="1" class="MButton" href="./">Volver</a>
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
                    <h2>Modificar Visita Guiada</h2>
                    <small id="info">Estás modificando la Visita ${data.info} </small>
                    <p>&nbsp</p>
                    <hr><br>
                <center>
                        <p><label for="nombre">Temática/Nombre de la Visita</label></p>
                        <input class="MTextArea" type="text" id="nombre" maxlength="100" placeholder="${data.tematica}">

                        <p><label for="fecha">Fecha y Hora</label></p>
                        <input class="MTextArea" type="datetime-local" id="fecha" placeholder="">
                        <br><small>Fecha anterior: ${data.FHora}</small>

                        <p><label for="sala">Sala selecta</label></p>
                            <small id="sala">${data.salaselecta}</small>
                            
                        <p><label for="guia">Guía selecto</label></p>
                            <small id="guia">${data.guiaselecto}</small>
                
                <p>&nbsp</p><hr>


                    <p>&nbsp</p><hr><br>
                        <input type="submit" class="MButton">
                        <a class="MButton"  href="./">Volver</a>
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
    <!--<img src="https://picsum.photos/1366/768">-->
        <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: 30%; border-radius: 10px; padding: 10px;">
            
            <center>
               <h2>Cargar Visita Guiada</h2><p>&nbsp</p><hr><br>
            <center>
                <p><label for="nombre">Temática/Nombre de la Visita</label></p>
                <input class="MTextArea" type="text" id="nombre" maxlength="100" placeholder="">

                <p><label for="fecha">Fecha y Hora</label></p>
                <input class="MTextArea" type="datetime-local" id="fecha" placeholder="">


                <p><label for="sala">Sala</label></p>
                    <select id="sala">
                        <option> - </option>
                        ${data.salas}
                    </select>
                    <button id="sala_b">Seleccionar</button><br>

                    <div id="sala_s" style="display:none">
                        <small id="sala_s_t">Seleccionaste: </small>
                    </div>
                    

                
                <p><label for="guia">Guía</label></p>
                    <select id="guia">
                        <option> - </option>
                        ${data.guias}
                    </select>
                    <button id="guia_b" >Seleccionar</button><br>
                    
                    <div id="guia_s" style="display:none">
                        <small id="guia_s_t">Seleccionaste a: </small><br>
                        <small>Idioma</small>
                        <select id="guia_s_t_i">
                  
                        </select>
                    </div>
                    


             <p>&nbsp</p><hr><br>
             <input id="send_VG" type="submit" class="MButton">
             <a class="MButton" href="./">Volver</a>
            <p>&nbsp</p>
           
             
            </center>
        </div>
        <br>
    
    
</div>
        `
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
                        <td id="vg${vg[x].ID_VG}">${vg[x].nombreVisita}</td>
                        <td>${vg[x].FHora}</td>
                        <td>${response[0]}</td>
                        <td id="idioma${x}">
                        <td id="sala${x}">
                            <td>
                                <img del-id="${vg[x].ID_VG}" id="${vg[x].ID_VG}" src="../style/img/acc-minus.png" style="width:30px; height:30px">
                                <!--<a md-id="${vg[x].ID_VG}" id="${vg[x].ID_VG}" ><img  src="../style/img/pencil.png" style="width:30px; height:30px"></a>-->
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
                
            }).then(newContent => { const content = new admin_vis_guiada_l();  return `${content.list(newContent)}`});
  
      } catch (err) {
          
      }
  
  
  }
  
//Falta terminar
export async function PContent_admin_vg_modify(QueryID){
    try {
        let newContent = {
            info: '',
            tematica: '',
            salaselecta: '',
            guiaselecto: '',
            FHora: '',
            idiomas: ''
        }

        return getApiInfo('/api/visita_guiada/' + QueryID).then(response => {

            newContent.info = '<b>' +  response[0].nombreVisita + '</b>'
            newContent.tematica =  response[0].nombreVisita
            
            let time = new Date(response[0].FHora).toISOString();  
            time = time.substring(0, time.length-1);
            newContent.FHora =  time

            return getApiInfo('/api/guia/' + response[0].ID_guia).then(responseG => {
                newContent.guiaselecto = ` <b> ${responseG[0].nombre} ${responseG[0].apellido} </b> `   

            }).then(responseG => {
                return getApiInfo('/api/visita_guiada_idioma/' + response[0].ID_VG).then(responseVGI =>{

                    return getApiInfo('/api/idioma/' + responseVGI[0].ID_idioma).then(responseIdioma =>{
                       newContent.idiomas +=  `<b> -  ${responseIdioma[0].idioma} </b>`
                        
                    }).then(r2 => {
                        return getApiInfo('/api/visita_guiada_salas/' + QueryID).then(responseVG => {
        
                            return getApiInfo('/api/sala/' + responseVG[0].ID_sala).then(response => {              
                                    newContent.salaselecta = ` <b> ${response[0].nombre_sala} </b> `   
                                    return newContent
                        }).then(newContent => { const content = new admin_vis_guiada_l();  return `${content.modify(newContent)}`});
                    })

                })
            })
    
        })
    })



    } catch (error) { }
}
  
export async function PContent_admin_vg_load(){
    try {
        let newContent = {
            salas: '',
            guias: '',
            
        }

        return getApiInfo('/api/sala').then(response => {
            for(let x in response){
                newContent.salas += `
                    <option id=${response[x].ID_sala} value=${response[x].ID_sala} >${response[x].nombre_sala}</option>
                `
            }
        }).then( r => {
        
            return getApiInfo('/api/guia').then(response => {
                for(let x in response){
                    newContent.guias  += `
                        <option id=${response[x].ID_Guia} value=${response[x].ID_Guia} >${response[x].nombre + " " + response[x].apellido}</option>
                    `
                    
                }
                return newContent
            }).then(newContent => {const content = new admin_vis_guiada_l(); return `${content.load(newContent)}`} )
    })

    } catch (error) {}
}

export async function PContent_admin_vg_load_send(){
    try {
        let vis_guiada_data = {
            nombreVisita: '',
            FHora : '',
            ID_guia : ''
        }    


        let vis_guiada_sala_data = {
            sala: ''
        }


         document.getElementById('sala_b').onclick = function(){
                if(document.getElementById('sala').value != "-"){
                    document.getElementById('sala_s').style = "";
                    document.getElementById('sala_s_t').innerHTML = '<br>' + document.getElementById('sala').selectedOptions[0].text;
                    vis_guiada_sala_data.sala = parseInt(document.getElementById('sala').value);
                } 
            }

             

            document.getElementById('guia_b').onclick = function(){
                if(document.getElementById('guia').value != "-"){
                    let IdiVec = []; 
                    document.getElementById('guia_s').style = "";
                    document.getElementById('guia_s_t').innerHTML = '<br>'+ document.getElementById('guia').selectedOptions[0].text;
                    vis_guiada_data.ID_guia = parseInt(document.getElementById('guia').value);

                    getApiInfo('/api/guia_idioma/lang/' + document.getElementById('guia').value).then(response =>{
                      console.log(response)
                      
                        for(let x in response){IdiVec.push(response[x].ID_idioma)}

                        for(let x in IdiVec){
                            if(IdiVec[x] == 1){IdiVec[x] = 'Español'  }
                            if(IdiVec[x] == 2){IdiVec[x] = 'Inglés'   }
                            if(IdiVec[x] == 3){IdiVec[x] = 'Portugués'} 
                         }

                        for(let x in response){
                            document.getElementById('guia_s_t_i').innerHTML = `<option id=${response[x].ID_idioma} value=${response[x].ID_idioma}>${IdiVec[x]}</option>`
                        }
                    })
                }
                

             }

          

         document.getElementById('send_VG').onclick = function(){
            //console.log(vis_guiada_data, vis_guiada_sala_data);
            vis_guiada_data.nombreVisita = document.getElementById('nombre').value;
            vis_guiada_data.FHora = document.getElementById('fecha').value;
            

             postApiInfo('/api/visita_guiada', vis_guiada_data).then(response =>{
                getApiInfo('/api/visita_guiada/uid/').then(response => {
                        let vis_guiada_idioma = {
                        ID_VG : response[0].ID_VG,
                        ID_idioma : document.getElementById('guia_s_t_i').value

                        }
                        let vis_guiada_sala = {
                            ID_VG: response[0].ID_VG,
                            ID_sala: document.getElementById('sala').value
                        }


                        postApiInfo('/api/visita_guiada_idioma',vis_guiada_idioma).then(
                            postApiInfo('/api/visita_guiada_salas',vis_guiada_sala).then( result => {
                                if(result) alert('Datos Cargados')
                           
                             }).catch(alert('Ha ocurrido un error'))
                        )
                    
                })
            })
        }

    } catch (error) {
        
    }
}

export async function vg_deleteEvent(event){
    //console.log(event.id)
    let choice = confirm('¿Estás seguro que quieres eliminar "' + document.getElementById(`vg${event.id}`).innerText + '" ?') 
    if(choice == true){
        deleteApiInfo('/api/visita_guiada/' + event.id);  
    }
   
 }