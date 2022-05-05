import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public readonly title = 'Personal Website';
  public readonly height = 100;
  public readonly width = 100;
  public readonly name = new Audio('../assets/voice.mp3')
  public myStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    'z-index': -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  public myParams = {
    particles: {
      number: {
        value: 200,
      },
      color: {
        value: '#7DBCDE',
      },
      shape: {
        type: 'triangle',
      },
    },
  };

}
