import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FeatureRoutingModule } from './feature-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TaskviewComponent } from './components/taskview/taskview.component';
import { TaskformComponent } from './components/taskview/modal/taskform/taskform.component';
import { DragDropModule } from 'primeng/dragdrop';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { CardModule } from 'primeng/card';
import { ViewerComponent } from './components/viewer/viewer.component';
import { UserformComponent } from './components/userdetails/modal/userform/userform.component';
import { usersComponent } from './components/userdetails/users.Component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SkeletonModule } from 'primeng/skeleton';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { BarchartComponent } from './components/dashboard/charts/barchart/barchart.component';
import { PiechartComponent } from './components/dashboard/charts/piechart/piechart.component';
import { LinechartComponent } from './components/dashboard/charts/linechart/linechart.component';
import { PolarchartComponent } from './components/dashboard/charts/polarchart/polarchart.component';

@NgModule({
  declarations: [
    usersComponent,
    UserformComponent,
    TaskviewComponent,
    TaskformComponent,
    TaskboardComponent,
    ViewerComponent,
    DashboardComponent,
    BarchartComponent,
    PiechartComponent,
    LinechartComponent,
    PolarchartComponent,

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
    SkeletonModule,
    ProgressSpinnerModule,
  ],
})
export class FeatureModule {}
