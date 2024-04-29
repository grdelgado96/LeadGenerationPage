"use client";
import React from "react";
import HeroSection from "@/components/heroSection";
import Form from "@/components/form/form";
import Review from "@/components/review";
import Services from "@/components/services";
import Subscribe from "@/components/subscribe";
import Pricing from "@/components/pricing";

/**
 *
 * @returns
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Form />
      <Review />
      <Pricing />
      <Subscribe />
    </>
  );
}
