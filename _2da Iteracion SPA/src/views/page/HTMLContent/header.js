document.getElementById('header').innerHTML =  `
<div id="headerLogo" style="background-color: rgb(132 7 21);">

    <a href="../index.html"><header class="page-header" style="align-items:center">
      <center><img src="../style/img/logo.png" style="width:120px; height:120px;"></center>
    </a>
 
   
</div>

<nav id="headerNav" class="navbar">
<label style="font-size:20px; font-weight: bold;">|</label>
    <ul class="nav-links">  


        <div class="menu">
          <li class="services">
             <label>Información</label>
                
                  <ul class="dropdown">    
                    <li><a class="Info" id="access" >Accesibilidad</a></li>
                    <li><a class="Info" id="obras" >Obras</a></li>
                    <li><a class="Info" id="guias" >Guias</a></li>
                  </ul>
          </li>

  
         <li class="services">
             <label>Servicios</label>
         
                <ul class="dropdown">
                  <li><a class="Service" id="guias" >Visitas Guiadas</a></li>
                </ul>
         </li>

          <li class="services">
              <label>Administración</label>

                <ul class="dropdown">    
                <li><a class="Admin" id="guias.L">Administrar Guias</a></li>
                <li><a class="Admin" id="visitas.L" >Administrar Visitas</a></li>
                <li><a class="Admin" id="visitante.L" >Administrar Visitante</a></li>
                <li><a class="Admin" id="vis_guiada.L" >Administrar Salas</a></li>
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
