import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserformComponent } from './components/dashboard/modal/userform/userform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TaskviewComponent } from './components/taskview/taskview.component';
import { TaskformComponent } from './components/taskview/modal/taskform/taskform.component';
import {DragDropModule} from 'primeng/dragdrop';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    DashboardComponent,
    UserformComponent,
    TaskviewComponent,
    TaskformComponent,
    TaskboardComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    LayoutModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    DragDropModule,
    CardModule,
  ],
})
export class FeatureModule {}
