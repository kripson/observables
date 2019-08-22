import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	
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


  change()
  {
  		if (typeof(Storage) !== "undefined")
                {
                	var details = {

								username : this.username,
								birthdate : this.birthdate,
								age : this.age,
								email : this.email
							};
                	sessionStorage.setItem("currentUser",JSON.stringify(details));
                	
     
                }

        console.log(JSON.parse(sessionStorage.getItem("currentUser")));
  }

  goToAccount()
  {
  		this.router.navigateByUrl('account');
  }

}
