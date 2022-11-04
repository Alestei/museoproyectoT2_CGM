export const PContent_header = `
<div id="headerLogo" style="background-color: rgb(132 7 21);">

    <a class="index" id="index"><header class="page-header" style="align-items:center">
      <center>
        <img src="../style/img/logo.png" style="width:120px; height:120px;">
      </center>
    </a>
 
   
</div>

<nav id="headerNav" class="navbar">
<label style="font-size:20px; font-weight: bold;">|</label>
    <ul class="nav-links">  


        <div class="menu">
          <li class="services">
             <label>Información</label>
                
                  <ul class="dropdown">    
                    <li><a class="Info" id="info_access" >Accesibilidad</a></li>
                    <li><a class="Info" id="info_obras" >Obras</a></li>
                    <li><a class="Info" id="info_guias" >Mapa</a></li>
                  </ul>
          </li>

  
         <li class="services">
             <label>Servicios</label>
         
                <ul class="dropdown">
                  <li><a class="Service" id="servi_guias" >Visitas Guiadas</a></li>
                </ul>
         </li>

          <li class="services">
              <label id="adminlabel">Administración</label>

                <ul id="admindrop" class="dropdown" >    
                <li><a class="Admin" id="admin_guias">Administrar Guias</a></li>
                <li><a class="Admin" id="admin_vg" >Administrar Visitas</a></li>
                <li><a class="Admin" id="admin_visitante" >Administrar Visitante</a></li>
                <li><a class="Admin" id="admin_salas" >Administrar Salas</a></li>
                </ul>
          </li>
      </div>
    </ul>

    <label style="font-size:20px; font-weight: bold;">|</label>
`
