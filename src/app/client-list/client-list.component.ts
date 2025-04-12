import { Component } from '@angular/core';
import { ClientList } from '../models/client-list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {

  clientList: ClientList[] = [
    {
      id: 1,
      name: `John Doe`,
      email: `jSmith@gmail.com`,
      phone: `111-222-3333`,
      company: `Foogle`,
      rep: `will@`,
      notes: `This client was a referral from a friend and we are helping them start their own business`,
    },
    {
      id: 2,
      name: `Jane Smith`,
      email: `jSmith@gmail.com`,
      phone: `111-222-3333`,
      company: `Foogle`,
      rep: `will@`,
      notes: ``,
    }, {
      id: 3,
      name: `Jane Doe`,
      email: `janeD@gmail.com`,
      phone: `111-222-3333`,
      company: `Foogle`,
      rep: `will@`,
      notes: ``,
    }, {
      id: 4,
      name: `John Smith`,
      email: `johnS@gmail.com`,
      phone: `111-222-3333`,
      company: `Foogle`,
      rep: `will@`,
      notes: ``,
    },
  ];

  client: ClientList = {
    id: 0,
    name: ``,
    email: ``,
    phone: ``,
    company: ``,
    rep: ``,
    notes: ``,
  }

  addClient() {
    if (this.client.name !== ``)
      {
    this.client.id = this.clientList.length + 1;
    this.clientList.push(this.client);

    this.client = {
      id: 0,
      name: ``,
      email: ``,
      phone: ``,
      company: ``,
      rep: ``,
      notes: ``,
    }
  }
  }

deleteClient (currentClient: ClientList) {

  this.clientList = this.clientList.filter(c => c.id !== currentClient.id)

}


}
