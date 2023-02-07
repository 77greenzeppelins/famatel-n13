const reateBackgroundStyle = ({
  glitchType,
  arrayIndex,
}: {
  glitchType: number;
  arrayIndex: number;
}) => {
  switch (glitchType) {
    //___niskie napięcia table; last column in other / dark color
    case 1:
    //   return (
    //     <div
    //       key={arrayIndex}
    //       className="relative col-start-3 col-end-5 fc flex-col border-x-[1px] border-dark gap-y-[2px]"
    //     >
    //       <div className="fc row-start-1 row-end-2 w-full bg-greyShade1 py-2">
    //         <p className="p-small text-center pointer-events-none text-light">
    //           {label[0]}
    //         </p>
    //       </div>
    //       <div className="flex row-start-2 row-end-3 w-full gap-x-[2px]">
    //         <div className="fc w-full bg-greyShade1 py-2">
    //           <p className="p-small text-center pointer-events-none text-light">
    //             {label[1]}
    //           </p>
    //         </div>
    //         <div className="fc w-full bg-greyShade1 py-2">
    //           <p className="p-small text-center pointer-events-none text-light">
    //             {label[2]}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   );

    default:
      console.log('createBackgroundStyle.......');
  }
};
export { reateBackgroundStyle };
