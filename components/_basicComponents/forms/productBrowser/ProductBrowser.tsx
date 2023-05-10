import React, { useEffect, useState } from 'react';
/**Components**/
// import FadingFrame from '../../../multipagesComponents/lines/fadingFrame/FadingFrame';
import ErrorDisplayer from './errorDisplayer/ErrorDisplayer';
import ResponseDisplayer from './responseDisplayer/ResponseDisplayer';
/**Formik Staff**/
import { Formik, FormikHelpers } from 'formik';
/**Validation Staff**/
import * as Yup from 'yup';
/**Utils*/
import { findUrlByModel, findDeclarationByModel } from './productBrowserUtils';
/**BasicData**/
import { story } from '../../../../data/_data';
import { allProductsForBrowser } from './productBrowser_data';
import { allDeclarations } from '../../../pagesComponents/doPobrania/sectionDeclarations/declarations/declarationList_data';

/**HardCoded Staff**/
const numMinLength = 4;
const numMaxLength = 11;
const inputMaxLength = 12;

/**TS**/
interface MyFormValues {
  model: string;
}

/**-------------------------------**/
const ProductBrowser = () => {
  /**State**/
  const [wantedModel, setWantedModel] = useState<string | null>('');
  const [wantedModelDeclaration, setWantedModelDeclaration] = useState<
    string | null
  >('');

  /**Formik Section**/
  const initialValues: MyFormValues = { model: '' };
  /**Validation Section**/
  const validationSchema = Yup.object({
    model: Yup.string()
      // .matches(/^(1|2|3|9|6|RG|SPT)[cfgpst/]\w*/i, {
      //   message: story.productBrowser.valMatch,
      // })
      // .matches(/^(1|2|3|6|9|RG|SPT)[cfgpst/0-9]*$/i, {
      //   message: story.productBrowser.valMatch,
      // })
      .min(numMinLength, story.productBrowser.valMin)
      .max(numMaxLength, story.productBrowser.valMax)
      .required(story.productBrowser.valRequired),
    // .matches(/^(1|2|3|6|9|RG|SPT)[cfgpst/0-9]*$/i, {
    //   message: story.productBrowser.valMatch,
    // }),
  });

  const handleSubmit = (
    values: MyFormValues,
    actions: FormikHelpers<MyFormValues>
  ) => {
    //___external function to find model specified by user and display link to its page;
    findUrlByModel(values.model, allProductsForBrowser, setWantedModel);
    findDeclarationByModel(
      values.model,
      allDeclarations,
      setWantedModelDeclaration
    );
    //___external function that checks if model has card and displays link to its PDF resource;
    //___external function that checks if model has declaration and display link to its PDF resource;
    //___
    actions.setSubmitting(false);
  };

  /**...**/
  useEffect(() => {
    console.log('ProductBrowser / wantedModel:', wantedModel);
    console.log("ProductBrowser / wantedModel === '' :", wantedModel === '');
    console.log(
      'ProductBrowser / wantedModel === null :',
      wantedModel === null
    );
  }, [wantedModel]);
  console.log('ProductBrowser / wantedModel:', wantedModel);
  /**JSX**/
  return (
    <div className="w-full h-full pt-10 sm:pt-20 inner-px-md-xl-xxl bg-gradient-to-b from-dark via-dark to-transparent">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          submitCount,
          // isSubmitting,
        }) => (
          <div
            data-layout="AllSectionContainer"
            className="flex flex-col w-full h-full gap-y-10 "
          >
            {/*
            --------------------------------------request section
            */}

            <form
              onSubmit={handleSubmit}
              data-layou="pseudoHeader"
              className="flex flex-col gap-y-6 items-center w-full sm:gap-y-0 sm:gap-x-10 sm:flex-row "
            >
              <label
                htmlFor="model"
                className="flex justify-center w-full sm:w-[300px] md:w-[400px] lg:w-[500px] sm:justify-start"
              >
                <p className="p-medium text-grey">
                  {story.productBrowser.header1}
                </p>
              </label>
              <div className="flex flex-col min-w-[200px]">
                <div className="flex items-center gap-10 h-[50px] w-full">
                  <input
                    type="text"
                    id="model"
                    name="model"
                    placeholder={story.productBrowser.placeholder}
                    className={`block w-full py-2 pl-2 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-grey placeholder:p-small border-slate-300 focus:outline-none focus:border-corpo focus:ring-corpo focus:ring-1 p-small md:p-regular ${
                      errors.model ? 'text-corpo' : 'text-grey'
                    } `}
                    value={values.model}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={inputMaxLength}
                    autoComplete="off"
                  ></input>
                  <button
                    type="submit"
                    className={`px-2 py-1 text-left border rounded-md fc  p-small ${
                      errors.model
                        ? 'text-grey border-grey pointer-events-none'
                        : 'text-light border-light pointer-events-auto'
                    }`}
                  >
                    {story.productBrowser.button}
                  </button>
                </div>
              </div>
            </form>

            {/*
            --------------------------------------error section
            */}
            <div className="flex flex-col items-center w-full h-[32px] gap-x-10 sm:flex-row overflow-hidden">
              <div className="flex justify-center w-full sm:w-[300px] md:w-[400px] lg:w-[500px] sm:justify-start" />
              <ErrorDisplayer
                mountingCondition={errors.model && touched.model}
                errorText={errors.model}
                submitCount={submitCount}
              />
            </div>
            {/*
            --------------------------------------response section
            */}
            <div className="min-h-[100px]">
              <ResponseDisplayer
                wantedModel={wantedModel} //__ null or url
                submitCount={submitCount}
                wantedModelDeclaration={wantedModelDeclaration} //__ null or url
              />
            </div>
          </div>
        )}
      </Formik>
      {/* <FadingFrame /> */}
    </div>
  );
};

export default ProductBrowser;
