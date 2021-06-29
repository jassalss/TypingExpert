import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  sentence = lorem.sentence();
  typedText = '';

  setTypeLetter(value: string) {
    this.typedText = value;
  }
  compare(actualLetter: string, typedLetter: String) {
    if (!typedLetter) {
      return '';
    }
    return actualLetter === typedLetter ? 'correct' : 'incorrect';
    
  }
}
