import { HttpClient } from '@angular/common/http';
import { Component, ENVIRONMENT_INITIALIZER  } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { apiConstants } from 'src/app/constants/apiConstants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    "storeId": "SBL",
    "userName": "",
    "password": ""
  };

  constructor(private http: HttpClient, private router: Router ) {

  }
  onLogin() {
    console.log(this.loginObj);
    this.http.post("https://localhost:7017/api/Users",this.loginObj , {responseType: 'text'}).subscribe({
      next : (data)=> {
        if(data) {
          localStorage.setItem('loginTOken', data);
          this.router.navigateByUrl('/group'); 
        } else {
          alert("NO DATA AVAILABLE");
        }
      },
      error : Error=>{
        console.error("CONNECTION FAILED" );
      },      
    });
  }


}