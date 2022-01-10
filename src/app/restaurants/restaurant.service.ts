import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

import { MEAT_API } from "app/app.api";
import { Restaurant } from "./restaurant/restaurants.model";

import 'rxjs/add/operator/map'

@Injectable( )
export class RestaurantService { 
    constructor(private http: Http) {} 

    restaurants(): Observable<Restaurant[]> {         
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json()); 
    }
}