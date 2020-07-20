import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root' //Inyecta el servicio en el root para que este disponible para toda la app
})
export class ProductService {

 private SERVER_URL = environment.SERVER_URL; 

  constructor(private http: HttpClient,
              private router: Router) { }

  /*Fetch all products from backend */  
  getAllProducts() {
   return this.http.get(`${this.SERVER_URL}/products/all`)
  }
}
 