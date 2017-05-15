import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges{
    @Input()
    rating: number = 4;
    starWidth: number;

    @Output()
    ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick(event: any): void {
        
        
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
        
    }

}