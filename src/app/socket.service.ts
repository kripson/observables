import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

	private url = 'http://localhost:3000';
	private socket = io(this.url);
	observable = new Observable(observer=>
	{
		this.socket.on('message',(data) => observer.next(data));
	});

  constructor() { }

	send(message)
	{
		this.socket.emit('message',message);
	}

	}


