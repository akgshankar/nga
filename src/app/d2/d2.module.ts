import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemSearchComponent } from './item-search/item-search.component';
import { AlertComponent } from './alert/alert.component';
import { D2DemoComponent } from './d2-demo.component';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [ItemSearchComponent, AlertComponent, D2DemoComponent],
  imports: [
    CommonModule,AngularMaterialModule
  ]
})
export class D2Module { }
