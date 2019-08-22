import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';

interface Post {
username:string ;
birthdate:string ;
age:string;
email:string;
password:string; 
valid:boolean;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	firstName = "";
	password = "";




   constructor(private router: Router,private httpClient:HttpClient){}

  ngOnInit() {
  }
 nav()
  {
    var body = {
      userName : this.firstName,
      pass : this.password

    };
    
    this.httpClient.post<Post>("http://localhost:3000/api/auth",body).subscribe(res => {  
                alert(res.username);
               if(res.valid)
              {
                if (typeof(Storage) !== "undefined")
                {
                  var temp = res;
                  delete temp.password;
                  console.log(temp.valid);
                  sessionStorage.setItem("currentUser",JSON.stringify(temp));
                }
                this.router.navigateByUrl("account");
              }
               else
              {
                alert('Failed');
              }
          });

    
  
    
    
  	
  }

  
};
