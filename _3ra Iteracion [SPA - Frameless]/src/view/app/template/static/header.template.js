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
                    <a class="Info" id="info_access" ><li>Accesibilidad</li></a>
                    <a class="Info" id="info_obras" ><li>Obras</li></a>
                    <a class="Info" id="info_guias" ><li>Mapa</li></a>
                  </ul>
          </li>

  
         <li class="services">
             <label>Servicios</label>
         
                <ul class="dropdown">
                  <a class="Service" id="servi_guias" ><li>Visitas Guiadas</li></a>
                </ul>
         </li>

          <li class="services">
              <label id="adminlabel">Administración</label>

                <ul id="admindrop" class="dropdown" style="display:none">    
                <a class="Admin" id="admin_guias"><li>Administrar Guias</li></a>
                <a class="Admin" id="admin_vg" ><li>Administrar Visitas</li></a>
                <a class="Admin" id="admin_visitante" ><li>Administrar Visitante</li></a>
                <a class="Admin" id="admin_salas" ><li>Administrar Salas</li></a>
                </ul>
          </li>
      </div>
    </ul>

    <label style="font-size:20px; font-weight: bold;">|</label>
`
