let ARO = 0;
let fontSize = 16;
//
export const callAccessibility = () => {
    const header = document.getElementById('header')
     header.innerHTML += 
        `
            <div id="accTools" class="MAccess" style="width:fit-content; position:fixed; draggable:true" >
            <a ><img src="../style/img/wheelchair.png" draggable="false"></a>
            </div>
        `;

const MAccess = document.querySelectorAll('.MAccess');
MAccess.forEach( function(elem,i) {
    elem.addEventListener("click", function() {
            document.getElementById('accTools').innerHTML += `
                <div id="accTO" style="display:grid; padding:5px; margin:5px;">
                    <button id="+"  class="MAccessButton">🔎+</button>
                    <button id="-"  class="MAccessButton">🔎-</button>
                
                      <br>
                       <button id="closeAC" class="MAccessButton">Ocultar Menú</button>
                </div>
            `
  
             internButtons()
             
    });
  });




}

function internButtons(){
    const MAC_button = document.querySelectorAll('.MAccessButton');

    MAC_button.forEach( function(elem,i) {
        elem.addEventListener("click", function() {
    
                if(elem.id == '+'){document.getElementById('body').style.fontSize = `${++fontSize}px`; document.getElementById('accTO').remove();}
                if(elem.id == '-'){document.getElementById('body').style.fontSize = `${--fontSize}px`; document.getElementById('accTO').remove();}

                if(elem.id == 'closeAC'){document.getElementById('accTools').style.display = 'none'}
                
        });
      });
}



