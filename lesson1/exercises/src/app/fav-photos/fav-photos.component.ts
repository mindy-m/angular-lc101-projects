import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos Galore';
  image1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bourtzi_castle_harbour_Karystos_Euboea_Greece.jpg/1024px-Bourtzi_castle_harbour_Karystos_Euboea_Greece.jpg';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Tiger_swallowtail_%2874863%29.jpg/1024px-Tiger_swallowtail_%2874863%29.jpg';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/8/82/Pertandingan_loncat_api_indah_di_ujian_pencak_silat.jpg';

  constructor() { }

  ngOnInit() {
  }

}