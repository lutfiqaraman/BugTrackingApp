import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatMenuModule
  ],
  exports: [
    MatGridListModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
