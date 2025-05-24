import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  CounterValue=signal(0);
increment(){
this.CounterValue.update((val)=>val+1);
}
decrement()
{
this.CounterValue.update((val)=>val-1);
}
reset()
{
this.CounterValue.set(0);
}
}
