import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


	username = "";
	birthdate = "";
	age = "";
	email = "";

  constructor(private router: Router) { }

  ngOnInit() {
  				if (typeof(Storage) !== "undefined")
  					{


				                try
				                	{
				                		var userDetails = JSON.parse(sessionStorage.getItem("currentUser"));
					                	this.username = userDetails.username;
					                	this.birthdate = userDetails.birthdate;
					                	this.age = userDetails.age;
					                	this.email = userDetails.email;


				                	}
				                	catch(error)
				                	{
				                		alert("Please Login First");
				                		this.router.navigateByUrl('login');
				                	}
				    }
 			 }

  logout()
  {
  		sessionStorage.clear();
  		this.router.navigateByUrl('login');
  }

}
