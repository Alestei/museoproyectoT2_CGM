
 class admin_visitante_L { 
  constructor(data) {
    this.template = `
    <div class="flex-wrapper">
      
    <br><br> 
        <div id="squareform" style="color: rgb(0, 0, 0); background-color:rgba(255, 255, 255, 0.603) ;margin: auto; width: auto; border-radius: 10px; padding: 10px;">
        
        <center>
        <h2>Visitantes</h2>
        <p>&nbsp</p>
        <hr><br>
                 <center>
                <table class="MTable">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Operaciones</th>
                        </tr>
                    </thead>
                    <tbody id="datos">
                        ${data || ''}
                    </tbody>
                </table>
           
        
         <p>&nbsp</p><hr><br>
         <a class="MButton" href="admin_visitantes.C.html">Cargar Visitante</a>
         <a class="MButton" href="../index.html">Volver</a>
        <p>&nbsp</p>
       
         
        </center>
    </div>
    <br>
</div>
    `;
  }
}

export async function PContent_admin_visitante_func() {
    try {
        return fetch('/api/visitante')
        .then((response) => response.json())
        .then((data) => {
            let newContent
           
            for(let x in data){
                 newContent += `
                <tr>
                  <td>${data[x].Nombre}</td>
                  <td>${data[x].Apellido}</td>
                  <td>${data[x].Correo}</td>
                  <td>
                   <img del-id="${data[x].ID_VISITANTE}" id="${data[x].ID_VISITANTE}" src="../style/img/acc-minus.png" style="width:30px; height:30px">
                   <a md-id="${data[x].ID_VISITANTE}" id="${data[x].ID_VISITANTE}" ><img  src="../style/img/pencil.png" style="width:30px; height:30px"></a>
                  </td>
                </tr>
                `
            
            }
           return newContent
        }).then(newContent => { const content = new admin_visitante_L(newContent);  return `${content.template}`});
        

    } catch (err) {
        
    }


}





