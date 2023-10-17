import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/components/header/header.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { MainComponent } from '../layout/components/main/main.component';
import { CoreModule } from '../core/core.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent, MainComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    SplitButtonModule,
    SidebarModule,
    MenuModule,
    CoreModule,
    
  ],
  exports: [HeaderComponent, SidebarComponent],
})
export class LayoutModule {}
