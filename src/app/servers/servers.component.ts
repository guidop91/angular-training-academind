import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server has been created yet.';
  serverName = 'Ah po ta bien';
  serverIsCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server has been created!';
    this.serverIsCreated = true;
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value
  // }

  ngOnInit(): void {
  }

}
