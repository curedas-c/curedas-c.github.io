import { AfterViewInit, Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  writingText: any;
  typeWriter: any;

  ngOnInit(): void {
    this.writingText = document.querySelector('.main-text h2 span');
    this.typeWriter = new Typewriter(this.writingText, {
      loop: true,
      delay: 75,
    });
  }

  ngAfterViewInit(): void {
    this.initTypeWriter();
  }

  initTypeWriter() {
    this.typeWriter
    .typeString('donne vie à vos projets!')
    .pauseFor(2000)
    .deleteAll()
    .typeString('construit des interfaces modernes!')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="red-color">❤</span> la qualité!')
    .pauseFor(2500)
    .start();
  }
}
