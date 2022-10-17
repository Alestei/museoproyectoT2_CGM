
window.onload = function(){
document.getElementById('logomenu').innerHTML = `
<div style="background-color: rgb(132 7 21);">

<a href="index.html"><header class="page-header" style="align-items:center">
    <center><img src="style/img/logo.png" style="width:120px; height:120px;"> </center>
     
 </header></a>
</div>
`;

document.getElementById('header').innerHTML =  `

<nav class="navbar">

    <ul class="nav-links">  

   


          <div class="menu">
         <li><a href="informacion.html">Información</a></li>
         <li><a href="">Guias</a></li>
         
         <li class="services">
          <a href="">Servicios</a>
          <!-- DROPDOWN MENU -->
          <ul class="dropdown">
            <li><a href="">Visitas Guiadas</a></li>
          </ul>
        </li>

      </div>
    </ul>
  </nav>
  `;
}