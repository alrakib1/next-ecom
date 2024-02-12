"use client";

import React from "react";
import AuthFormContainer from "@components/AuthFormContainer";
import { Button, Input } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useFormik } from "formik";

import * as yup from "yup";


const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),

});

export default function SignUp() {
  const { values, handleChange, handleBlur, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: { name: "", email: "", password: "" },
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const formErrors: string[] = [];

  const { email, name, password } = values;

  return (
    <AuthFormContainer title="Create New Account" onSubmit={handleSubmit}>
      <Input name="name" label="Name" onChange={handleChange} value={name}  />
      <Input name="email" label="Email" onChange={handleChange} value={email} />
      <Input
        name="password"
        label="Password"
        type="password"
        onChange={handleChange}
        value={password}
      />
      <Button type="submit" className="w-full">
        Sign up
      </Button>
      <div className="">
        {formErrors.map((err) => {
          return (
            <div key={err} className="space-x-1 flex items-center text-red-500">
              <XMarkIcon className="w-4 h-4" />
              <p className="text-xs">{err}</p>
            </div>
          );
        })}
      </div>
    </AuthFormContainer>
  );
}