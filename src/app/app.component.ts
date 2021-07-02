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
  WordsLeft = 0;
  wrongLetters = 0;

  setTypeLetter(value: string) {
    this.typedText = value;

    this.difference(value, this.sentence);
    console.log('total', this.sentence.length);
    console.log('wordLeft', this.WordsLeft);
    console.log('Wrong Letters', this.wrongLetters);
  }
  compare(actualLetter: string, typedLetter: String) {
    if (!typedLetter) {
      return '';
    }
    return actualLetter === typedLetter ? 'correct' : 'incorrect';
  }
  difference = (firstStr: string, secondStr: string) => {
    this.wrongLetters = 0;
    this.WordsLeft = this.sentence.length;
    for (let i = 0; i < firstStr.length; i++) {
      if (firstStr[i] != secondStr[i]) {
        this.wrongLetters++;
      } else {
        this.WordsLeft--;
      }
    }
  };
}
