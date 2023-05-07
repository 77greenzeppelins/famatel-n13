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
  const linkStyleisHovered = router.pathname === url;
  const isActive = router.asPath === url;

  /**JSX*/
  return (
    <>
      <li data-component="NavLink_container" className="relative ml-6 fc">
        <div className="hidden lg:block">
          <Link
            href={url}
            aria-label={`Link do strony ${label}`}
            aria-current={isActive ? 'page' : undefined}
            scroll={false}
            className="relative fc gap-1 w-full h-full cursor-pointer bg-transparent select-none touch-none  group"
          >
            <span
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
            </span>
          </Link>
        </div>
      </li>
    </>
  );
};

export default HeaderLink;
