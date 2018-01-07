import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None // Apply styles globally to all web components
})
export class AppComponent {
  serverElements = [{type: "server", name: "Server A", content: "This is a server"}];

  onServerAdded(server: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: server.serverName,
      content: server.serverContent
    });
  }

  onBlueprintAdded(server: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: server.serverName,
      content: server.serverContent
    });
  }
}
