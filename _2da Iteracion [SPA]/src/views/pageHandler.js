const fileExt = '.js';
// --------------------
function addScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
  
      s.setAttribute('src', src);
      s.setAttribute('type', 'module')
      s.setAttribute('class', 'DYN')
      s.setAttribute('defer', '')
      s.addEventListener('load', resolve);
      s.addEventListener('error', reject);
  
      document.getElementById('dynScripts').appendChild(s);
    }).catch(console.log);
  }

function removeScript(){
    return new Promise((resolve, reject) => {
        document.getElementById('dynScripts').innerHTML = ''
      }).catch(console.log);
}


// --------------------

function appendOperation(id, domcontent){
  document.getElementById('mainContent').innerHTML = '';
  document.getElementById('mainContent').innerHTML = domcontent
}

// --------------------
window.onload = function(){addScript('./page/HTMLContent/index.js')}

let navInfo = document.querySelectorAll('.Info');
let navService = document.querySelectorAll('.Service');
let navAdmin = document.querySelectorAll('.Admin');
//console.log(navInfo)

for(let x in navInfo){
    navInfo[x].onclick = function(){
        document.getElementById('mainContent').innerHTML = '';
        removeScript()
        
        addScript('./page/HTMLContent/info/info_' + navInfo[x].id + fileExt ).then(addScript('./page/blindTalk.mjs'))
    }
}

for(let x in navService){
  navService[x].onclick = function(){
      document.getElementById('mainContent').innerHTML = '';
      removeScript()
      
      addScript('./page/HTMLContent/servi/servi_' + navService[x].id + fileExt )
  }
}