import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import useMeasure from 'react-use-measure';
/**Containers**/
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
/**Hardcoded Data*/
const address = ['Biuro/Magazyn', 'Ul. Willowa 5', '58-260 Bielawa'];
const staggerFactors = [1.4, 1.6, 1.8];
const labelStyle =
  'text-grey text-[1rem] lg:text-2xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 group-hover:text-light  ease-in duration-300  origin-center break-all';

/**----------------------------------**/
const ContactAddress: React.FunctionComponent<{
  animationDelay?: number;
  outherContainerStyle?: string;
  innerContainerStyle?: string;
  measuredElementStyle?: string;
}> = ({
  animationDelay = 0,
  outherContainerStyle,
  innerContainerStyle,
  measuredElementStyle,
}) => {
  const [ref, bounds] = useMeasure();
  const elementInView = useRef(null);
  // const isInView = useInView(elementInView, {
  //   margin: `-${bounds.height * 0.4}px 0px -${bounds.height * 0.9}px 0px`,
  //   // once: true, // amount: 'all', // amount: 1,
  // });
  // console.log('InViewContainer / isInView', isInView);
  // console.log('InViewContainer / topFactor', topFactor);
  const isInView = useInView(elementInView, { once: true, amount: 0.5 });
  /**JSX**/
  return (
    <div className="relative flex flex-col gap-y-4">
      <div className="w-full">
        {/*
        _________________________________________________header_Section
        */}
        <div
        //  animationDelay={animationDelay}
        >
          <p className="text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025">
            Adres
          </p>
        </div>
        <motion.div
          className="w-full h-[0.75px] bg-gradient-to-r from-light via-grey to-transparent"
          // className="w-full h-[1px] border-b-[0.5px] border-grey"
          // initial={{ y: '110%', opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.6, delay: animationDelay }}
        />
      </div>
      {/*
      _________________________________________________kontact_Section
      */}
      <div className="pt-2">
        <ul className="flex flex-col gap-10  group">
          {address.map((label, index) => (
            <div key={index}>
              <li>
                <p className={labelStyle}>{label}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <OverlayWithGradient
        initial={{ x: '-50%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, delay: 0.6 }}
      />
    </div>

    // <div
    //   data-layout="OutherContainer"
    //   ref={elementInView}
    //   className={
    //     outherContainerStyle ? outherContainerStyle : 'w-full h-full bg-dark'
    //   }
    // >
    //   <div
    //     data-layout="InnerContainer"
    //     className={innerContainerStyle ? innerContainerStyle : 'w-full h-full'}
    //   >
    //     <div
    //       ref={ref}
    //       data-layout="MeasuredElementContainer"
    //       className={
    //         measuredElementStyle ? measuredElementStyle : 'w-full h-full'
    //       }
    //     >
    //       <div className="flex flex-col gap-y-10  pt-2">
    //         <div className="w-full overflow-hidden">
    //           <ScaledYTextWrapper
    //             delayVal={animationDelay && animationDelay * 1}
    //             isInView={isInView}
    //           >
    //             <p className="text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025">

    //               Adres
    //             </p>
    //           </ScaledYTextWrapper>

    //           <motion.div
    //             className={`w-full h-[1px] border-b-[0.5px] border-grey`}
    //             style={{
    //               transform: isInView ? 'none' : 'translateX(-200px)',
    //               opacity: isInView ? 1 : 0,
    //               transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
    //             }}

    //           />
    //         </div>
    //         <div className="flex flex-col gap-y-4  items-start  md:flex-row md:items-center md:gap-x-20 pt-2">
    //           <ul className="flex flex-col gap-4  group">
    //             {address.map((label, index) => (
    //               <ScaledYTextWrapper
    //                 key={index}
    //                 delayVal={
    //                   animationDelay && animationDelay * staggerFactors[index]
    //                 }
    //                 isInView={isInView}
    //               >
    //                 <li>
    //                   <p className={labelStyle}>{label}</p>
    //                 </li>
    //               </ScaledYTextWrapper>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );

  /**JSX**/
  // return (
  //   <InViewContainer
  //     // topFactor={0.9}
  //     // bottomFactor={0.9}
  //     animationDelay={animationDelay}
  //     // outherContainerStyle="w-full"
  //     // innerContainerStyle="w-full"
  //   >
  //     <AddressContent />
  //   </InViewContainer>
  // );
};

export default ContactAddress;

{
  /* <div className="w-full h-[100vh] p-1 ">
        <div className="fc w-full h-full border-2 border-greyTint2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.1226646024706!2d16.600824306419636!3d50.680548067870525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e3715598e761f%3A0x10519edde159a1b6!2sFamatel%20Polska%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1669975901879!5m2!1spl!2spl"
            width="100%"
            height="100%"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="h-[20px]" /> */
}

{
  /* <div className="flex flex-col gap-y-4">
          <motion.div
            className="fc text-corpo"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
            }}
          >
            <MapPinIcon className="h-6 w-6" />
          </motion.div>
          <div className="fc flex-col">
            <p className={labelStyle}> Dojazd od ulicy</p>
            <p className={labelStyle}> Lotniczej</p>
          </div>
        </div> */
}
