import { Component } from '@angular/core';

const lyricsArray = [
  'You can feel when...',
  'I!',
  'I am inside!',
  'And you know that I control you',
  'I enslave you',
  'I destroy you',
  'And leave you comatose'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  lyrics = lyricsArray;
}
