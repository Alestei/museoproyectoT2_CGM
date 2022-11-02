let ARO = 0;
let fontSize = 16;
//
document.getElementById('header').innerHTML += 
`
    <div id="accTools" class="MAccess" style="width:fit-content; position:fixed;">
    <a onclick="showAccTools()"><img src="../style/img/wheelchair.png" draggable="false"></a>
    </div>
`;


function showAccTools(){

    if(ARO == 0){
    document.getElementById('accTools').innerHTML += `
        <div id="accTO" style="display:grid; padding:5px; margin:5px;">
            <button onclick="increaseText()" class="MAccessButton">🔎+</button>
            <button onclick="decreaseText()" class="MAccessButton">🔎-</button>
        
              <br>
               <button onclick="removeMButton()" class="MAccessButton">Ocultar Menú</button>
        </div>
    `
     ARO = 1;
    }else{
        document.getElementById('accTO').remove();
        ARO = 0;
    }
    
}

function increaseText(){
    document.body.style = 'font-size:' + ++fontSize + 'px';
}

function decreaseText(){
    document.body.style = 'font-size:' + --fontSize + 'px';
}
//
function removeMButton(){
    document.getElementById('accTools').remove();
}

