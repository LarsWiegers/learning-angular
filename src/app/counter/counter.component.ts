import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input('initialCount')
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onCounterPlus() {
    this.count++;
  }
  onCounterMinus() {
    this.count--;
  }
}
