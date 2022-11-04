import {App, AppStatic, DOMObserver} from './DOM_Manager.js'
//
//Templates
//

    //CORE PAGE
    import {PContent_index} from './template/index.template.js'
    import { PContent_header } from './template/static/header.template.js';
    import { PContent_footer } from './template/static/footer.template.js';
    import { establishBG } from '../style/dresser.js';
    import { callAccessibility } from './scripts/accessibility.js';
    //INFO
    import { BTK } from './scripts/blindTalk.js';
    import { PContent_info_access } from './template/pages/_info/info_access.template.js';
    import { PContent_info_obras } from './template/pages/_info/info_obras.template.js';
    import { PContent_info_guias } from './template/pages/_info/info_guias.template.js';
    //SERVI
    import { PContent_servi_guias, PContent_servi_guias_func } from './template/pages/_servi/servi_guias.js';
    //ADMIN

    import { PContent_admin_guias_func, PContent_admin_guias_func_modify } from './template/pages/_admin/admin_guias.js';
    import { PContent_admin_vg_func } from './template/pages/_admin/admin_vis_guiada.js';
    import { PContent_admin_visitante_func } from './template/pages/_admin/admin_visitante.js';
    import { PContent_admin_salas_func } from './template/pages/_admin/admin_salas.js';


const D = document;

D.addEventListener('DOMContentLoaded', (event) => {
    async function DOMWorker() {
        establishBG(); 
        let DOM = await App(await PContent_index(), 'index'); 
        let DOMHF = await AppStatic(PContent_header,PContent_footer).then(callAccessibility())
        let DOMSC = ''
        //console.log(DOM)

        let navInfo = document.querySelectorAll('.Info');
        let navService = document.querySelectorAll('.Service');
        let navAdmin = document.querySelectorAll('.Admin');
        let navHeader = document.querySelectorAll('.index');

        navHeader.forEach( async function (elem) {
            elem.addEventListener("click", async function (){
                await App(await PContent_index(), elem.id)
            })
        })
 
        navInfo.forEach( async function(elem) {
            elem.addEventListener("click", async function() {
                if(elem.id == 'info_access') await App(PContent_info_access, elem.id, 'Accesibilidad'), BTK()
                if(elem.id == 'info_obras')  await App(PContent_info_obras, elem.id,  'Obras'), BTK() 
                if(elem.id == 'info_guias')  await App(PContent_info_guias, elem.id,  'Guias')
                
            });
        });
        
        navService.forEach( async function(elem) {
            elem.addEventListener("click", async function() {
                if(elem.id == 'servi_guias')  await App(PContent_servi_guias, elem.id, 'Visitas Guiadas')
                
            });
        });
        
        navAdmin.forEach( async function(elem) {
            elem.addEventListener("click", async function() {
                console.log(elem.id)
                if(elem.id == 'admin_guias')  await App(await PContent_admin_guias_func(), elem.id, 'A_Guias')
                if(elem.id == 'admin_vg') await App(await PContent_admin_vg_func(), elem.id, 'A_VG')
                if(elem.id == 'admin_visitante')  await App(await PContent_admin_visitante_func(), elem.id, 'A_Visitante')
                if(elem.id == 'admin_salas')  await App(await PContent_admin_salas_func(),elem.id, 'A_Salas')
            });
        });

        
    }
   
    DOMWorker()
    DOMObserver()
});


export async function main(domID, operationID){
        await domID, operationID
 
        switch(domID){
                //Index

                //Admin
                 case 'admin_visitante' : formWindowOperation(domID); break;
                 case 'admin_guias' : formWindowOperation(domID);   break;
                 case 'admin_vg' : formWindowOperation(domID);  break;
                 case 'admin_salas' : formWindowOperation(domID);   break;
                 
                //Servi
                 case 'servi_guias' : PContent_servi_guias_func(); break;
        }

     
}

async function formWindowOperation(domID){
    const modifyButtons = document.querySelectorAll('[md-id]')
    console.log(modifyButtons)
    modifyButtons.forEach( async function(elem) {
        elem.addEventListener("click", async function() {
            switch(domID){
                //Index

                //Admin
                 case 'admin_visitante' : formWindowOperation(domID); break;
                 case 'admin_guias' : await App(await PContent_admin_guias_func_modify(elem.id), 'admin_guias_m', 'Modificando');   break;
                 case 'admin_vg' : formWindowOperation(domID);  break;
                 case 'admin_salas' : formWindowOperation(domID);   break;
                 
                //Servi
                 case 'servi_guias' : PContent_servi_guias_func(); break;
            }
        });
    });
    
}