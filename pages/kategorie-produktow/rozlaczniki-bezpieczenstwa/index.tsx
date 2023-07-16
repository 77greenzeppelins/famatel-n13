import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
/**Components**/
import RozlacznikiBezpieczenstwaContent from '../../../components/pagesComponents/_nestedPages/0_kategorie/6_rozlacznikiBezpieczenstwa/RozlacznikiBezpieczenstwaCatContent';
/**BasicData**/
import { catalogStructureData } from '../../../data/_catalogStructure_data';

/**----------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  /**JSX**/
  return (
    <>
      <Head>
        <title>Rozłączniki bezpieczeństwa | Famatel Polska</title>
        <meta
          property="og:title"
          content="Rozłączniki bezpieczeństwa &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą rozłączników bezpieczeństwa marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą rozłączników bezpieczeństwa marki Famatel."
        ></meta>
      </Head>
      <div className="flex flex-col w-full bg-dark">
        <RozlacznikiBezpieczenstwaContent
          uniqueKey={0}
          categoryName={catalogStructureData[5].mainCategoryName}
        />
      </div>
    </>
  );
};

export default KategorieProduktowPage;
