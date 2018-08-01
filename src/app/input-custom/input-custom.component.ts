import { Component } from '@angular/core';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.css']
})
export class InputCustomComponent {

  public text = 'template';

  clickMessage = '';
  values1 = '';
  values2 = '';
  values3 = '';
  people = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  onKey1(event: any) { // without type info
    this.values1 += event.target.value + ' | ';
  }


  onKey2(event: KeyboardEvent) { // without type info
    this.values2 += (<HTMLInputElement>event.target).value + ' | ';
  }

  onKey3(value: string) {
    this.values3 = value;
  }


  addHero( newHero: string ) {
    if ( newHero ) {
      this.people.push(newHero);
    }
  }
  deleteHerro(hero: string) {
      const index = this.people.indexOf(hero);
      if ( index !== -1 ) {
        this.people.splice(index, 1);
      }

  }
}
