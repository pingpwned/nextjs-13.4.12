"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";

interface IFormInput {
  locale: string;
}

export const LangForm = () => {
  const { lang } = useTranslation();
  let router: NextRouter;
  try {
    router = useRouter();
  } catch (err) {}

  // const { register, handleSubmit } = useForm<IFormInput>({
  //   defaultValues: {
  //     locale: lang,
  //   },
  // });
  // const onSubmit: SubmitHandler<IFormInput> = ({ locale }) => {
  //   if (router) {
  //     setLanguage(locale);
  //   } else {
  //     console.log("Not Implemented");
  //   }
  // };

  const [isChecked, setIsChecked] = useState(lang === "de");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (router) {
      setLanguage(isChecked ? "en" : "de");
    }
  };

  return (
    // <form
    //   onSubmit={handleSubmit(onSubmit)}
    //   className="flex mt-1 ml-2 mr-2 pr-2 border border-violet-700 border-opacity-100 rounded-lg"
    // >
    //   <select
    //     {...register("locale")}
    //     id="countries"
    //     className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //   >
    //     <option value="en">en</option>
    //     <option value="de">de</option>
    //   </select>

    //   <input type="submit" className="cursor-pointer" value="Save Language" />
    // </form>
    <label className="border border-violet-700 border-opacity-100 rounded-lg themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md">
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[8px] text-sm font-medium ${
          !isChecked ? "text-primary" : "text-violet-500"
        }`}
      >
        DE
      </span>
      |
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[8px] text-sm font-medium ${
          isChecked ? "text-primary" : "text-violet-500"
        }`}
      >
        EN
      </span>
    </label>
  );
};
