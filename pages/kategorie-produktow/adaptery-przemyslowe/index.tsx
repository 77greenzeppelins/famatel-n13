import Head from 'next/head';
import { NextPage } from 'next/types';
import { ReactElement, useEffect } from 'react';
/**Components*/
import Layout from '../../../components/layouts/rootLayout/Layout';
import CategoryPageTemplate from '../../../components/multipagesComponents/_categoryPageTemplate/CategoryPageTemplate';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';

const AdapteryPrzemyslowePage: NextPage = () => {
  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <Head>
        <title>Adaptery przemysłowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Adaptery przemysłowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą adapterów przemysłowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą adapterów przemysłowych marki Famatel."
        ></meta>
      </Head>
      <div className="flex-col w-full fc bg-dark">
        <CategoryPageTemplate
          mainCategoryIndex={catalogStructureData[2].mainCategoryIndex}
        />
      </div>
    </>
  );
};

export default AdapteryPrzemyslowePage;
