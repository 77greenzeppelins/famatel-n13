import React, { useState } from 'react';
/**Formik Staff**/
import { Formik } from 'formik';
/**Validation Staff**/
import * as Yup from 'yup';

/**Utils*/
import { testFunction, findUrlByModel } from './productBrowserUtils';

/**HardCoded Staff**/
const numMinLength = 4;
const numMaxLength = 15;
import { testStaticData } from './productBrowser_data';
import { AnimatePresence } from 'framer-motion';

/**TS**/
interface MyFormValues {
  model: string;
}

/**-------------------------------**/
const ProductBrowser = () => {
  /**State**/
  const [wantedModel, setWantedModel] = useState<string | null>('null');
  /**Formik Section**/
  const initialValues: MyFormValues = { model: '' };
  /**Validation Section**/
  const validationSchema = Yup.object().shape({
    model: Yup.string()
      .min(numMinLength, 'Podany numer katalogowy jest zbyt krótki?')
      .max(numMaxLength, 'Podany numer katalogowy jest zbyt długi!')
      .required('Pole wymagane!'),
  });

  console.log('wantedModel:', wantedModel);

  /**JSX**/
  return (
    <div className="flex flex-col gap-10">
      <div className="fc h-[140px] w-[400px] bg-greyShade2">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            // alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            console.log('values:', values);
            console.log('actions:', actions);
            //___external function to find model apecified by user;
            testFunction(values.model);
            //___
            findUrlByModel(values.model, testStaticData, setWantedModel);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="w-full px-6">
              <div>
                <label
                  htmlFor="model"
                  className="block pb-2 text-left p-small text-grey"
                >
                  Numer
                </label>
                <div className="flex flex-col">
                  <div className="flex items-center gap-10 h-[50px] w-full">
                    <input
                      type="text"
                      id="model"
                      name="model"
                      placeholder="Wpisz numer produktu"
                      // className="block border-2 border-grey p-2 rounded-md w-[200px] focus:border-corpo focus:ring-corpo  italic"
                      className={`block w-full py-2 pl-2 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-grey border-slate-300 focus:outline-none focus:border-corpo focus:ring-corpo focus:ring-1 sm:text-sm ${
                        errors.model ? 'text-corpo' : 'text-grey'
                      } `}
                      // className="px-4 py-3 rounded-full form-input"
                      // className="p-2 border-2 border-gray-500 rounded-md focus:border-teal-500 focus:ring-teal-500 "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.model}
                    ></input>
                    <button
                      type="submit"
                      className="px-2 py-1 text-left border rounded-md fc border-grey p-small text-grey"
                    >
                      Szukaj
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
          )}
        </Formik>
      </div>
      <AnimatePresence>
        {wantedModel ? <div>{wantedModel}</div> : null}
      </AnimatePresence>
    </div>
  );
};

export default ProductBrowser;

{
  /* <div className="fc h-[100px] w-[400px] bg-greyShade2">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <label
              htmlFor="model"
              className="block pb-2 text-left p-small text-light"
            >
              Wpisz numer modelu
            </label>
            <div className="flex gap-x-6">
              <Field id="model" name="model" placeholder="model" />
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div> */
}
