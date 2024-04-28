'use client'
import React from 'react';
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import Form from "@/components/form/form";
import SimpleFooter from "@/components/footer";
import Review from "@/components/review";
import Services from "@/components/services";
import Subscribe from "@/components/subscribe";
import Pricing from "@/components/pricing";
import { ModalProvider } from "@/store/ModalProvider";
import ModalDialog from "@/components/dialog";

export default function Home() {
  return (
    <ModalProvider>
      <Header />
      <HeroSection />
      <Services />
      <Form />
      <ModalDialog />
      <Review />
      <Pricing />
      <Subscribe />
      <SimpleFooter />
    </ModalProvider>
  );
}
