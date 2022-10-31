export function pcontent(){
    return document.getElementById('mainContent').innerHTML = 
    `
    <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: 30%; border-radius: 10px; padding: 10px;">
                           
                           <center>
                               <a href="../index.html"><img src="../style/img/logo.png" width="100px" height="100px"></a>
                               <h2>Inscripción</h2>
                               <small id="vg">Se está inscribiendo a la visita</small>
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
                            <input type="submit" class="MButton" onclick="sendVisitante()">
                            <a class="MButton" href="../_servi/servi_guias.html">Volver</a>
                           <p>&nbsp</p>
                          
                            
                           </center>
                       </div>
           
    
    `


}
