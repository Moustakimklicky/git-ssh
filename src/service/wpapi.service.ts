/*
* Un exemple d'implmentation d'un service au sein d'angular
*/

// Core components
import { Injectable }   from '@angular/core';
import { Http,Headers, Response , Request}   from '@angular/http';
import { NavController, Loading, AlertController, NavParams, LoadingController } from 'ionic-angular';


// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


// Models
// Importez vos models ici

import { WpApi } from "../pages/model/wpapi";
import{WpApiGlob} from '../pages/model/wpapiglob'; 

@Injectable()
export class WpApiService {
    res: Array<{id:number, title: string, content: string}>;
    utilisateur: string;

    private baseUrl: string = 'http://k-app1.klicky.us/wp-json/wp/v2/categories';
    private baseUrl1: string = 'http://k-app1.klicky.us/wp-json/wp/v2/menu';
    private baseUrl2: string = 'http://k-app1.klicky.us/wp-json/wp/v2/=5';
    private id : number = 5 ;
   

    
    constructor(private http: Http,public alertctrl:AlertController) {
        
     }
     headers:Headers;
     data:any; 
    ;
    public get(): Promise<any> {
		const url = `${this.baseUrl}`;
        
        return this.http.get(url)
        .toPromise()
        .then(resp => resp.json() as  WpApiGlob)
        .catch(error => console.log('Une erreur est survenue ' + error))
    }
    public getmenu(): Promise<any> {
		const url1 = `${this.baseUrl1}`;
        return this.http.get(url1)
        .toPromise()
        .then(resp => resp.json() as  WpApiGlob)
        .catch(error => console.log('Une erreur est survenue ' + error))
    }
    public getm(): Promise<any> {
		const url2 = `${this.baseUrl2}menu?categories=${this.id}`;
        return this.http.get(url2)
        .toPromise()
        .then(resp => resp.json() as  WpApiGlob)
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

    
  
}
