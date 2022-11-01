
document.getElementById('logomenu').innerHTML = `
<div style="background-color: rgb(132 7 21);">

    <a href="../index.html"><header class="page-header" style="align-items:center">
      <center><img src="../style/img/logo.png" style="width:120px; height:120px;"></center>
    </a>
 
   
</div>

`;

document.getElementById('header').innerHTML =  `

<nav class="navbar">
<label style="font-size:20px; font-weight: bold;">|</label>
    <ul class="nav-links">  


        <div class="menu">
          <li class="services">
             <label>Información</label>
                
                  <ul class="dropdown">    
                  <li><a href="../_info/info_acces.html">Accesibilidad</a></li>
                  <li><a href="../_info/info_obras.html">Obras</a></li>
                  <li><a href="../_info/info_guias.html">Guias</a></li>
                  </ul>
          </li>

  
         <li class="services">
             <label>Servicios</label>
         
                <ul class="dropdown">
                  <li><a href="../_servi/servi_guias.html">Visitas Guiadas</a></li>
                </ul>
         </li>

          <li class="services">
              <label>Administración</label>

                <ul class="dropdown">    
                <li><a href="../_admin/admin_guias.L.html">Administrar Guias</a></li>
                <li><a href="../_admin/admin_vis_guiada.L.html">Administrar Visitas</a></li>
                <li><a href="../_admin/admin_visitantes.L.html">Administrar Visitante</a></li>
                <li><a href="../_admin/admin_salas.L.html">Administrar Salas</a></li>
                </ul>
          </li>
      </div>
    </ul>

    <label style="font-size:20px; font-weight: bold;">|</label>
    
    <!--<ul class="nav-links" >  
            <div class="menu">
                <li class="services">
                <a href="">Usuario</a>
                
                <ul class="dropdown">
                  <li><a href="signup.html">Inicio de Sesión</a></li>
                  <li><a href="registro.html">Registro</a></li>
                </ul>
              </li>
          
            </div>
    </ul>
  </nav>

 -->
  `;
