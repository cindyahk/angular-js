import { Component } from '@angular/core';

@Component({
    selector: "app-servers",
    templateUrl: "./servers.component.html",
    styleUrls: ["./servers.component.css"]
})

export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = "No server was created";
    serverName = "Test server name";
    serverCreated = false;
    servers = ["Test Server 1", "Test Server 2"];

    constructor() {
        var self = this;
        setTimeout(() => {this.allowNewServer = true;}, 2000);
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = "Server was created " + this.serverName;
    }

    onUpdateServerName(event) {
        this.serverName = event.target.value;
    }
}
