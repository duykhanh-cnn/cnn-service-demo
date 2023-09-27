import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countPanelLinks'
})
export class CountPanelLinksPipe implements PipeTransform {

  transform(panelLinks: any[]): number {
    return panelLinks.length;
  }

}
