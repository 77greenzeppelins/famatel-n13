import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

/**TS**/
interface Props {
  label: string;
  url: string;
}

interface State {
  isHovered: boolean;
}

/**---------------------------------------------------------------------**/
const HeaderLink: React.FC<Props> = ({ label, url }) => {
  /*
  useRouter Section
  why: for style sake;  I want link to be in corpo color and has no border-bottom when user is on its corresponding page
  */
  const router = useRouter();
  const isActive = router.asPath === url;

  /**JSX*/
  return (
    <>
      <li
        data-component="NavLink_container"
        className="relative ml-6 fc hidden lg:block"
      >
        <Link
          href={url}
          aria-label={`Link do strony ${label}`}
          aria-current={isActive ? 'page' : undefined}
          scroll={false}
          // className="relative fc gap-1 w-full h-full cursor-pointer bg-transparent select-none touch-none  group"
          className={`relative text-dark font-bold header-link-label disable h-[40px] fc  ${
            isActive ? 'hover:text-dark' : 'hover:text-corpo'
          }  delay-100 duration-300 ease-linear`}
        >
          {/* <span
            className={`header-link-label ${
              linkStyleisHovered ? 'text-corpo' : 'text-grey'
            }`}
          >
            <span>{label}</span>
          </span>
          <span
            className={`h-[1px] inline-block w-0 bg-grey absolute left-0 -bottom-[2px] group-hover:w-full transition-[width] ease-in duration-300 delay-400 ${
              linkStyleisHovered ? 'opacity-0' : 'opacity-1'
            }`}
          >
            &nbsp;
          </span> */}
          {isActive && (
            <motion.span
              className="absolute bottom-[8px] block h-[1px] bg-corpo origin-center "
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          )}

          {label}
        </Link>
      </li>
    </>
  );
};

export default HeaderLink;
