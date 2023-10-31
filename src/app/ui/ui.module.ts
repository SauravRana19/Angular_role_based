import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { DragDropModule } from 'primeng/dragdrop';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FieldsetModule } from 'primeng/fieldset';
import { BlockUIModule } from 'primeng/blockui';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ImageModule } from 'primeng/image';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SplitButtonModule,
    SidebarModule,
    MenuModule,
    DropdownModule,
    DragDropModule,
    CardModule,
    SkeletonModule,
    ProgressSpinnerModule,
    FieldsetModule,
    BlockUIModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
  ],
  exports: [
    SplitButtonModule,
    SidebarModule,
    MenuModule,
    DropdownModule,
    DragDropModule,
    CardModule,
    SkeletonModule,
    ProgressSpinnerModule,
    FieldsetModule,
    BlockUIModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    ImageModule,
    TooltipModule,
  ],
})
export class UiModule {}
