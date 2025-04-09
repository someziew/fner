import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Dashboard - Manage Your Employment Activities",
  description:
    "Access your dashboard to manage job searches, applications, and more. Explore employment, training, and internship opportunities with top employers and agencies.",
  //ogTitle:'...'
};

export default function DashboardPage() {
  return <Page />;
}
