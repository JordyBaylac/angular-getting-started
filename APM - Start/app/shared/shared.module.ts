import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        StarComponent,
        CommonModule,
        FormsModule
    ],
    declarations: [
        StarComponent
    ]

})
export class SharedModule {}