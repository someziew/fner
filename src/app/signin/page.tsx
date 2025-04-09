import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Signin - Access Your Employment Opportunities",
  description:
    "Log in to your account to find the latest job opportunities, change your password, or sign up for new account on the Ivoirienne employment platform.",
  //ogTitle:'...'
};

export default function SigninPage() {
  return <Page />;
}
