class index { 
  constructor(mainText, secondText) {
    
    this.template = `
    <div class="flex-wrapper" style="background-color:rgba(17, 2, 2, 0.425);">
    <div id="content" style="color: white;">
      <div id="pushbar" style="padding-left: 35px; padding-top: 75px;";>
          <b>
          <label style="font-size:75px; ">Bienvenid</label>
          <label style="font-size:75px; color:red">@</label> 
          <label style="font-size:75px; ">Visitante</label>
          </b>
          <br>
            <div id="pushbar2" style="padding-left: 15px;" ;>
            <label style="font-size:25px;">¡Disfruta la experiencia virtual del Museo!</label>
         
            </div>
      </div>
    </div>
    `;

    this.templatedyn =`
    <div class="flex-wrapper" style="background-color:rgba(17, 2, 2, 0.425);">
    <div id="content" style="color: white;">
      <div id="pushbar" style="padding-left: 35px; padding-top: 75px;";>
        
          <b><label style="font-size:75px; ">${mainText}</label></b>
          <br>
              <div id="pushbar2" style="padding-left: 15px;">
                  <label style="font-size:25px;">${secondText}</label>
              </div>
      </div>
    </div>
    `;

  }
  
}

export async function PContent_index(){
    const DYNMessages = [
        {
          mainText: 'Hola Visitante',
          secondText: 'Revisa nuestro refinado catálogo de obras.'
        },
        {
          mainText: 'Todos somos uno.',
          secondText: 'Contamos con capacidades inclusivas en nuestro sitio web.',
        },
        {
          mainText: 'Museo Digital',
          secondText: 'Sentimientos al alcance de tu mano.'
        }
      ]

    const RN = Math.floor(Math.random() * DYNMessages.length)
   // console.log(DYNMessages[1].mainText)
    
    if(RN == 0){  const indexInstance = new index('',''); return `${indexInstance.template}`}else{
    const indexInstance = new index(DYNMessages[RN].mainText, DYNMessages[RN].secondText);
    return `${indexInstance.templatedyn}`
    }
}

