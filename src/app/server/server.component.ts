import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverStatus: string;
  serverID: number;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverID = Math.floor(Math.random() * 100);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return {
      online: 'green',
      offline: 'red'
    }[this.serverStatus]
  }
}
