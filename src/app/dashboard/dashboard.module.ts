import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
