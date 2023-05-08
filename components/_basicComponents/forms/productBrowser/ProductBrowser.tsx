import React, { useState } from 'react';
/**Components**/
import FadingFrame from '../../../multipagesComponents/lines/fadingFrame/FadingFrame';
import ProductPageDisplayer from './productPage/ProductPageDisplayer';
/**Formik Staff**/
import { Formik, FormikHelpers } from 'formik';
/**Validation Staff**/
import * as Yup from 'yup';
/**Utils*/
import { findUrlByModel } from './productBrowserUtils';
/**BasicData**/
import { story } from '../../../../data/_data';
import { testStaticData } from './productBrowser_data';

/**HardCoded Staff**/
const numMinLength = 4;
const numMaxLength = 15;

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
    findUrlByModel(values.model, testStaticData, setWantedModel);
    //___external function that checks if model has card and displays link to its PDF resource;
    //___external function that checks if model has declaration and display link to its PDF resource;
    //___
    // setIsSubmitted(true);
    // actions.resetForm();
  };
  /**JSX**/
  return (
    <div className="flex flex-col gap-10 items-center w-full h-full pt-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        // onSubmit={(values, actions) => {
        //   // alert(JSON.stringify(values, null, 2));
        //   actions.setSubmitting(false);
        //   console.log('values:', values);
        //   console.log('actions:', actions);
        //   //___external function to find model specified by user and display link to its page;
        //   findUrlByModel(values.model, testStaticData, setWantedModel);
        //   //___external function that checks if model has card and displays link to its PDF resource;
        //   //___external function that checks if model has declaration and display link to its PDF resource;
        //   //___
        // }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          // isSubmitting,
        }) => (
          <>
            <div className="relative fc h-[140px] w-[90%] xs4xx:w-[380px] ">
              <form
                onSubmit={handleSubmit}
                className="relative w-full px-6 z-10"
              >
                <div>
                  <label htmlFor="model" className="block pb-2">
                    <p className="p-regular text-grey">
                      {story.productBrowser.header}
                    </p>
                  </label>
                  <div className="flex flex-col">
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
                      ></input>
                      <button
                        type="submit"
                        className="px-2 py-1 text-left border rounded-md fc border-grey p-small text-grey"
                      >
                        {story.productBrowser.button}
                      </button>
                    </div>
                    <div className="h-[24px] w-full">
                      {errors.model && touched.model ? (
                        <div>
                          <p className="text-left p-small text-corpo">
                            {errors.model}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <ProductPageDisplayer
              wantedModel={wantedModel}
              visibilityCondition={errors.model}
            />
          </>
        )}
      </Formik>
      <FadingFrame />
    </div>
  );
};

export default ProductBrowser;
