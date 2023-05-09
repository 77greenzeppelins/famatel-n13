import React, { useState } from 'react';
/**Components**/
import FadingFrame from '../../../multipagesComponents/lines/fadingFrame/FadingFrame';
import ProductPageDisplayer from './productPage/ProductPageDisplayer';
import ErrorDisplayer from './errorDisplayer/ErrorDisplayer';
/**Formik Staff**/
import { Formik, FormikHelpers } from 'formik';
/**Validation Staff**/
import * as Yup from 'yup';
/**Utils*/
import { findUrlByModel } from './productBrowserUtils';
/**BasicData**/
import { story } from '../../../../data/_data';
import { allProductsForBrowser } from './productBrowser_data';

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
  /**Formik Section**/
  const initialValues: MyFormValues = { model: '' };
  /**Validation Section**/
  const validationSchema = Yup.object({
    model: Yup.string()
      .matches(/^(1|2|3|9|6|RG|SPT)[cfgpst/]\w*/i, {
        message: story.productBrowser.valMatch,
      })
      .min(numMinLength, story.productBrowser.valMin)
      .max(numMaxLength, story.productBrowser.valMax)
      .required(story.productBrowser.valRequired),
  });

  const handleSubmit = (
    values: MyFormValues,
    actions: FormikHelpers<MyFormValues>
  ) => {
    // alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    console.log('values:', values);
    console.log('actions:', actions);
    //___external function to find model specified by user and display link to its page;
    findUrlByModel(values.model, allProductsForBrowser, setWantedModel);
    //___external function that checks if model has card and displays link to its PDF resource;
    //___external function that checks if model has declaration and display link to its PDF resource;
    //___
    // setIsSubmitted(true);
    // actions.resetForm();
  };
  // console.log('ProductBrowser / wantedModel:', wantedModel);
  /**JSX**/
  return (
    <div className="flex flex-col items-center w-full h-full gap-10 pt-10 sm:pt-20 inner-px-md-xl-xxl bg-gradient-to-b from-dark via-dark to-transparent ">
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
            className="flex flex-col w-full h-full "
          >
            {/*
            --------------------------------------request section
            */}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center w-full gap-x-10 sm:flex-row "
              // className="relative z-10 w-full px-6"
            >
              <label
                htmlFor="model"
                className="flex justify-center w-full sm:w-[500px] sm:justify-start"
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
                    className="px-2 py-1 text-left border rounded-md fc border-grey p-small text-grey"
                  >
                    {story.productBrowser.button}
                  </button>
                </div>
              </div>
            </form>

            {/*
            --------------------------------------error section
            */}
            <div className="flex justify-center sm:justify-start min-h-[32px] overflow-hidden ">
              <ErrorDisplayer
                mountingCondition={errors.model && touched.model}
                errorText={errors.model}
              />
            </div>
            {/*
            --------------------------------------response section
            */}
            <div>
              <ProductPageDisplayer
                wantedModel={wantedModel}
                visibilityCondition={errors.model}
                submitCount={submitCount}
              />
            </div>
          </div>
        )}
      </Formik>
      <FadingFrame />
    </div>
  );
};

export default ProductBrowser;
