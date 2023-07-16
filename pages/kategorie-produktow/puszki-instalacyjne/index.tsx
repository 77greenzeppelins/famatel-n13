import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
/**Components*/
import CategoryPageTemplate from '../../../components/multipagesComponents/_categoryPageTemplate/CategoryPageTemplate';
/**BasicData*/
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
        <title>Puszki instalacyjne | Famatel Polska</title>
        <meta
          property="og:title"
          content="Puszki instalacyjne &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą puszek instalacyjnych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą puszek instalacyjnych marki Famatel."
        ></meta>
      </Head>
      <div className="fc flex-col w-full bg-dark">
        <CategoryPageTemplate
          mainCategoryIndex={catalogStructureData[9].mainCategoryIndex}
        />
      </div>
    </>
  );
};

export default KategorieProduktowPage;
