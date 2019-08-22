import { Component, OnInit } from '@angular/core';
import {SocketService} from '../socket.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
	
	messagecontent = "";
	messages = [];

  constructor(private socketService:SocketService) { }

  ngOnInit() {
  this.initialSetup();
  }

  private initialSetup()
  {
  	this.socketService.observable.subscribe(message => {

  	this.messages.push(message);
  	}


  	)
  }


  private chat()
  {
  	if(this.messagecontent)
  	{
  		this.socketService.send(this.messagecontent);
  		this.messagecontent = null;
  	}
  	else
  	{
  		alert("Please insert a message");
  	}
  }

}
