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
    import { PContent_servi_guias_add, PContent_servi_guias_add_send, PContent_servi_guias_func } from './template/pages/_servi/servi_guias.js';
    //ADMIN

    import { guia_deleteEvent, PContent_admin_guias_func, PContent_admin_guias_func_load, PContent_admin_guias_func_load_send, PContent_admin_guias_func_modify, PContent_admin_guias_func_modify_send } from './template/pages/_admin/admin_guias.js';
    import { PContent_admin_vg_func, PContent_admin_vg_load, PContent_admin_vg_load_send, PContent_admin_vg_modify, vg_deleteEvent } from './template/pages/_admin/admin_vis_guiada.js';
    import { PContent_admin_visitante_func, PContent_admin_visitante_load, PContent_admin_visitante_load_send, PContent_admin_visitante_modify, PContent_admin_visitante_modify_send, visitante_deleteEvent } from './template/pages/_admin/admin_visitante.js';
    import { PContent_admin_salas_func, PContent_admin_salas_load, PContent_admin_salas_load_send, PContent_admin_salas_modify, PContent_admin_salas_modify_send, salas_deleteEvent } from './template/pages/_admin/admin_salas.js';


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
                if(elem.id == 'servi_guias')  await App(await PContent_servi_guias_func(), elem.id, 'Visitas Guiadas')
                
            });
        });
        
        navAdmin.forEach( async function(elem) {
            elem.addEventListener("click", async function() {
                console.log(elem.id)
                if(elem.id == 'admin_guias')  await App(await PContent_admin_guias_func(), elem.id, 'A_Guias')
                if(elem.id == 'admin_vg') await App(await PContent_admin_vg_func(), elem.id, 'A_VG')
                if(elem.id == 'admin_visitante')  await App(await PContent_admin_visitante_func(), elem.id, 'A_Visitante')
                if(elem.id == 'admin_salas')  await App(await PContent_admin_salas_func(), elem.id, 'A_Salas')
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
                 case 'servi_guias' : formWindowOperation(domID); break;
        }

     
}

async function formWindowOperation(domID){
    const modifyButtons = document.querySelectorAll('[md-id]')
    const delButtons = document.querySelectorAll('[del-id]')
    const opButton = document.querySelectorAll('[l-id]')

    modifyButtons.forEach( async function(elem) {
        elem.addEventListener("click", async function() {
            switch(domID){
                //Admin
                 case 'admin_visitante' : 
                    await App(await PContent_admin_visitante_modify(elem.id), 'admin_visitante_m', 'Modif. Visitante')
                    await PContent_admin_visitante_modify_send(elem.id);
                 break;

                 case 'admin_guias' : 
                    await App(await PContent_admin_guias_func_modify(elem.id), 'admin_guias_m', 'Modif. Guia'); 
                    await PContent_admin_guias_func_modify_send(elem.id);
                 break;

                 case 'admin_vg' : 
                    await App(await PContent_admin_vg_modify(elem.id), 'admin_vg_m', 'Modif. Vis Guiada')
                    //
                 break;
                 
                 case 'admin_salas' : 
                     await App(await PContent_admin_salas_modify(elem.id), 'admin_salas_m', 'Modif. Salas'); 
                     await PContent_admin_salas_modify_send(elem.id);
                 break;
                 
                case 'servi_guias':
                    await App(await PContent_servi_guias_add(elem.id), 'servi_guias_add', 'Anotarse');
                    await PContent_servi_guias_add_send(elem.id);
            }
        });
    });

    delButtons.forEach( async function(elem) {
        elem.addEventListener("click", async function() { 
            switch(domID){
                case 'admin_visitante' : await visitante_deleteEvent(elem); break;                     
                case 'admin_guias' :     await guia_deleteEvent(elem);      break;
                case 'admin_vg' :        await vg_deleteEvent(elem);        break;         
                case 'admin_salas' :     await salas_deleteEvent(elem);     break;      
            
            }
        });
    });


    opButton.forEach( async function(elem) {
        elem.addEventListener("click", async function() {
          
            switch(domID){
                case 'admin_visitante' : 
                   await App(await PContent_admin_visitante_load(), 'admin_visitante_l', 'Crg. Visitante')
                   await PContent_admin_visitante_load_send();         
                break;
                
                case 'admin_guias' : 
                    await App(await PContent_admin_guias_func_load(), 'admin_guias_l', 'Crg. Guia')
                    await PContent_admin_guias_func_load_send();
                break;

                case 'admin_vg' : 
                    await App(await PContent_admin_vg_load(), 'admin_vg_l', 'Crg. Vis Guiada')
                    await PContent_admin_vg_load_send();
            
                break;
                
                case 'admin_salas' : 
                    await App(await PContent_admin_salas_load(), 'admin_salas_l', 'Crg. Salas')
                    await PContent_admin_salas_load_send();
                break;
                
               //Servi
               
              

            }
        });
    });
    
}