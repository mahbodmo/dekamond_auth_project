"use client";

import { logIn } from "@/app/store/auth-slice";
import { useAppDispatch } from "@/app/store/main";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { urlWithQueryParams } from "@/lib/utils";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const phoneRegex = /^(?:\+989|09|00989)\d+$/;

  const formik = useFormik<{
    mobile: string;
  }>({
    initialValues: {
      mobile: "",
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .required("Mobile number is required!")
        .min(11)
        .max(14)
        .matches(phoneRegex, "Mobile number is invalid!"),
    }),
    onSubmit: async () => {
      const res = await fetch(
        urlWithQueryParams("https://randomuser.me/api/", {
          results: 1,
          nat: "us",
        })
      );
      const data = await res.json();
      const user = data.results[0];
      dispatch(logIn(user));
      router.push(`/profile`);
      window.scrollTo(0, 0);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-y-2 min-w-[300px]"
    >
      <Input
        placeholder="Mobile Number"
        id="mobile"
        name="mobile"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.mobile}
      />

      {formik.touched.mobile && formik.errors.mobile ? (
        <p className="text-red-700 text-sm">{formik.errors.mobile}</p>
      ) : null}

      <Button type="submit">Login</Button>
    </form>
  );
}
