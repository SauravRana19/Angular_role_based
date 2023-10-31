import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/components/header/header.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { MainComponent } from '../layout/components/main/main.component';
import { CoreModule } from '../core/core.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent, MainComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    CoreModule,
    UiModule,
    
  ],
  exports: [HeaderComponent, SidebarComponent],
})
export class LayoutModule {}
