export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    description: `Диагональ экрана: 13.3 дюйм<
    Процессор: Apple M1
    Видеокарта: Apple M1 7 core
    Размер оперативной памяти: 8 ГБ
    Тип жесткого диска: SSD
    Общий объем накопителей: 256 ГБ`,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
