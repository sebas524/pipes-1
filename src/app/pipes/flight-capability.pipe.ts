import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flightCapability',
})
export class FlightCapabilityPipe implements PipeTransform {
  transform(canFly: boolean): string {
    return canFly ? 'Able to fly' : 'Unable to fly';
  }
}
