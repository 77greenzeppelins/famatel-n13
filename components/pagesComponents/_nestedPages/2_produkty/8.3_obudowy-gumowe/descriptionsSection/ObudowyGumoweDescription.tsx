import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';

/**----------------------------------------**/
const ObudowyGumoweDescription: React.FunctionComponent<{
  description: string[];
}> = ({ description }) => {
  /**JSX**/
  return (
    <div className="flex flex-col gap-y-4">
      <SmallPseudoHeader
        text="Opis"
        hasVerticalOrnament={false}
        hasBox={true}
      />
      {description.map((desc, index) => (
        <div key={index}>
          <p className="p-small text-grey text-justify hover:text-light ease-in duration-300  ">
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ObudowyGumoweDescription;
