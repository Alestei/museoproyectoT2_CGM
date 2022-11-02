export function AppStatic(DOMH,DOMF) {
    return new Promise((resolve, reject) => {
        try {
            
            document.getElementById('header').innerHTML = DOMH;
            document.getElementById('footer').innerHTML = DOMF;
            resolve('Header and Footer Loaded')
        } catch (error) {
            console.log(error)
        }
        
    })  
}
export function App (DOM)  {
    
    return new Promise((resolve, reject) => {
        try {
            
            document.getElementById('appcontent').innerHTML = DOM
            resolve('Page Content Loaded')
        } catch (error) {
            console.log(error)
        }
        
    })

}
