import Link from 'next/link';
// import { useState } from 'react';
/*Components*/
import SquareImageHolder from '../../imageHolder/SquareImageHolder';
/*FramerMotion Staff*/
import { motion } from 'framer-motion';
/*TS*/
import { IMainCategoriesItem } from '../../../../data/_data_TS';

interface ICardOfDropDownMenu {
  categoryCardData: IMainCategoriesItem;
}
/*****************************************************************************/
const CategoryCard = ({ categoryCardData }: ICardOfDropDownMenu) => {
  /*Local State*/
  // const [linkState, setLinkState] = useState(true);
  /*
  JSX
  */
  return (
    <motion.div
      id="CardOfDropDownMenu__container"
      className="w-full h-full p-2 lg:p-3"
      //place-self-stretch
    >
      <Link href={categoryCardData.url} scroll={false}>
        <div
          className="relative w-full h-full cursor-pointer group"
          //   style={{ width, height }}
        >
          <div
            //id='blured-background-for-IconPseudoButton /
            className="absolute t-0 l-0 h-full w-full bg-[#111110] hover:bg-black blur-[4px] group-hover:blur-[10px] ease-in duration-300 "
          />
          <div className="relative fc w-full h-full rounded-md pointer-events-none bg-dark">
            {/*-----categoryCounter Section-----*/}
            <div className=" flex items-end  w-[18%] h-[80%]  ">
              <div className="fc border-r border-light w-full h-full  p-[0.25rem] opacity-70 group-hover:opacity-100 ease-in duration-300">
                <p className="text-light text-center text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal ">
                  {categoryCardData.arrayIndex + 1 < 10
                    ? `0${categoryCardData.arrayIndex + 1}`
                    : `${categoryCardData.arrayIndex + 1}`}
                </p>
              </div>
            </div>
            {/*-----imageAndLabel Section-----*/}
            <div className=" fc flex-col w-[82%] h-full">
              <div
                //___id='ImageSection__container'
                className="flex justify-center items-end relative h-[55%] w-full"
              >
                {/* <div className="fc absolute h-[80%] w-[80%] z-[9] rounded-lg overflow-hidden" /> */}
                <div
                  className="fc relative h-[80%] w-[80%] z-[10] "
                  //rounded-md overflow-hidden
                >
                  <SquareImageHolder
                    imageData={categoryCardData.image}
                    hasOverlay={false}
                    itemsNumber={0}
                    columns={0}
                    delayPerPixel={0}
                  />
                </div>{' '}
              </div>
              <div
                //___id='TextSection__container'
                className="fc h-[45%] w-full p-1"
              >
                <p className="text-light text-center opacity-70 group-hover:opacity-100 ease-in duration-300 text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal xxl:font-thin ">
                  {categoryCardData.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
