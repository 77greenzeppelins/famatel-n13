import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
/**Validation Staff**/
import * as Yup from 'yup';
/**Utils*/
// import { findUrlByModel, findUrl } from './productBrowserUtils';
import { allProductsForBrowser } from './productBrowser_data';
import { story } from '../../../../data/_data';

/**HardCoded Staff**/
const numMinLength = 4;
const numMaxLength = 11;
const inputMaxLength = 12;
/*
--------------------------- 
*/
interface DataTemplate {
  model: string[];
  url: string;
}

const fake = [
  { model: ['1', '2', '3', '6', '9'], url: 'url/12369' },
  { model: ['RG', 'SPT', ''], url: 'url/SPT-RG' },
];
/*
--------------------------- 
*/

function findUrlByModel(
  typedModel: string,
  staticData: DataTemplate[],
  setState: React.Dispatch<React.SetStateAction<string | null>>
) {
  console.log('...............findUrlByModel');
  const foundData = staticData.find(item => item.model.includes(typedModel));
  console.log(
    'findUrlByModel / foundData ? foundData.url : null:',
    foundData ? foundData.url : null
  );
  setState(foundData ? foundData.url : null);
}

interface MyFormValues {
  model: string;
}

/**----------------------------------------**/
const ProductBrowserByFormik = () => {
  /**State**/
  const [wantedModel, setWantedModel] = React.useState<string | null>('');
  /**Formik Section**/
  const initialValues: MyFormValues = { model: '' };
  /**Validation Section**/
  // const validationSchema = Yup.object({
  //   model: Yup.string()
  //     // .matches(/^(1|2|3|9|6|RG|SPT)[cfgpst/]\w*/i, {
  //     //   message: story.productBrowser.valMatch,
  //     // })
  //     .matches(/^(1|2|3|6|9|RG|SPT)[cfgpst/0-9]*$/i, {
  //       message: story.productBrowser.valMatch,
  //     })
  //     .min(numMinLength, story.productBrowser.valMin)
  //     .max(numMaxLength, story.productBrowser.valMax)
  //     .required(story.productBrowser.valRequired),
  // });
  const validationSchema = Yup.object({
    model: Yup.string()

      .min(numMinLength, story.productBrowser.valMin)
      .max(numMaxLength, story.productBrowser.valMax)
      .required(story.productBrowser.valRequired),
  });

  const handleSubmit2 = (
    values: MyFormValues,
    { setSubmitting }: FormikHelpers<MyFormValues>
  ) => {
    findUrlByModel(values.model, fake, setWantedModel);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  React.useEffect(() => {
    console.log('wantedModel:', wantedModel);
    console.log('wantedModel === "":', wantedModel === '');
  }, [wantedModel]);

  return (
    <div className="w-full h-full pt-10 sm:pt-20 inner-px-md-xl-xxl bg-gradient-to-b from-dark via-dark to-transparent">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit2}
        // validationSchema={validationSchema}
      >
        <Form className="flex flex-col items-center w-full gap-x-10 sm:flex-row ">
          <label
            htmlFor="model"
            className="flex justify-center w-full sm:w-[500px] sm:justify-start"
          >
            <p className="p-medium text-grey">{story.productBrowser.header1}</p>
          </label>

          <div className="flex flex-col min-w-[200px]">
            <div className="flex items-center gap-10 h-[50px] w-full">
              <Field
                id="model"
                name="model"
                // placeholder="John"
                //___
                type="text"
                // id="model"
                // name="model"
                placeholder={story.productBrowser.placeholder}
                className={`block w-full py-2 pl-2 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-grey placeholder:p-small border-slate-300 focus:outline-none focus:border-corpo focus:ring-corpo focus:ring-1 p-small md:p-regular
                text-grey 
                `}
                // value={values.model}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // maxLength={inputMaxLength}
                autoComplete="off"
              />
              <button
                type="submit"
                className="px-2 py-1 text-left border rounded-md fc border-grey p-small text-grey"
              >
                <p className="text-copro">
                  {' '}
                  {wantedModel === '' ? 'empty' : wantedModel}{' '}
                </p>
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductBrowserByFormik;
