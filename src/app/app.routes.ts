import { Routes } from '@angular/router';
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
        redirectTo: `/home`, pathMatch: `full`,
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
