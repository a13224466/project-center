import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokeComponent } from './joke/joke.component';
import { RobotComponent } from './robot/robot.component';

const routes: Routes = [
  { path: '', redirectTo: '/robot', pathMatch: 'full' },
  { path: 'joke', component: JokeComponent },
  { path: 'robot', component: RobotComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

// export const routedComponents = [NameComponent];