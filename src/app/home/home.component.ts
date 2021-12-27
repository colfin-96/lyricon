import { Component, OnInit } from '@angular/core';
import {
  collection,
  doc,
  setDoc,
  Firestore,
  getDocs,
  QuerySnapshot,
  DocumentData,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  songs: Song[] = [];
  constructor(private db: Firestore) {}

  ngOnInit(): void {
    this.getSongs();
  }

  async getSongs() {
    // let songs = await getDocs(collection(this.db, 'songs'));
    const songs = await getDocs(
      collection(this.db, 'songs').withConverter(convertToSong)
    );
    songs.docs.forEach((x) => {
      const song = x.data();

      this.songs.push(song);
      console.log(x.data());
    });
  }
}

const convertToSong = {
  toFirestore: (data: Song) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => {
    let song: Song = {
      author: snap.data()['author'],
      number: snap.data()['number'],
      title: snap.data()['title'],
      subtitle: snap.data()['subtitle'],
      composer: snap.data()['composer'],
      verses: [],
    };
    return song;
  },
};
