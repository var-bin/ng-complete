import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  allowToAdd = true;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server name';

  constructor() { }

  ngOnInit() {
  }

  onCreateServer() {
    this.allowToAdd = !this.allowToAdd;
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
