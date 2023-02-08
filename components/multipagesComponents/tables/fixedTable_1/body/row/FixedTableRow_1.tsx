import React from 'react';

const FixedTableRow_1: React.FunctionComponent<{
  cellData: string | string[];
}> = ({ cellData }) => {
  return typeof cellData === 'string' ? (
    <div className="relative fc w-full bg-greyTint1 group-hover:bg-light delay-100 ease-in duration-300">
      {/* <div className="absolute bg-greyTint1 group-hover:bg-light delay-100 duration-300" /> */}
      <p className="relative p-small text-center  text-dark">{cellData}</p>
    </div>
  ) : (
    <div
      className="flex flex-col "
      //___divide-y-[2px] divide-shade
    >
      {cellData.map((label, i) => (
        <div
          key={i}
          className="fc w-full h-full bg-greyTint1 group-hover:bg-light delay-100 ease-in duration-300 p-[2px]"
        >
          {' '}
          <p className="relative p-small text-center text-dark">{label}</p>
        </div>
      ))}
    </div>
  );

  // return (
  //   <div className={`${mainGridStyle} group`}>
  //     {typeof cellData === 'string' ? (
  //       <div className="relative fc w-full bg-greyTint1 group-hover:bg-light delay-100 ease-in duration-300">
  //         {/* <div className="absolute bg-greyTint1 group-hover:bg-light delay-100 duration-300" /> */}
  //         <p className="relative p-small text-center  text-dark">{cellData}</p>
  //       </div>
  //     ) : (
  //       <div
  //         className="flex flex-col "
  //         //___divide-y-[2px] divide-shade
  //       >
  //         {cellData.map((label, i) => (
  //           <div
  //             key={i}
  //             className="fc w-full h-full bg-greyTint1 group-hover:bg-light delay-100 ease-in duration-300 p-[2px]"
  //           >
  //             {' '}
  //             <p className="relative p-small text-center text-dark">{label}</p>
  //           </div>
  //         ))}
  //       </div>
  //     )}
  //   </div>
  // );
};

export default FixedTableRow_1;
