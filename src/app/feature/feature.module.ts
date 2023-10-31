import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { TaskviewComponent } from './components/taskview/taskview.component';
import { TaskformComponent } from './components/taskview/modal/taskform/taskform.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { UserformComponent } from './components/userdetails/modal/userform/userform.component';
import { usersComponent } from './components/userdetails/users.Component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BarchartComponent } from './components/dashboard/charts/barchart/barchart.component';
import { PiechartComponent } from './components/dashboard/charts/piechart/piechart.component';
import { LinechartComponent } from './components/dashboard/charts/linechart/linechart.component';
import { PolarchartComponent } from './components/dashboard/charts/polarchart/polarchart.component';
import { UiModule } from '../ui/ui.module';

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
    UiModule,
  ],
})
export class FeatureModule {}
