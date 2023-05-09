//---------------------------------------------cat1
import { productCardsData as cat1Sub1 } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_1_przenosne_data';
import { productCardsData as cat1Sub2 } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_2_tablicowe_data';
import { wtyczkiGniazdaScienne_productCards_data as cat1Sub3 } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_3_scienne_data';
import { wtyczkiGniazdaSchukoTablicowe_productCards_data as cat1Sub4 } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_4_tablicowe-jednofazowe_data ';
import { wtyczkiGniazdaSchuko_productCards_data as cat1Sub5 } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_5_jednofazowe_data';
import { productCardsData as cat1Sub6 } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_6_niskie-napiecia_data';
import { wtyczkiGniazdaKontenerowe_productCard_data as cat1Sub7 } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_7_kontenerowe_data';
import { wtyczkiGniazdaEstradowe_productCard_data as cat1Sub8 } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_8_estradowe_data';
import { wtyczkiGniazdaCampingowe_productCard_data as cat1Sub9 } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_9_campingowe_data';
//---------------------------------------------cat2
import { gniazdaBlokadaTablicowe_productCards_data as cat2Sub1 } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_1_tablicowe_data';
import { gniazdaBlokadaStale_productCards_data as cat2Sub2 } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_2_stale_data';
import { gniazdaBlokadaKomponenty_productCards_data as cat2Sub3 } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_3_z-komponentami_data';
//___don't have product card; ends on subcategory
import { gniazdaBlokadaSubCategoriesData as cat2Sub4 } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/_cat2_gniazda-z-blokada_data';
//---------------------------------------------cat3
import { adapteryPrzemysloweSchuko_productCards_data as cat3Sub1 } from '../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_1_schuko_data';
import { adapteryPrzemysloweWielokrotne_productCards_data as cat3Sub2 } from '../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_2_wielokrotne_data';
import { adapteryPrzemysloweWielokrotneKabel_productCards_data as cat3Sub3 } from '../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_3_wielokrotne-z-kablem_data';
//-----------------------------cat4 / cat6 / cat7; for: Gniazda Podwieszane / WyłącznikBezpieczeństwa / ŁadowarkiSamochodowe /
import { catalogStructureData } from '../../../../data/_catalogStructure_data';
//---------------------------------------------cat5
import { przedluzaczeBebnoweSchuko_productCards_data as cat5Sub1 } from '../../../../data/categoriesData/cat_5_przedluzacze-bebnowe/subCategories/_subCat_1_schuko_data';
import { przedluzaczeBebnowePrzemyslowe_productCards_data as cat5Sub2 } from '../../../../data/categoriesData/cat_5_przedluzacze-bebnowe/subCategories/_subCat_2_przemyslowe_data';
import { przedluzaczeBebnoweMetalowe_productCards_data as cat5Sub3 } from '../../../../data/categoriesData/cat_5_przedluzacze-bebnowe/subCategories/_subCat_3_metalowe_data';
//----------------------------------------------cat8
import { productCardsData as cat8Sub1 } from '../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_1_obudowy-puste';
import { productCardsData as cat8Sub2 } from '../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_2_przemyslowe';
import { productCardsData as cat8Sub3 } from '../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_3_gumowe';
import { obudowyRozdzielniceSubCategoriesData as cat8Sub4 } from '../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/_cat8_obudowy-i-rozdzielnice_data';
//----------------------------------------------cat9
import { productCardsData as cat9Sub1 } from '../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/subCategories/_subCat_1_rozdzielnice-scienne';
import { productCardsData as cat9Sub2 } from '../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/subCategories/_subCat_2_modulowe';
import { rozdzielniceModuloweSubCategoriesData as cat9Sub } from '../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/_cat9_rozdzielnice-modulowe_data';

//___
const allProductsForBrowser = [
  /*
  cat_1: wtyczki gniazda
  subCat_1: przenośne
  */
  //__1_1_1
  {
    models: [
      '13100',
      '13200',
      '13304',
      '13404',
      '13101',
      '13201',
      '13300',
      '13400',
      '13104',
      '13202',
      '13301',
      '13401',
      '13102',
      '13203',
      '13305',
      '13405',
      '13103',
      '13204',
      '13302',
      '13402',
      '13105',
      '13206',
      '13303',
      '13403',
    ],
    url: cat1Sub1[0].path,
  },
  //__1_1_2
  {
    models: [
      '14100',
      '14200',
      '14309',
      '14408',
      '14101',
      '14201',
      '14300',
      '14400',
      '14112',
      '14202',
      '14301',
      '14401',
      '14102',
      '14203',
      '14310',
      '14409',
      '14103',
      '14204',
      '14302',
      '14402',
      '14113',
      '14210',
      '14303',
      '14403',
    ],
    url: cat1Sub1[1].path,
  },
  //__1_1_3
  {
    models: [
      '14108',
      '14205',
      '14311',
      '14410',
      '14109',
      '14206',
      '14304',
      '14404',
      '14114',
      '14209',
      '14305',
      '14405',
    ],
    url: cat1Sub1[2].path,
  },
  //__1_1_4
  {
    models: [
      '14110',
      '14212',
      '14312',
      '14411',
      '14111',
      '14208',
      '14306',
      '14406',
      '14115',
      '14211',
      '14307',
      '14407',
    ],
    url: cat1Sub1[3].path,
  },
  //__1_1_5
  {
    models: [
      '23100',
      '23200',
      '23304',
      '23404',
      '23101',
      '23201',
      '23300',
      '23400',
      '23104',
      '23202',
      '23301',
      '23401',
      '23102',
      '23203',
      '23305',
      '23405',
      '23103',
      '23204',
      '23302',
      '23402',
      '23105',
      '23205',
      '23303',
      '23403',
    ],
    url: cat1Sub1[4].path,
  },
  //__1_1_6
  {
    models: [
      '24100',
      '24200',
      '24310',
      '24410',
      '24101',
      '24201',
      '24300',
      '24400',
      '24107',
      '24202',
      '24301',
      '24401',
      '24102',
      '24203',
      '24311',
      '24411',
      '24103',
      '24204',
      '24302',
      '24402',
      '24112',
      '24210',
      '24303',
      '24403',
    ],
    url: cat1Sub1[5].path,
  },
  //__1_1_7
  {
    models: [
      '24104',
      '24205',
      '24312',
      '24412',
      '24109',
      '24206',
      '24304',
      '24404',
      '24113',
      '24209',
      '24305',
      '24405',
    ],
    url: cat1Sub1[6].path,
  },
  //__1_1_8
  {
    models: [
      '24106',
      '24212',
      '24313',
      '24413',
      '24111',
      '24208',
      '24306',
      '24406',
      '24114',
      '24211',
      '24307',
      '24407',
    ],
    url: cat1Sub1[7].path,
  },
  //__1_1_9
  {
    models: ['13200CR', '13300CR', '13301CR', '13200cr', '13300cr', '13301cr'],
    url: cat1Sub1[8].path,
  },
  //__1_1_10
  {
    models: ['14200CR', '14300CR', '14301CR', '14200cr', '14300cr', '14301cr'],
    url: cat1Sub1[9].path,
  },
  //__1_1_11
  {
    models: ['23200CR', '23300CR', '23301CR', '23200cr', '23300cr', '23301cr'],
    url: cat1Sub1[10].path,
  },
  //__1_1_12
  {
    models: ['24200CR', '24300CR', '24301CR', '24200cr', '24300cr', '24301cr'],
    url: cat1Sub1[11].path,
  },
  //__1_1_13
  {
    models: ['13311', '13313'],
    url: cat1Sub1[12].path,
  },
  /*
  cat_1: wtyczki gniazda
  subCat_2: tablicowe
  */
  //__1_2_1
  {
    models: [
      '13531',
      '13631',
      '13374',
      '13837',
      '13532',
      '13632',
      '13370',
      '13831',
      '13537',
      '13636',
      '13371',
      '13832',
      '13533',
      '13633',
      '13375',
      '13838',
      '13534',
      '13366',
      '13372',
      '13833',
      '13538',
      '13637',
      '13373',
      '13834',
    ],
    url: cat1Sub2[0].path,
  },
  //__1_2_2
  {
    models: [
      '13535',
      '13634',
      '13733',
      '13839',
      '13536',
      '13635',
      '13731',
      '13835',
    ],
    url: cat1Sub2[1].path,
  },
  //__1_2_3
  {
    models: [
      '13546',
      '13638',
      '13376',
      '13840',
      '13539',
      '13639',
      '13377',
      '13841',
      '13540',
      '13640',
      '13378',
      '13842',
    ],
    url: cat1Sub2[2].path,
  },
  //__1_2_4
  {
    models: [
      '23170',
      '23270',
      '23374',
      '23474',
      '23171',
      '23271',
      '23370',
      '23470',
      '23174',
      '23272',
      '23371',
      '23471',
      '23172',
      '23273',
      '23375',
      '23475',
      '23173',
      '23274',
      '23372',
      '23472',
      '23175',
      '23275',
      '23373',
      '23473',
    ],
    url: cat1Sub2[3].path,
  },
  //__1_2_5
  {
    models: [
      '24170',
      '24270',
      '24378',
      '24474',
      '24171',
      '24271',
      '24370',
      '24470',
      '24174',
      '24272',
      '24371',
      '24471',
      '24172',
      '24273',
      '24379',
      '24475',
      '24173',
      '24274',
      '24372',
      '24472',
      '24175',
      '24275',
      '24373',
      '24473',
    ],
    url: cat1Sub2[4].path,
  },
  //__1_2_6
  {
    models: [
      '24180',
      '24280',
      '24380',
      '24480',
      '24181',
      '24281',
      '24375',
      '24481',
      '24182',
      '24282',
      '24374',
      '24482',
    ],
    url: cat1Sub2[5].path,
  },
  //__1_2_7
  {
    models: [
      '24174',
      '24274',
      '24381',
      '24483',
      '24184',
      '24284',
      '24376',
      '24484',
      '24185',
      '24285',
      '24377',
      '24485',
    ],
    url: cat1Sub2[6].path,
  },
  //__1_2_8
  {
    models: [
      '23130',
      '23230',
      '23334',
      '23434',
      '23131',
      '23231',
      '23330',
      '23430',
      '23134',
      '23232',
      '23331',
      '23431',
      '23132',
      '23233',
      '23335',
      '23435',
      '23133',
      '23234',
      '23332',
      '23432',
      '23135',
      '23235',
      '23333',
      '23433',
    ],
    url: cat1Sub2[7].path,
  },
  //__1_2_9
  {
    models: [
      '24130',
      '24230',
      '24340',
      '24434',
      '24131',
      '24231',
      '24330',
      '24430',
      '24134',
      '24232',
      '24331',
      '24431',
      '24132',
      '24233',
      '24341',
      '24441',
      '24133',
      '24234',
      '24332',
      '24432',
      '24135',
      '24240',
      '24333',
      '24433',
    ],
    url: cat1Sub2[8].path,
  },

  //__1_2_10
  {
    models: [
      '24137',
      '24235',
      '24336',
      '24442',
      '24138',
      '24236',
      '24334',
      '24437',
      '24141',
      '24238',
      '24335',
      '24438',
    ],
    url: cat1Sub2[9].path,
  },
  //__1_2_11
  {
    models: [
      '24136',
      '24237',
      '24342',
      '24443',
      '24140',
      '24239',
      '24337',
      '24436',
      '24142',
      '24277',
      '24338',
      '24440',
    ],
    url: cat1Sub2[10].path,
  },
  /*
  cat_1: wtyczki gniazda
  subCat_3: ścienne
  */
  //__1_3_1
  {
    models: [
      '13150',
      '13250',
      '13354',
      '13454',
      '13151',
      '13251',
      '13350',
      '13450',
      '13154',
      '13252',
      '13351',
      '13451',
      '13152',
      '13253',
      '13355',
      '13455',
      '13153',
      '13254',
      '13352',
      '13452',
      '13155',
      '13255',
      '13353',
      '13453',
    ],
    url: cat1Sub3[0].path,
  },
  //__1_3_2
  {
    models: [
      '14150',
      '14250',
      '14363',
      '14456',
      '14151',
      '14251',
      '14350',
      '14450',
      '14159',
      '14252',
      '14351',
      '14451',
      '14152',
      '14253',
      '14364',
      '14457',
      '14153',
      '14254',
      '14352',
      '14452',
      '14160',
      '14259',
      '14353',
      '14453',
    ],
    url: cat1Sub3[1].path,
  },
  //__1_3_3
  {
    models: [
      '13196',
      '13297',
      '13398',
      '13481',
      '13197',
      '13298',
      '13399',
      '13482',
      '13198',
      '13299',
      '13395',
      '13483',
      '13199',
      '13306',
      '13407',
      '13484',
      '13208',
      '13307',
      '13396',
      '13485',
      '13207',
      '13308',
      '13397',
      '13486',
    ],
    url: cat1Sub3[2].path,
  },
  //__1_3_4
  {
    models: [
      '13199',
      '13306',
      '13407',
      '13484',
      '13208',
      '13307',
      '13396',
      '13485',
      '13207',
      '13308',
      '13397',
      '13486',
    ],
    url: cat1Sub3[3].path,
  },
  //__1_3_5
  {
    models: [
      '13501',
      '13661',
      '13765',
      '13865',
      '13502',
      '13662',
      '13761',
      '13861',
      '13505',
      '13665',
      '13762',
      '13862',
      '13503',
      '13663',
      '13766',
      '13866',
      '13504',
      '13664',
      '13763',
      '13863',
      '13506',
      '13666',
      '13764',
      '13864',
    ],
    url: cat1Sub3[4].path,
  },
  //__1_3_6
  {
    models: [
      '14505',
      '14665',
      '14358',
      '14869',
      '14506',
      '14666',
      '14354',
      '14864',
      '14510',
      '14669',
      '14355',
      '14866',
    ],
    url: cat1Sub3[5].path,
  },
  //__1_3_7
  {
    models: [
      '14154',
      '14256',
      '14382',
      '14870',
      '14508',
      '14667',
      '14380',
      '14867',
      '14509',
      '14668',
      '14381',
      '14868',
    ],
    url: cat1Sub3[6].path,
  },
  //__1_3_8
  {
    models: [
      '23150',
      '23250',
      '23354',
      '23454',
      '23151',
      '23251',
      '23350',
      '23450',
      '23154',
      '23252',
      '23351',
      '23451',
      '23152',
      '23253',
      '23355',
      '23455',
      '23153',
      '23254',
      '23352',
      '23452',
      '23155',
      '23255',
      '23353',
      '23453',
    ],
    url: cat1Sub3[7].path,
  },
  //__1_3_9
  {
    models: [
      '24150',
      '24250',
      '24354',
      '24454',
      '24151',
      '24251',
      '24350',
      '24450',
      '24154',
      '24252',
      '24351',
      '24451',
      '24152',
      '24253',
      '24355',
      '24455',
      '24153',
      '24254',
      '24352',
      '24452',
      '24155',
      '24255',
      '24353',
      '24453',
    ],
    url: cat1Sub3[8].path,
  },
  //__1_3_10
  {
    models: [
      '23196',
      '23297',
      '23398',
      '23481',
      '23197',
      '23298',
      '23399',
      '23482',
      '23198',
      '23299',
      '23395',
      '23483',
      '23199',
      '23306',
      '23407',
      '23484',
      '23206',
      '23307',
      '23396',
      '23485',
      '23207',
      '23308',
      '23397',
      '23486',
    ],
    url: cat1Sub3[9].path,
  },
  //__1_3_11
  {
    models: [
      '23190',
      '23290',
      '23406',
      '23494',
      '23191',
      '23291',
      '23390',
      '23490',
      '23194',
      '23295',
      '23391',
      '23491',
      '23192',
      '23292',
      '23394',
      '23495',
      '23193',
      '23293',
      '23392',
      '23492',
      '23195',
      '23296',
      '23393',
      '23493',
    ],
    url: cat1Sub3[10].path,
  },
  //__1_3_12
  {
    models: ['23609', '23602', '23605', '23606'],
    url: cat1Sub3[11].path,
  },
  //__1_3_13
  {
    models: ['23629', '23622', '23625', '23626'],
    url: cat1Sub3[12].path,
  },
  //__1_3_14
  {
    models: [
      '24190',
      '24290',
      '24399',
      '24494',
      '24191',
      '24291',
      '24390',
      '24490',
      '24198',
      '24295',
      '24391',
      '24491',
      '24192',
      '24292',
      '24408',
      '24488',
      '24193',
      '24293',
      '24392',
      '24492',
      '24199',
      '24296',
      '24393',
      '24493',
    ],
    url: cat1Sub3[13].path,
  },
  //__1_3_15
  {
    models: ['24609', '24602', '24605', '24606'],
    url: cat1Sub3[14].path,
  },
  //__1_3_16
  {
    models: ['24629', '24629', '24625', '24626'],
    url: cat1Sub3[15].path,
  },
  //__1_3_17
  {
    models: [
      '24194',
      '24259',
      '24409',
      '24486',
      '24195',
      '24256',
      '24394',
      '24496',
      '24512',
      '24257',
      '24395',
      '24497',
    ],
    url: cat1Sub3[16].path,
  },
  //__1_3_18
  {
    models: [
      '24196',
      '24261',
      '24489',
      '24487',
      '24197',
      '24258',
      '24396',
      '24498',
      '24213',
      '24297',
      '24397',
      '24499',
    ],
    url: cat1Sub3[17].path,
  },
  //__1_3_19
  {
    models: [
      '24196',
      '24261',
      '24489',
      '24487',
      '24197',
      '24258',
      '24396',
      '24498',
      '24213',
      '24297',
      '24397',
      '24499',
    ],
    url: cat1Sub3[18].path,
  },
  //__1_3_20
  {
    models: [
      '24196',
      '24261',
      '24489',
      '24487',
      '24197',
      '24258',
      '24396',
      '24498',
      '24213',
      '24297',
      '24397',
      '24499',
    ],
    url: cat1Sub3[19].path,
  },

  /*
  cat_1: wtyczki gniazda
  subCat_4: schuko tablicowe
  */
  //__1_4_1
  {
    models: ['13953', '13953F'],
    url: cat1Sub4[0].path,
  },
  //__1_4_2
  {
    models: ['13950', '13950F'],
    url: cat1Sub4[1].path,
  },
  //__1_4_3
  {
    models: ['13957', '13957F'],
    url: cat1Sub4[2].path,
  },
  //__1_4_4
  {
    models: ['13956', '13956F'],
    url: cat1Sub4[3].path,
  },
  //__1_4_5
  {
    models: ['13960'],
    url: cat1Sub4[4].path,
  },
  //__1_4_6
  {
    models: ['13960F', '13960f'],
    url: cat1Sub4[5].path,
  },
  //__1_4_7
  {
    models: ['23960'],
    url: cat1Sub4[6].path,
  },
  //__1_4_8
  {
    models: ['24960', '24961'],
    url: cat1Sub4[7].path,
  },
  //__1_4_9
  {
    models: ['13955'],
    url: cat1Sub4[8].path,
  },
  //__1_4_10
  {
    models: ['3905'],
    url: cat1Sub4[9].path,
  },

  /*
  cat_1: wtyczki gniazda
  subCat_5: schuko przenośne
  */
  //__1_5_1
  {
    models: ['1167'],
    url: cat1Sub5[0].path,
  },
  //__1_5_2
  {
    models: ['2167'],
    url: cat1Sub5[1].path,
  },
  //__1_5_3
  {
    models: ['2167F', '2167f'],
    url: cat1Sub5[2].path,
  },
  //__1_5_4
  {
    models: ['1165'],
    url: cat1Sub5[3].path,
  },
  //__1_5_5
  {
    models: ['2165'],
    url: cat1Sub5[4].path,
  },
  //__1_5_6
  {
    models: ['2165F', '2165f'],
    url: cat1Sub5[5].path,
  },
  //__1_5_7
  {
    models: ['187G', '187g'],
    url: cat1Sub5[6].path,
  },
  //__1_5_8
  {
    models: ['188G', '188g'],
    url: cat1Sub5[7].path,
  },
  //__1_5_9
  {
    models: ['2998'],
    url: cat1Sub5[8].path,
  },

  /*
  cat_1: wtyczki gniazda
  subCat_6: niskie napięcia
  */
  //__1_6_1
  {
    models: [
      '13800',
      '13900',
      '13700',
      '13600',
      '13801',
      '13911',
      '13701',
      '13601',
      '13820',
      '13920',
      '13720',
      '13620',
      '13821',
      '13921',
      '13721',
      '13621',
    ],
    url: cat1Sub6[0].path,
  },
  //__1_6_2
  {
    models: [
      '14800',
      '14900',
      '14700',
      '14600',
      '14801',
      '14911',
      '14701',
      '14601',
      '14820',
      '14920',
      '14720',
      '14620',
      '14821',
      '14921',
      '14721',
      '14621',
    ],
    url: cat1Sub6[1].path,
  },
  //__1_6_3
  {
    models: [
      '23800',
      '23900',
      '23700',
      '23600',
      '23801',
      '23911',
      '23701',
      '23601',
      '23820',
      '23920',
      '23720',
      '23620',
      '23821',
      '23921',
      '23721',
      '23621',
    ],
    url: cat1Sub6[2].path,
  },
  //__1_6_4
  {
    models: [
      '24800',
      '24900',
      '24700',
      '24600',
      '24801',
      '24911',
      '24701',
      '24601',
      '24820',
      '24920',
      '24720',
      '24620',
      '24821',
      '24921',
      '24721',
      '24621',
    ],
    url: cat1Sub6[3].path,
  },
  //__1_6_5
  {
    models: [
      '25540',
      '25544',
      '25548',
      '25552',
      '25541',
      '25545',
      '25549',
      '25553',
      '25542',
      '25546',
      '25550',
      '25554',
      '25543',
      '25547',
      '25551',
      '25555',
    ],
    url: cat1Sub6[4].path,
  },
  //__1_6_6
  {
    models: [
      '25556',
      '25560',
      '25564',
      '25568',
      '25557',
      '25561',
      '25565',
      '25569',
      '25558',
      '25562',
      '25566',
      '25570',
      '25559',
      '25563',
      '25567',
      '25571',
    ],
    url: cat1Sub6[5].path,
  },
  //__1_6_7
  {
    models: [
      '23070',
      '23075',
      '23079',
      '23083',
      '23072',
      '23076',
      '23080',
      '23084',
      '23073',
      '23077',
      '23081',
      '23085',
      '23074',
      '23078',
      '23082',
      '23086',
    ],
    url: cat1Sub6[6].path,
  },

  //__1_6_8
  {
    models: [
      '24990',
      '24994',
      '24998',
      '24982',
      '24991',
      '24995',
      '24999',
      '24983',
      '24992',
      '24996',
      '24980',
      '24984',
      '24993',
      '24997',
      '24981',
      '24985',
    ],
    url: cat1Sub6[7].path,
  },

  /*
  cat_1: wtyczki gniazda
  subCat_7: kontenerowe
  */
  //__1_7_1
  {
    models: ['14308'],
    url: cat1Sub7[0].path,
  },
  //__1_7_2
  {
    models: ['24308'],
    url: cat1Sub7[1].path,
  },
  //__1_7_3
  {
    models: ['24339'],
    url: cat1Sub7[2].path,
  },
  //__1_7_4
  {
    models: ['24398'],
    url: cat1Sub7[3].path,
  },
  //__1_7_5
  {
    models: ['25053'],
    url: cat1Sub7[4].path,
  },
  //__1_7_6
  {
    models: ['26028'],
    url: cat1Sub7[5].path,
  },
  //__1_7_7
  {
    models: ['25074'],
    url: cat1Sub7[6].path,
  },
  //__1_7_8
  {
    models: ['25136'],
    url: cat1Sub7[7].path,
  },
  //__1_7_9
  {
    models: ['25727'],
    url: cat1Sub7[8].path,
  },
  //__1_7_10
  {
    models: ['26327'],
    url: cat1Sub7[9].path,
  },
  //__1_7_11
  {
    models: ['26514'],
    url: cat1Sub7[10].path,
  },

  /*
  cat_1: wtyczki gniazda
  subCat_8: estradowe
  */
  //__1_8_1
  {
    models: ['13410'],
    url: cat1Sub8[0].path,
  },
  //__1_8_2
  {
    models: ['23410'],
    url: cat1Sub8[1].path,
  },
  //__1_8_3
  {
    models: ['23480'],
    url: cat1Sub8[2].path,
  },
  //__1_8_4
  {
    models: ['1107'],
    url: cat1Sub8[3].path,
  },
  //__1_8_5
  {
    models: ['2108', '2109'],
    url: cat1Sub8[4].path,
  },
  //__1_8_6
  {
    models: ['17220'],
    url: cat1Sub8[5].path,
  },
  //__1_8_7
  {
    models: ['17120'],
    url: cat1Sub8[6].path,
  },
  //__1_8_8
  {
    models: ['17122'],
    url: cat1Sub8[7].path,
  },
  //__1_8_9
  {
    models: ['17023'],
    url: cat1Sub8[8].path,
  },
  //__1_8_10
  {
    models: ['17020'],
    url: cat1Sub8[9].path,
  },
  //__1_8_11
  {
    models: ['39103', '39104', '39105', '39106'],
    url: cat1Sub8[10].path,
  },
  //__1_8_12
  {
    models: ['1830', '1832'],
    url: cat1Sub8[11].path,
  },
  //__1_8_13
  {
    models: ['1831'],
    url: cat1Sub8[12].path,
  },

  /*
  cat_1: wtyczki gniazda
  subCat_9: campingowe
  */
  //__1_9_1
  {
    models: ['13912'],
    url: cat1Sub9[0].path,
  },
  //__1_9_2
  {
    models: ['13913'],
    url: cat1Sub9[1].path,
  },
  //__1_9_3
  {
    models: ['13919'],
    url: cat1Sub9[2].path,
  },
  //__1_9_4
  {
    models: ['13000'],
    url: cat1Sub9[3].path,
  },
  //__1_9_5
  {
    models: ['13011'],
    url: cat1Sub9[4].path,
  },
  //__1_9_6
  {
    models: ['13917'],
    url: cat1Sub9[5].path,
  },
  //__1_9_7
  {
    models: ['13910'],
    url: cat1Sub9[6].path,
  },
  //__1_9_8
  {
    models: ['13922'],
    url: cat1Sub9[7].path,
  },
  //__1_9_9
  {
    models: ['13918'],
    url: cat1Sub9[8].path,
  },
  //__1_9_10
  {
    models: ['13361', '13362'],
    url: cat1Sub9[9].path,
  },
  //__1_9_10
  {
    models: ['13364', '13365'],
    url: cat1Sub9[10].path,
  },

  /*
  cat_2: gniazda z blokadą
  subCat_1: tablicowe
  */
  //__2_1_1
  {
    models: [
      '25031',
      '25033',
      '25023',
      '25032',
      '25034',
      '25036',
      '25019',
      '25035',
      '25037',
      '25038',
      '25040',
      '25024',
      '25039',
      '25041',
      '25043',
      '25020',
      '25042',
      '25044',
    ],
    url: cat2Sub1[0].path,
  },
  //__2_1_2
  {
    models: [
      '25045',
      '25000',
      '25075',
      '25046',
      '25047',
      '25001',
      '25021',
      '25048',
      '25002',
      '25049',
      '25003',
      '25076',
      '25050',
      '25051',
      '25004',
      '25022',
      '25052',
      '25005',
    ],
    url: cat2Sub1[1].path,
  },
  //__2_1_3
  {
    models: [
      '25054',
      '25056',
      '25079',
      '25055',
      '25057',
      '25059',
      '25085',
      '25058',
      '25060',
      '25137',
      '25063',
      '25080',
      '25061',
      '25064',
      '25066',
      '25086',
      '25065',
      '25067',
    ],
    url: cat2Sub1[2].path,
  },
  //__2_1_4
  {
    models: [
      '25138',
      '25008',
      '25081',
      '25139',
      '25068',
      '25009',
      '25077',
      '25069',
      '25010',
      '25070',
      '25011',
      '25082',
      '25071',
      '25072',
      '25012',
      '25078',
      '25073',
      '25013',
    ],
    url: cat2Sub1[3].path,
  },
  /*
  cat_2: gniazda z blokadą
  subCat_2: stałe
  */
  //__2_2_1
  {
    models: [
      '26006',
      '26008',
      '26033',
      '26007',
      '26009',
      '26011',
      '26029',
      '26010',
      '26012',
      '26013',
      '26015',
      '26034',
      '26014',
      '26016',
      '26018',
      '26030',
      '26017',
      '26019',
    ],
    url: cat2Sub2[0].path,
  },
  //__2_2_2
  {
    models: [
      '26020',
      '26000',
      '26035',
      '26021',
      '26022',
      '26001',
      '26031',
      '26023',
      '26002',
      '26024',
      '26003',
      '26036',
      '26025',
      '26026',
      '26004',
      '26032',
      '26027',
      '26005',
    ],
    url: cat2Sub2[1].path,
  },
  //__2_2_3
  {
    models: [
      '25114',
      '25114',
      '25148',
      '25115',
      '25117',
      '25119',
      '25144',
      '25118',
      '25120',
      '25140',
      '25123',
      '25149',
      '25121',
      '25124',
      '25126',
      '25145',
      '25125',
      '25127',
    ],
    url: cat2Sub2[2].path,
  },
  //__2_2_4
  {
    models: [
      '25128',
      '25108',
      '25150',
      '25129',
      '25130',
      '25109',
      '25146',
      '25131',
      '25110',
      '25132',
      '25111',
      '25151',
      '25133',
      '25134',
      '25112',
      '25147',
      '25141',
      '25113',
    ],
    url: cat2Sub2[3].path,
  },
  /*
  cat_2: gniazda z blokadą
  subCat_3: z komponentami
  */
  //__2_3_1
  {
    models: [
      '25701',
      '25703',
      '25734',
      '25702',
      '25704',
      '25706',
      '25730',
      '25705',
      '25707',
      '25708',
      '25710',
      '25735',
      '25709',
      '25711',
      '25713',
      '25731',
      '25712',
      '25714',
    ],
    url: cat2Sub3[0].path,
  },
  //__2_3_2
  {
    models: [
      '25715',
      '25717',
      '25736',
      '25716',
      '25718',
      '25720',
      '25732',
      '25719',
      '25721',
      '25722',
      '25724',
      '25737',
      '25723',
      '25725',
      '25728',
      '25733',
      '25726',
      '25729',
    ],
    url: cat2Sub3[1].path,
  },
  //__2_3_3
  {
    models: [
      '26301',
      '26303',
      '26334',
      '26302',
      '26304',
      '26306',
      '26330',
      '26305',
      '26307',
      '26308',
      '26310',
      '26335',
      '26309',
      '26311',
      '26313',
      '26331',
      '26312',
      '26314',
    ],
    url: cat2Sub3[2].path,
  },
  //__2_3_4
  {
    models: [
      '26315',
      '26317',
      '26336',
      '26316',
      '26318',
      '26320',
      '26332',
      '26319',
      '26321',
      '26322',
      '26324',
      '26337',
      '26323',
      '26325',
      '26328',
      '26333',
      '26326',
      '26329',
    ],
    url: cat2Sub3[3].path,
  },
  //__2_3_5
  {
    models: [
      '26501',
      '26503',
      '26522',
      '26524',
      '26502',
      '26504',
      '26506',
      '26508',
      '26519',
      '26505',
      '26507',
      '26509',
      '26510',
      '26512',
      '26523',
      '26525',
      '26511',
      '26513',
      '26515',
      '26517',
      '26520',
      '26521',
      '26516',
      '26518',
    ],
    url: cat2Sub3[4].path,
  },
  //__2_3_6
  {
    models: [
      '25330',
      '25333',
      '25208',
      '25336',
      '25331',
      '25334',
      '25206',
      '25337',
      '25332',
      '25335',
      '25207',
      '25338',
    ],
    url: cat2Sub3[5].path,
  },
  //__2_3_7
  {
    models: [
      '25310',
      '25313',
      '25309',
      '25316',
      '25311',
      '25314',
      '25006',
      '25317',
      '25312',
      '25315',
      '25007',
      '25318',
    ],
    url: cat2Sub3[6].path,
  },
  //__2_3_8
  {
    models: [
      '25320',
      '25323',
      '25308',
      '25326',
      '25321',
      '25324',
      '25306',
      '25327',
      '25322',
      '25325',
      '25307',
      '25328',
    ],
    url: cat2Sub3[7].path,
  },
  //__2_3_9
  {
    models: [
      '25152',
      '25155',
      '25158',
      '25161',
      '25153',
      '25156',
      '25159',
      '25162',
      '25154',
      '25157',
      '25160',
      '25163',
    ],
    url: cat2Sub3[8].path,
  },
  /*
  cat_2: gniazda z blokadą
  subCat_4: akcesoria
  */
  //__2_4_1
  {
    models: ['23021', '23022', '23023'],
    url: cat2Sub4[3].subCategoryUrl, //__no product card; ends on subcategory
  },

  /*
  cat_3: adaptery przemysłowe
  subCat_1: schuko
  */
  //__3_1_1
  {
    models: ['16010', '16010F'],
    url: cat3Sub1[0].path,
  },
  //__3_1_2
  {
    models: ['15002', '15002F'],
    url: cat3Sub1[0].path,
  },
  /*
  cat_3: adaptery przemysłowe
  subCat_2: wielokrotne
  */
  //__3_2_1
  {
    models: [
      '15013',
      '15006',
      '15020',
      '15026',
      '15014',
      '15021',
      '15007',
      '15027',
      '15015',
      '15022',
      '15008',
      '15028',
      '15016',
      '15019',
      '15023',
      '15029',
      '15017',
      '15024',
      '15010',
      '15030',
      '15018',
      '15025',
      '15009',
      '15031',
    ],
    url: cat3Sub2[0].path,
  },
  //__3_2_2
  {
    models: [
      '16013',
      '16002',
      '16024',
      '16026',
      '16014',
      '16019',
      '16003',
      '16027',
      '16015',
      '16020',
      '16004',
      '16028',
      '16016',
      '16021',
      '16025',
      '16029',
      '16017',
      '16022',
      '16009',
      '16030',
      '16018',
      '16023',
      '16005',
      '16031',
    ],
    url: cat3Sub2[1].path,
  },
  //__3_2_3
  {
    models: [
      '15032',
      '15000',
      '15036',
      '15039',
      '15033',
      '15037',
      '15001',
      '15040',
    ],
    url: cat3Sub2[2].path,
  },
  //__3_2_4
  {
    models: [
      '16032',
      '16000',
      '16036',
      '16039',
      '16033',
      '16037',
      '16000',
      '16040',
    ],
    url: cat3Sub2[3].path,
  },
  /*
  cat_3: adaptery przemysłowe
  subCat_3: wielokrotne z kablem
  */
  //__3_3_1
  {
    models: [
      '31002',
      '31004',
      '31063',
      '31064',
      '31003',
      '31005',
      '31006',
      '31007',
    ],
    url: cat3Sub3[0].path,
  },
  //__3_3_2
  {
    models: [
      '31008',
      '31010',
      '16069',
      '16070',
      '31009',
      '31011',
      '31012',
      '31013',
    ],
    url: cat3Sub3[1].path,
  },
  //__3_3_3
  {
    models: [
      '31044',
      '31034',
      '31054',
      '31056',
      '31045',
      '31035',
      '31040',
      '31050',
      '31046',
      '31036',
      '31041',
      '31051',
    ],
    url: cat3Sub3[2].path,
  },
  //__3_3_4
  {
    models: [
      '31024',
      '31014',
      '31058',
      '31060',
      '31025',
      '31015',
      '31020',
      '31030',
      '31026',
      '31016',
      '31021',
      '31031',
      '31027',
      '31017',
      '31059',
      '31062',
      '31028',
      '31018',
      '31022',
      '31032',
      '31029',
      '31019',
      '31023',
      '31033',
    ],
    url: cat3Sub3[3].path,
  },
  //__3_3_5
  {
    models: ['31071'],
    url: cat3Sub3[4].path,
  },

  /*
  cat_4: gniazda podwieszane
  subCat_1: gniazda podwieszane
  */
  //__4_1_1
  {
    models: [
      '27001',
      '27002',
      '27003',
      '27004',
      '27005',
      '27006',
      '27007',
      '27008',
      '28000',
      '28001',
      '28002',
      '28003',
      '28004',
      '28005',
      '28006',
      '28007',
      '28008',
    ],
    url: catalogStructureData[3].mainCategoryUrl, //__no indywidual productCard
  },
  /*
  cat_5: przedłużacze bębnowe
  subCat_1: schuko
  */
  //__5_1
  {
    models: ['30017', '30018', '30019'],
    url: cat5Sub1[0].path, //__no indywidual productCard; ends on subcategory
  },
  /*
  cat_5: przedłużacze bębnowe
  subCat_2: przemysłowe
  */
  //__5_2
  {
    models: [
      '30013',
      '30014',
      '30015',
      '30016',
      '30002',
      '30004',
      '30020',
      '30021',
      '30021F',
      '30021f',
    ],
    url: cat5Sub2[0].path, //__no indywidual productCard; ends on subcategory
  },
  /*
  cat_5: przedłużacze bębnowe
  subCat_3: metalowe
  */
  //__5_3
  {
    models: ['30050', '30051', '30052', '30053'],
    url: cat5Sub3[0].path, //__no indywidual productCard; ends on subcategory
  },
  /*
  cat_6: rozłącznik bezpieczeństwa
  subCat_1: no
  */
  //__6
  {
    models: [
      '25507',
      '25528',
      '25508',
      '25529',
      '25509',
      '25530',
      '25504',
      '25525',
      '25505',
      '25526',
      '25506',
      '25527',
      '25519',
      '25520',
      '25521',
      '25522',
      '25533',
      '25524',
      '25501',
      '25516',
      '25502',
      '25517',
      '25513',
      '25518',
      '25510',
      '25511',
      '25512',
      '25513',
      '25514',
      '25515',
    ],
    url: catalogStructureData[5].mainCategoryUrl, //__no indywidual productCard; ends on category
  },
  /*
  cat_7: ładowarki samochodowe
  subCat_1: no
  */
  //__7_no
  {
    models: [
      '96000',
      '96100',
      '96200',
      '96300',
      '96020',
      '96120',
      '96220',
      '96320',
      '97010',
      '97110',
      '97210',
      '97310',
      '97011',
      '97111',
      '97211',
      '97311',
      '97020',
      '97120',
      '97220',
      '97320',
      '97021',
      '97121',
      '97221',
      '97321',
    ],
    url: catalogStructureData[6].mainCategoryUrl, //__no indywidual productCard; ends on category
  },
  /*
  cat_8: obudowy i rozdzielnice
  subCat_1: obudowy puste
  */
  //__8_1_1
  {
    models: ['3927'],
    url: cat8Sub1[0].path, //__no indywidual productCard; ends on category
  },
  //__8_1_2
  {
    models: ['3950'],
    url: cat8Sub1[1].path, //__no indywidual productCard; ends on category
  },
  //__8_1_3
  {
    models: ['3951'],
    url: cat8Sub1[2].path, //__no indywidual productCard; ends on category
  },
  //__8_1_4
  {
    models: ['3974'],
    url: cat8Sub1[3].path, //__no indywidual productCard; ends on category
  },
  //__8_1_5
  {
    models: ['3952'],
    url: cat8Sub1[4].path, //__no indywidual productCard; ends on category
  },
  //__8_1_6
  {
    models: ['3977'],
    url: cat8Sub1[5].path, //__no indywidual productCard; ends on category
  },
  //__8_1_7
  {
    models: ['3957'],
    url: cat8Sub1[6].path, //__no indywidual productCard; ends on category
  },
  //__8_1_8
  {
    models: ['3958'],
    url: cat8Sub1[7].path, //__no indywidual productCard; ends on category
  },
  //__8_1_9
  {
    models: ['3959'],
    url: cat8Sub1[8].path, //__no indywidual productCard; ends on category
  },
  //__8_1_10
  {
    models: ['3928'],
    url: cat8Sub1[9].path, //__no indywidual productCard; ends on category
  },
  //__8_1_11
  {
    models: ['3960'],
    url: cat8Sub1[10].path, //__no indywidual productCard; ends on category
  },
  //__8_1_12
  {
    models: ['3975'],
    url: cat8Sub1[11].path, //__no indywidual productCard; ends on category
  },
  //__8_1_13
  {
    models: ['3961'],
    url: cat8Sub1[12].path, //__no indywidual productCard; ends on category
  },
  //__8_1_14
  {
    models: ['3962'],
    url: cat8Sub1[13].path, //__no indywidual productCard; ends on category
  },
  //__8_1_15
  {
    models: ['3978'],
    url: cat8Sub1[14].path, //__no indywidual productCard; ends on category
  },
  //__8_1_16
  {
    models: ['3963'],
    url: cat8Sub1[15].path, //__no indywidual productCard; ends on category
  },
  //__8_1_17
  {
    models: ['3966'],
    url: cat8Sub1[16].path, //__no indywidual productCard; ends on category
  },
  //__8_1_18
  {
    models: ['3967'],
    url: cat8Sub1[17].path, //__no indywidual productCard; ends on category
  },
  //__8_1_19
  {
    models: ['3968'],
    url: cat8Sub1[17].path, //__no indywidual productCard; ends on category
  },
  //__8_1_20
  {
    models: ['3969'],
    url: cat8Sub1[18].path, //__no indywidual productCard; ends on category
  },
  //__8_1_21
  {
    models: ['3970'],
    url: cat8Sub1[20].path, //__no indywidual productCard; ends on category
  },
  //__8_1_22
  {
    models: ['3979'],
    url: cat8Sub1[21].path, //__no indywidual productCard; ends on category
  },
  //__8_1_23
  {
    models: ['3973'],
    url: cat8Sub1[22].path, //__no indywidual productCard; ends on category
  },
  //__8_1_24
  {
    models: ['3964'],
    url: cat8Sub1[23].path, //__no indywidual productCard; ends on category
  },

  /*
  cat_8: obudowy i rozdzielnice
  subCat_2: rozdzielnice przemysłowe
  */
  //__8_2_1
  {
    models: ['6406', '3960/6406', '3960 / 6406'],
    url: cat8Sub2[0].path,
  },
  //__8_2_2
  {
    models: ['6504', '3961/6504', '3961 / 6504'],
    url: cat8Sub2[1].path,
  },
  //__8_2_3
  {
    models: ['6602', '3962/6602', '3962 / 6602'],
    url: cat8Sub2[2].path,
  },
  //__8_2_4
  {
    models: ['3957.1', '3957/3957.1', '3957 / 3957.1'],
    url: cat8Sub2[3].path,
  },
  //__8_2_5
  {
    models: ['3958.1', '3958/3958.1', '3958 / 3958.1'],
    url: cat8Sub2[4].path,
  },
  //__8_2_6
  {
    models: ['3959 /'],
    url: cat8Sub2[5].path,
  },
  //__8_2_7
  {
    models: ['6201', '3967/6201', '3967 / 6201'],
    url: cat8Sub2[6].path,
  },
  //__8_2_8
  {
    models: ['6301', '3968/6301', '3968 / 6301'],
    url: cat8Sub2[7].path,
  },
  //__8_2_9
  {
    models: ['6901', '3970/6901', '3970 / 6901'],
    url: cat8Sub2[8].path,
  },
  //__8_2_10
  {
    models: ['6051', '3968+3964/6051', '3968 + 3964 / 6051'],
    url: cat8Sub2[9].path,
  },
  //__8_2_11
  {
    models: ['6054', '3968+3964+3963/6054', '3968 + 3964 + 3963 / 6054'],
    url: cat8Sub2[10].path,
  },
  //__8_2_12
  {
    models: ['3980'],
    url: cat8Sub2[11].path,
  },
  //__8_2_13
  {
    models: ['3980P', '3980p'],
    url: cat8Sub2[12].path,
  },
  /*
  cat_8: obudowy i rozdzielnice
  subCat_3: gumowe
  */
  //__8_3_1
  {
    models: ['23310'],
    url: cat8Sub3[0].path,
  },
  //__8_3_1
  {
    models: ['23311'],
    url: cat8Sub3[1].path,
  },
  //__8_3_1
  {
    models: ['23312'],
    url: cat8Sub3[2].path,
  },
  /*
  cat_8: obudowy i rozdzielnice
  subCat_4: akcesoria
  */
  //__8_4_1
  {
    models: [
      '1833',
      '1834',
      '3900',
      '3901',
      '3902',
      '3903',
      '3905',
      '3907',
      '3909',
      '3910',
      '3911',
      '3915',
      '3916',
      '3917',
      '3918',
      '3919',
      '3923',
      '3981',
      '3982',
      '3982',
      '3984',
      '150039570',
      '150039980',
      '150039982',
      '150039983',
      'RG-12',
      'SPTA-12',
      'SPTC-4',
    ],
    url: cat8Sub4[3].subCategoryUrl,
  },
  /*
  cat_9: rozdzielnice moduyłowe
  subCat_1: ścienne IP65
  */
  //__9_1_1
  {
    models: ['39123'],
    url: cat9Sub1[0].path,
  },
  //__9_1_2
  {
    models: ['39123-T', '39123-t', '39123 - T', '39123 - t'],
    url: cat9Sub1[1].path,
  },
  //__9_1_3
  {
    models: ['39124'],
    url: cat9Sub1[2].path,
  },
  //__9_1_4
  {
    models: ['39124-T', '39124-t', '39124 - T', '39124 - t'],
    url: cat9Sub1[3].path,
  },
  //__9_1_5
  {
    models: ['39145'],
    url: cat9Sub1[4].path,
  },
  //__9_1_6
  {
    models: ['39145-T', '39145-t', '39145 - T', '39145 - t'],
    url: cat9Sub1[5].path,
  },
  //__9_1_7
  {
    models: ['39146'],
    url: cat9Sub1[6].path,
  },
  //__9_1_8
  {
    models: ['39146-T', '39146-t', '39146 - T', '39146 - t'],
    url: cat9Sub1[7].path,
  },
  //__9_1_9
  {
    models: ['39157'],
    url: cat9Sub1[8].path,
  },
  //__9_1_10
  {
    models: ['39157-T', '39157-t', '39157 - T', '39157 - t'],
    url: cat9Sub1[9].path,
  },
  //__9_1_11
  {
    models: ['39168'],
    url: cat9Sub1[10].path,
  },
  //__9_1_12
  {
    models: ['39168-T', '39168-t', '39168 - T', '39168 - t'],
    url: cat9Sub1[11].path,
  },
  //__9_1_13
  {
    models: ['39169'],
    url: cat9Sub1[12].path,
  },
  /*
  cat_9: rozdzielnice moduyłowe
  subCat_2: modułowe
  */
  //__9_2_1
  {
    models: ['3902-T'],
    url: cat9Sub2[0].path,
  },
  //__9_2_2
  {
    models: ['3904'],
    url: cat9Sub2[1].path,
  },
  //__9_2_3
  {
    models: ['3904-T', '3904-t', '3904 - T', '3904 - t'],
    url: cat9Sub2[2].path,
  },
  //__9_2_4
  {
    models: ['3908'],
    url: cat9Sub2[3].path,
  },
  //__9_2_5
  {
    models: ['3908-T', '3908-t', '3908 - T', '3908 - t'],
    url: cat9Sub2[4].path,
  },
  //__9_2_6
  {
    models: ['3912'],
    url: cat9Sub1[5].path,
  },
  //__9_2_7
  {
    models: ['3912-T', '3912-t', '3912 - T', '3912 - t'],
    url: cat9Sub1[6].path,
  },
  //__9_2_8
  {
    models: ['3926'],
    url: cat9Sub1[7].path,
  },
  //__9_2_9
  {
    models: ['3926-T', '3926-t', '3926 - T', '3926 - t'],
    url: cat9Sub2[8].path,
  },
  //__9_2_10
  {
    models: ['3942'],
    url: cat9Sub2[9].path,
  },
  //__9_2_11
  {
    models: ['3942-T', '3942-t', '3942 - T', '3942 - t'],
    url: cat9Sub2[10].path,
  },
  //__9_2_12
  {
    models: ['39018'],
    url: cat9Sub2[11].path,
  },
  //__9_2_13
  {
    models: ['39036'],
    url: cat9Sub2[12].path,
  },
  //__9_2_14
  {
    models: ['39054'],
    url: cat9Sub2[13].path,
  },
  //__9_2_15
  {
    models: ['39072'],
    url: cat9Sub2[14].path,
  },

  /*
  cat_9: rozdzielnice moduyłowe
  subCat_3: modułowe Nuova
  */
  //__9_3_no...
  {
    models: [
      '3504',
      '3704',
      '3508',
      '3708',
      '3512',
      '3712',
      '3518',
      '3718',
      '3524',
      '3724',
      '3536',
      '3736',
      '3604',
      '3804',
      '3608',
      '3808',
      '3612',
      '3812',
      '3618',
      '3818',
      '3624',
      '3824',
      '3536',
      '3736',
      '3604',
      '3804',
      '3608',
      '3808',
      '3612',
      '3812',
      '3618',
      '3818',
      '3624',
      '3824',
      '3636',
      '3836',
      '3744',
      '3548',
      '3748',
      '3562',
      '3762',
      '3568',
      '3768',
      '3644',
      '3844',
      '3648',
      '3848',
      '3662',
      '3862',
      '3668',
      '3868',
    ],
    url: cat9Sub[2].subCategoryUrl,
  },
  /*
  cat_9: rozdzielnice moduyłowe
  subCat_4: modułowe Nuova+ IP40
  */
  //__9_4_no...
  {
    models: [
      '3519',
      '3719',
      '3537',
      '3737',
      '3554',
      '3754',
      '3572',
      '3772',
      '3637',
      '3837',
      '3654',
      '3854',
      '3672',
      '3872',
    ],
    url: cat9Sub[3].subCategoryUrl,
  },
  /*
  cat_9: rozdzielnice moduyłowe
  subCat_5: modułowe Vita IP40
  */
  //__9_5_no...
  {
    models: [
      '3340',
      '3363',
      '3308-P',
      '3308-PT',
      '3312-P',
      '3312-PT',
      '3320-P',
      '3320-PT',
      '3420-P',
      '3420-PT',
      '3324-P',
      '3324-PT',
      '3344-P',
      '3344-PT',
      '3444-P',
      '3444-PT',
      '3314-P',
      '3314-PT',
      '3318-P',
      '3318-PT',
      '3338-P',
      '3338-PT',
      '3360-P',
      '3360-PT',
      '3340-F',
      '3363-F',
      '3308-FT',
      '3312-F',
      '3312-FT',
      '3320-F',
      '3320-FT',
      '3324-F',
      '3324-FT',
      '3344-F',
      '3344-FT',
      '3314-F',
      '3314-FT',
      '3318-F',
      '3318-FT',
      '3338-F',
      '3338-FT',
      '3360-F',
      '3360-FT',
      '3452',
      '3454',
      '3404',
      '3403',
      '3411',
      '3401',
      '3421',
      '3413',
    ],
    url: cat9Sub[4].subCategoryUrl,
  },
  /*
  cat_9: rozdzielnice modułowe
  subCat_6: ścienne ICP
  */
  //__9_6_no...
  //__9_6_no...
  {
    models: ['3452', '3454', '3404', '3403', '3411', '3401', '3421', '3413'],
    url: cat9Sub[5].subCategoryUrl,
  },

  /*
  cat_9: rozdzielnice modułowe
  subCat_7: modułowe metalowe
  */
  //__9_7_no...
  {
    models: ['3114', '3128', '3142', '3156'],
    url: cat9Sub[6].subCategoryUrl,
  },
  /*
  cat_9: rozdzielnice modułowe
  subCat_8: modułowe metalowe ICT
  */
  //__9_8_no...
  {
    models: [
      '3231-E',
      '3232-E',
      '3234-E',
      '3235',
      '3241',
      '3242',
      '3244',
      '3239-E',
      '3239-S',
    ],
    url: cat9Sub[7].subCategoryUrl,
  },
  /*
  cat_9: rozdzielnice modułowe
  subCat_9: akcesoria
  */
  //__9_9_no...
  {
    models: [
      'RG-04',
      'RG-12',
      'SPTA-12',
      'SPTB-12',
      'SPTC-4',
      'SPTD-12',
      'SPTD-18',
      'SPT18/36',
    ],
    url: cat9Sub[8].subCategoryUrl,
  },
];

export { allProductsForBrowser };
