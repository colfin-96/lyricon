import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyBxVsddeKRo-cGx4XVMxJady8NFW8b5UL8',
      authDomain: 'lyricon-396d9.firebaseapp.com',
      projectId: 'lyricon-396d9',
      storageBucket: 'lyricon-396d9.appspot.com',
      messagingSenderId: '195986362256',
      appId: '1:195986362256:web:071311477be141345f6d15',
    };

    const app = initializeApp(firebaseConfig);
  }

  title = 'current-directory';
}
