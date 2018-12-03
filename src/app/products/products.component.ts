import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
      new Product(1, 'Iphone x10', 'All-new Liquid Retina display — the most advanced LCD in the industry. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough camera system. iPhone XR. It’s beautiful any way you look at it.', 'https://www.t-mobile.com/images/png/products/phones/Apple-iPhone-X-Space-Gray/250x270_1.png', 999 ),
      new Product(2, 'Samsung s9', 'Our category-defining Dual Aperture lens adapts like the human eye. It\'s able to automatically switch between various lighting conditions with ease—making your photos look great whether it\'s bright or dark, day or night.', 'https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX522_.jpg', 799),
      new Product(3, 'Lg G6', 'Image result for lg g6 descriptionwww.lg.com\n' +
          'LG G6 comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 2000GB via a microSD card. As far as the cameras are concerned, the LG G6 packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies. The LG G6 is powered by a 3300mAh non removable battery.', 'https://cdn2.gsmarena.com/vv/pics/lg/lg-g6-4.jpg', 599),
      new Product(4, 'Iphone x10', 'All-new Liquid Retina display — the most advanced LCD in the industry. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough camera system. iPhone XR. It’s beautiful any way you look at it.', 'https://www.t-mobile.com/images/png/products/phones/Apple-iPhone-X-Space-Gray/250x270_1.png', 999 ),
      new Product(5, 'Samsung s9', 'Our category-defining Dual Aperture lens adapts like the human eye. It\'s able to automatically switch between various lighting conditions with ease—making your photos look great whether it\'s bright or dark, day or night.', 'https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX522_.jpg', 799),
      new Product(6, 'Lg G6', 'Image result for lg g6 descriptionwww.lg.com\n' +
          'LG G6 comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 2000GB via a microSD card. As far as the cameras are concerned, the LG G6 packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies. The LG G6 is powered by a 3300mAh non removable battery.', 'https://cdn2.gsmarena.com/vv/pics/lg/lg-g6-4.jpg', 599),
      new Product(7, 'Iphone x10', 'All-new Liquid Retina display — the most advanced LCD in the industry. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough camera system. iPhone XR. It’s beautiful any way you look at it.', 'https://www.t-mobile.com/images/png/products/phones/Apple-iPhone-X-Space-Gray/250x270_1.png', 999 ),
      new Product(8, 'Samsung s9', 'Our category-defining Dual Aperture lens adapts like the human eye. It\'s able to automatically switch between various lighting conditions with ease—making your photos look great whether it\'s bright or dark, day or night.', 'https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX522_.jpg', 799),
      new Product(9, 'Lg G6', 'Image result for lg g6 descriptionwww.lg.com\n' +
          'LG G6 comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 2000GB via a microSD card. As far as the cameras are concerned, the LG G6 packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies. The LG G6 is powered by a 3300mAh non removable battery.', 'https://cdn2.gsmarena.com/vv/pics/lg/lg-g6-4.jpg', 599),
      new Product(10, 'Iphone x10', 'All-new Liquid Retina display — the most advanced LCD in the industry. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough camera system. iPhone XR. It’s beautiful any way you look at it.', 'https://www.t-mobile.com/images/png/products/phones/Apple-iPhone-X-Space-Gray/250x270_1.png', 999 ),
      new Product(11, 'Samsung s9', 'Our category-defining Dual Aperture lens adapts like the human eye. It\'s able to automatically switch between various lighting conditions with ease—making your photos look great whether it\'s bright or dark, day or night.', 'https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX522_.jpg', 799),
      new Product(12, 'Lg G6', 'Image result for lg g6 descriptionwww.lg.com\n' +
          'LG G6 comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 2000GB via a microSD card. As far as the cameras are concerned, the LG G6 packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies. The LG G6 is powered by a 3300mAh non removable battery.', 'https://cdn2.gsmarena.com/vv/pics/lg/lg-g6-4.jpg', 599),
  ];


  constructor() { }

  ngOnInit() {
  }
}
