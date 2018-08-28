import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatToolbarModule ,
MatSelectModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatDatepickerModule,

} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule

  ],

  declarations: []
})
export class MaterialModule { }
