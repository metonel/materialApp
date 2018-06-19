import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule]
})
export class MatModule { }