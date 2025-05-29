import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css',
})
export class NumbersPageComponent {
  totalSales = signal(34_332_098.323189);
  percent = signal(0.764332894);
}
