const controller = new AbortController()

// 5 second timeout:
const timeoutId = setTimeout(() => controller.abort(), 5500)

export async function establishBG(){
    fetch('https://picsum.photos/1280/720?grayscale', { signal: controller.signal }).then(response => {
        if(response.status == 200){
            console.info('Pic Loaded')
            document.getElementById('body').style.backgroundImage = `url('${response.url}')`
        }
        clearTimeout(timeoutId);
    }).catch(error => {
       
        console.log('An Error ocurred. Changing To Default Image, >>> ' + error)
        document.getElementById('body').style.backgroundImage = `url('./style/img/PORTADA.jpeg')`
    })


}

