/**Hook Staff**/
import useMeasure from 'react-use-measure';
/**FramerMotin Staff*/
import { motion } from 'framer-motion';
/*
is used: as "initial / reload" animation; only to revel content when page is mounted or refreshed; 
*/
/**------------------------------------**/
const OverlayWithGradient: React.FC<{
  transition?: {};
  initial?: {};
  animate?: {};
  divStyle?: string;
}> = ({ initial, animate, transition, divStyle }) => {
  /**Hook Section**/
  const [ref, bounds] = useMeasure();

  /**JSX**/
  return (
    <div
      role="prezentacja"
      ref={ref}
      data-layout="Overlay__for-initial-animation "
      className="absolute block h-full w-full pointer-events-none overflow-hidden"
    >
      <motion.div
        style={{ width: bounds.width && bounds.width * 2 }}
        initial={initial ? initial : { x: '-50%' }}
        animate={animate ? animate : { x: '50%' }}
        transition={transition ? transition : { duration: 2.0, delay: 0.9 }}
        className={
          divStyle
            ? divStyle
            : 'h-full bg-gradient-to-r from-transparent via-dark to-dark'
        }
      />
    </div>
  );
};

export default OverlayWithGradient;
