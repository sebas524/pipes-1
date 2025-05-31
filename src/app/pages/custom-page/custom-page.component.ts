import { Component, computed, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero.data';
import { FlightCapabilityPipe } from '../../pipes/flight-capability.pipe';
import { ColorPipe } from '../../pipes/color.pipe';
import { HexPipe } from '../../pipes/hex.pipe';
import { TitleCasePipe } from '@angular/common';
import { CreatorPipe } from '../../pipes/creator.pipe';
import { SortByPipe } from '../../pipes/sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { FilterByPipe } from '../../pipes/filter-by.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    FlightCapabilityPipe,
    ColorPipe,
    HexPipe,
    TitleCasePipe,
    CreatorPipe,
    SortByPipe,
    FilterByPipe,
  ],
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.css',
})
export class CustomPageComponent {
  name = signal('Sebastian Veru');
  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');

  upperCase = signal(true);
  toggle() {
    this.upperCase.update((value) => {
      console.log({ value });

      return !value;
    });
  }
}
