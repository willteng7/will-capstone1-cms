import { Routes } from '@angular/router';
import { NewClientComponent } from './new-client/new-client.component';

import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path: `home`,
        component: HomeComponent,
        title: `Home`,
    },

    {
        path: ``,
        redirectTo: `/home`, pathMatch: `full`
    },

{
    path: `new`,
    component: NewClientComponent,
    title: `Register New Client`,
},

{
    path: `schMeeting`,
    component: ScheduleMeetingComponent,
    title: `Schedule Client Meeting`,
},

{
    path: `clients`,
    component: ClientListComponent,
    title: `Client List`,
}

];
