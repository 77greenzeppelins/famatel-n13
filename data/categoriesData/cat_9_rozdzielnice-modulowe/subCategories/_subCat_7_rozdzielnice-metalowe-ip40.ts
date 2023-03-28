/*Images staff*/
import { imgRozdzielniceModulowe_07_metalowe_IP40 } from '../../../../public/images/c9_rozdzielnice-modulowe/7_metalowe-ip40/imgRozdzielniceModulowe_07_metaloweIP40';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: '',
    textIcons: ['IP40', '360 x 340'],
    imageData: imgRozdzielniceModulowe_07_metalowe_IP40[0],
    type: 'Typ: Rozdzielnica modułowa',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3114',
  },
  {
    arrayIndex: 1,
    path: '',
    textIcons: ['IP40', '360 x 460'],
    imageData: imgRozdzielniceModulowe_07_metalowe_IP40[1],
    type: 'Typ: Rozdzielnica modułowa',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3128',
  },
  {
    arrayIndex: 2,
    path: '',
    textIcons: ['IP40', '360 x 590'],
    imageData: imgRozdzielniceModulowe_07_metalowe_IP40[2],
    type: 'Typ: Rozdzielnica modułowa',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3142',
  },
  {
    arrayIndex: 3,
    path: '',
    textIcons: ['IP40', '360 x 715'],
    imageData: imgRozdzielniceModulowe_07_metalowe_IP40[3],
    type: 'Typ: Rozdzielnica modułowa',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3156',
  },
];

export { productCardsData };
