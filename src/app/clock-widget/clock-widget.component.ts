import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-clock-widget',
  templateUrl: './clock-widget.component.html',
  styleUrls: ['./clock-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockWidgetComponent implements OnInit, OnDestroy {
  public hour = 0;
  public minute = 0;
  public second = 0;
  public date = new Date();

  private clockSubscription = new Subscription();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.clockSubscription = interval(1000).subscribe(() => {
      this.clock();
    });
  }

  /**
   * Functionality to calculate angle data required for the clock
   */
  private clock(): void {
    this.date = new Date();
    const hours = ((this.date.getHours() + 11) % 12) + 1,
      minutes = this.date.getMinutes(),
      seconds = this.date.getSeconds();

    this.hour = hours * 30;
    this.minute = minutes * 6;
    this.second = seconds * 6;
    console.log(this.hour, this.minute, this.second);
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe();
  }
}
