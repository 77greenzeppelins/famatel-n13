import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/**TS**/
type BasicLinkProps<T> = {
  href: string;
  ariaLabel?: string;
  as?: string;
  // prefetch?: boolean;
  children: ReactNode | ((props: T) => JSX.Element);
} & T;

function BasicLink<T>(props: BasicLinkProps<T>) {
  const { href, as, children, ...rest } = props;
  const ChildComponent = children as (props: T) => JSX.Element;
  return (
    <Link href={href} as={as}>
      <ChildComponent {...(rest as any)} />
    </Link>
  );
}

// const BasicLink = <T,>({
//   href,
//   ariaLabel,
//   as,
//   // prefetch,
//   children,
//   ...rest
// }: BasicLinkProps<T>) => {
//   // const { href, as, prefetch, children, ...rest } = props;
//   const ChildComponent = children as (props: T) => JSX.Element;
//   return (
//     <Link
//       href={href}
//       aria-label={ariaLabel ? ariaLabel : 'link'}
//       // as={as}
//       // prefetch={prefetch}
//     >
//       <ChildComponent {...(rest as any)} />
//     </Link>
//   );
// };

export default BasicLink;

// const [currentPath, setCurrentPath] = useState('');
// useEffect(() => {
//   setCurrentPath(router.asPath);
// }, [router.asPath]);

// function BasicLink<T>(props: BasicLinkProps<T>) {
//   const { href, as, prefetch, children, ...rest } = props;
//   const ChildComponent = children as (props: T) => JSX.Element;
//   return (
//     <Link href={href} as={as} prefetch={prefetch}>
//       <ChildComponent {...(rest as any)} />
//     </Link>
//   );
// }
