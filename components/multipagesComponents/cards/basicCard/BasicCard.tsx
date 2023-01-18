import Link from 'next/link';
/*Components*/
import CardFrame from '../cardFrame/CardFrame';
import CounterSection from './counterSection/CounterSection';
import BasicCardMainSection from './mainSection/BasicCardMainSection';
/**TS**/
import { IF_Card } from '../../../../utils/TS/typeScriptStaff';

/*****************************************************************************/
const BasicCard: React.FunctionComponent<IF_Card> = ({
  arrayIndex,
  label,
  url,
  imageData,
  heightMattersCondition,
}) => {
  /**JSX**/
  return (
    <div
      id="BasicCard__container"
      className="w-full h-full cursor-pointer group"
    >
      <Link href={url} scroll={false}>
        {/* <div className="relative w-full h-full"> */}
        <CardFrame>
          <div className="w-[18%] h-[80%]">
            <CounterSection arrayIndex={arrayIndex} />
          </div>

          <div className="w-[82%] h-full">
            <BasicCardMainSection
              label={label}
              imageData={imageData}
              heightMattersCondition={heightMattersCondition}
            />
          </div>
        </CardFrame>
        {/* </div> */}
      </Link>
    </div>
  );
};

export default BasicCard;
