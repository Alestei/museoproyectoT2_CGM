import {App, AppStatic} from './DOM_Manager.js'
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
import { PContent_servi_guias } from './template/pages/_servi/servi_guias.js';
import { PContent_admin_guias } from './template/pages/_admin/admin_guias.L.js';
import { PContent_admin_vg } from './template/pages/_admin/admin_vis_guiada.L.js';
import { PContent_admin_visitante } from './template/pages/_admin/admin_visitante.L.js';
import { PContent_admin_salas } from './template/pages/_admin/admin_salas.L.js';
import { establishBG } from '../style/dresser.js';

const D = document;

D.addEventListener('DOMContentLoaded', (event) => {
    establishBG();
    async function DOMWorker(callback) {
        let DOM = await App(PContent_index)
        let DOMHF = await AppStatic(PContent_header,PContent_footer)
        let DOMSC = ''
        //console.log(DOM)

        let navInfo = document.querySelectorAll('.Info');
        let navService = document.querySelectorAll('.Service');
        let navAdmin = document.querySelectorAll('.Admin');
        
 
        navInfo.forEach( async function(elem) {
            elem.addEventListener("click", async function() {
                if(elem.id == 'access') await App(PContent_info_access), BTK()
                if(elem.id == 'obras')  await App(PContent_info_obras), BTK() 
                if(elem.id == 'guias')  await App(PContent_info_guias)
                
            });
        });
        
        navService.forEach( async function(elem) {
            elem.addEventListener("click", async function() {
                if(elem.id == 'guias')  await App(PContent_servi_guias)
                
            });
        });
        
        navAdmin.forEach( async function(elem) {
            elem.addEventListener("click", async function() {
                if(elem.id == 'guias')  await App(PContent_admin_guias)
                if(elem.id == 'vis_guiada') await App(PContent_admin_vg)
                if(elem.id == 'visitante')  await App(PContent_admin_visitante)
                if(elem.id == 'salas')  await App(PContent_admin_salas)
            });
        });

        callback(main)
    }
   
    async function main(){
        
    }



    DOMWorker(main)
});

