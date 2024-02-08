import { useSearchParams } from "react-router-dom";
import { useSearchQuery } from "./query";
import { replace, useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  query: yup.string().required("Search query is required"),
  yearStart: yup
    .number()
    .integer("Year must be an integer")
    .min(1900, "Year must greater than 1900"),
  yearEnd: yup
    .number()
    .integer("Year must be an integer")
    .min(1900, "Year must greater than 1900")
    .test(
      "is-greater",
      "End year must be greater than start year",
      function (value) {
        const { yearStart } = this.parent;
        return !yearStart || !value || value > yearStart;
      }
    ),
});

export const useForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const yearStart = searchParams.get("yearStart") || "";
  const yearEnd = searchParams.get("yearEnd") || "";
  const pageNum = searchParams.get("pageNum") || 1;
  const pageSize = searchParams.get("pageSize") || 100;
  const formik = useFormik({
    initialValues: {
      query,
      yearStart,
      yearEnd,
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.yearStart === "") {
        delete values.yearStart;
      }
      if (values.yearEnd === "") {
        delete values.yearEnd;
      }
      setSearchParams(values, replace(true));
    },
  });
  const updatePagination = (pageSize, pageNum) => {
    setSearchParams((params) => {
      const newParams = new URLSearchParams(params);
      newParams.set("pageNum", pageNum);
      newParams.set("pageSize", pageSize);
      return newParams;
    });
  };
  const { data, isLoading, isError } = useSearchQuery(
    query,
    yearStart,
    yearEnd,
    pageNum,
    pageSize
  );
  return {
    formik,
    pageInfo: { pageNum: pageNum, pageSize: pageSize },
    updatePagination,
    searchResults: data,
    isLoading,
    isError,
  };
};
