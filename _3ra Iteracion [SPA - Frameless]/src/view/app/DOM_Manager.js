import { main } from "./page.js";

export function AppStatic(DOMH,DOMF) {
    return new Promise((resolve, reject) => {
        try {
            if(DOMH, DOMF){
            document.getElementById('header').innerHTML = DOMH;
            document.getElementById('footer').innerHTML = DOMF;
            resolve('H-F Loaded')
            }

        } catch (error) {
            console.log(error)
        }
        
    })  
}
export function App (DOM, DOMID, title)  {
    
    return new Promise((resolve, reject) => {
        try {
            if(DOM){
                const AC = document.getElementById('appcontent')
                const Title = document.getElementById('pageTitle')

                if(title){Title.innerHTML =   'Museo | ' + title}else{Title.innerHTML = 'Museo'}
                AC.setAttribute('data-id', DOMID)
                AC.innerHTML = DOM;

                resolve('Content Loaded')
            }
            
           
        } catch (error) {
            console.log(error)
        }
        
    })

}

export function DOMObserver(){
    const observer = new MutationObserver((mutationList) => {
        mutationList.forEach((mutation) => {
           // console.log(mutation.type);
        if (mutation.addedNodes.length) {
            console.log('<DOM Change> - <add>',  mutation.addedNodes[0].parentElement.dataset);
            main(mutation.addedNodes[0].parentElement.dataset.id)
        }
        if (mutation.removedNodes.length) {
            console.log('<DOM Change> - <change>', mutation.removedNodes);

        }
      
        })
    });
    
    // Indicar el target que deseamos observar
    const DOM = document.getElementById('appcontent')
    
    const observerOptions = {
        attributes: false,
        childList: true,
        subtree: false,
    };
    
     observer.observe(DOM, observerOptions);
}
