import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-clock-widget',
  templateUrl: './clock-widget.component.html',
  styleUrls: ['./clock-widget.component.scss'],
})
export class ClockWidgetComponent implements OnInit {
  @ViewChild('hour', { static: false })
  private hour!: ElementRef;
  @ViewChild('minute', { static: false })
  private minute!: ElementRef;
  @ViewChild('second', { static: false })
  private second!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.clockPreCalculations();
    setInterval(this.clockPreCalculations, 1000);
  }

  /**
   * Functionality to calculate dqata required for the clock
   */
  private clockPreCalculations(): void {
    const date = new Date(),
      hours = ((date.getHours() + 11) % 12) + 1,
      minutes = date.getMinutes(),
      seconds = date.getSeconds();

    const hour = hours * 30,
      minute = minutes * 6,
      second = seconds * 6;

    this.renderClockStyles(this.hour, hour);
    this.renderClockStyles(this.minute, minute);
    this.renderClockStyles(this.second, second);
  }

  /**
   * Functionality to render the given styles to the clock elements
   * @param div Individual element references for each hand
   * @param angle Angle of rotation of the hands
   */
  private renderClockStyles(div: ElementRef, angle: number): void {
    this.renderer?.setStyle(div?.nativeElement, 'rotate', `${angle}deg`);
  }
}
