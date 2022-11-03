import {App, AppStatic, DOMObserver} from './DOM_Manager.js'
//
//Templates
//
import {PContent_index} from './template/index.template.js'
import { PContent_header } from './template/static/header.template.js';
import { PContent_footer } from './template/static/footer.template.js';
//
//Page Templates
//
import { BTK } from './scripts/blindTalk.js';
import { PContent_info_access } from './template/pages/_info/info_access.template.js';
import { PContent_info_obras } from './template/pages/_info/info_obras.template.js';
import { PContent_info_guias } from './template/pages/_info/info_guias.template.js';
import { PContent_servi_guias, PContent_servi_guias_func } from './template/pages/_servi/servi_guias.js';
import { PContent_admin_guias, PContent_admin_guias_func } from './template/pages/_admin/admin_guias.L.js';
import { PContent_admin_vg, PContent_admin_vg_func } from './template/pages/_admin/admin_vis_guiada.L.js';
import { PContent_admin_visitante, PContent_admin_visitante_func } from './template/pages/_admin/admin_visitante.L.js';
import { PContent_admin_salas, PContent_admin_salas_func } from './template/pages/_admin/admin_salas.L.js';
import { establishBG } from '../style/dresser.js';

const D = document;

D.addEventListener('DOMContentLoaded', (event) => {
    async function DOMWorker() {
        establishBG();
        let DOM = await App(PContent_index, 'index')
        let DOMHF = await AppStatic(PContent_header,PContent_footer)
        let DOMSC = ''
        //console.log(DOM)

        let navInfo = document.querySelectorAll('.Info');
        let navService = document.querySelectorAll('.Service');
        let navAdmin = document.querySelectorAll('.Admin');
        
 
        navInfo.forEach( async function(elem) {
            elem.addEventListener("click", async function() {
                if(elem.id == 'access') await App(PContent_info_access, 'info_access'), BTK()
                if(elem.id == 'obras')  await App(PContent_info_obras, 'info_obras'), BTK() 
                if(elem.id == 'guias')  await App(PContent_info_guias, 'info_guias')
                
            });
        });
        
        navService.forEach( async function(elem) {
            elem.addEventListener("click", async function() {
                if(elem.id == 'guias')  await App(PContent_servi_guias, 'servi_guias')
                
            });
        });
        
        navAdmin.forEach( async function(elem) {
            elem.addEventListener("click", async function() {
                if(elem.id == 'guias')  await App(PContent_admin_guias, 'admin_guias')
                if(elem.id == 'vis_guiada') await App(PContent_admin_vg, 'admin_vg')
                if(elem.id == 'visitante')  await App(PContent_admin_visitante, 'admin_visitante')
                if(elem.id == 'salas')  await App(PContent_admin_salas, 'admin_salas')
            });
        });

        
    }
   
    DOMWorker()
    DOMObserver();
});

export async function main(domID){
    
        switch(domID){
                //Admin
                 case 'admin_visitante' : PContent_admin_visitante_func(); break;
                 case 'admin_guias' : PContent_admin_guias_func(); break;
                 case 'admin_vg' : PContent_admin_vg_func(); break;
                 case 'admin_salas' : PContent_admin_salas_func(); break;
                 
                //Servi
                 case 'servi_guias' : PContent_servi_guias_func(); break;
        }

     
}