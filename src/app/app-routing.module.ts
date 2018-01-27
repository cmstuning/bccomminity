import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardModule} from './dashboard/dashboard.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
      path: 'dashboard',
      loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'web3',
    loadChildren: 'app/web3/web3.module#Web3Module'
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
