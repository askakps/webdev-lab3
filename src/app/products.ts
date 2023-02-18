export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    description: `<ul>
    <li>Диагональ экрана: 13.3 дюйм</li>
    <li>Процессор: Apple M1</li>
    <li>Видеокарта: Apple M1 7 core</li>
    <li>Размер оперативной памяти: 8 ГБ</li>
    <li>Тип жесткого диска: SSD</li>
    <li>Общий объем накопителей: 256 ГБ</li>
  </ul>`,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    rating: 5,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
