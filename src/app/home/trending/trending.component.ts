import { Component, OnInit ,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit,OnChanges {
  @Input() simpleText: string='';
  selectedRadioButtonValue: string='All';
  @Output() 
  countRadioButtonSelectinChanged: EventEmitter<string> = new EventEmitter<string>();
  @Input() all: number=0;
  @Input() male:number=0;
  @Input() female:number=0;
  
  onRadioButtonSelectionChange(){
    this.countRadioButtonSelectinChanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue);
  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    for (let propertyName in changes) {
         let change = changes[propertyName];
         let current= JSON.stringify(change.currentValue);
         let previous =JSON.stringify(change.previousValue);
        //  console.log("previous"+previous);
        //  console.log("current"+current);
    }
  }

  ngOnInit(): void {
  }

}
