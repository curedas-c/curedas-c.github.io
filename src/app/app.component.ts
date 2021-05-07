import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Typewriter from 'typewriter-effect/dist/core';
import emailjs, { init } from 'emailjs-com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  writingText: any;
  typeWriter: any;
  abidjanaisIMG = [
    'assets/images/abidjanais_first.jpg',
    'assets/images/abidjanais_second.jpg',
    'assets/images/abidjanais_third.jpg',
  ];
  optimizarIMG = [
    'assets/images/optimizar_first.jpg',
    'assets/images/optimizar_second.jpg',
    'assets/images/optimizar_third.jpg',
  ];
  transportIMG = [
    'assets/images/transport_first.jpg',
    'assets/images/transport_second.jpg',
    'assets/images/transport_third.jpg',
  ];
  contactForm: FormGroup;
  isFormLoading = false;
  // popup
  isPopupVisible = false;
  isFormSended = false;
  @ViewChild('form') formRef: ElementRef<HTMLFormElement>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.writingText = document.querySelector('.main-text h2 span');
    this.typeWriter = new Typewriter(this.writingText, {
      loop: true,
      delay: 75,
    });
    this.initForm();

    //init emailJs
    init('user_2fVJEKoP7Hyvko2yIOixO');
  }

  ngAfterViewInit(): void {
    this.disableLoadingScreen();
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

  disableLoadingScreen() {
    let preloader = document.querySelector('#loader-wrapper') as HTMLDivElement;
    preloader.style.animation = 'fade-disappear .8s linear forwards';
    setTimeout(() => {
      requestAnimationFrame(() => {
        preloader.style.display = 'none';
      });
    }, 1000);
  }

  scrollToProjects() {
    const PROJECT_SECTION: HTMLElement = document.querySelector('.title');
    PROJECT_SECTION.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact() {
    const CONTACT_SECTION: HTMLElement = document.querySelector('.main-form');
    CONTACT_SECTION.scrollIntoView({ behavior: 'smooth' });
  }

  initForm() {
    this.contactForm = this.fb.group({
      client_name: ['', [Validators.required, Validators.minLength(3)]],
      client_contact: [
        null,
        [Validators.required, Validators.pattern('[0-9]{10}')],
      ],
      client_email: ['', Validators.email],
      client_message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  submitForm() {
    this.isFormLoading = true;
    emailjs
      .sendForm(
        'service_hp9vzrd',
        'template_o1j00fg',
        this.formRef.nativeElement
      )
      .then(
        () => {
          this.showPopup(true);
          this.contactForm.reset();
        },
        (err) => {
          this.showPopup();
          console.log('error', err);
        }
      );
  }

  showPopup(formSended: boolean = false) {
    this.isFormLoading = false;
    this.isPopupVisible = true;
    this.isFormSended = formSended;
    setTimeout(() => {
      this.isPopupVisible = false;
    }, 5000);
  }
}
