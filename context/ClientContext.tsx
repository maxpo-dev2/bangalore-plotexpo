"use client";
import React, { Suspense } from "react";
import client from "@/lib/apollo/apollo-client";
import { ToastContainer } from "react-toastify";
import UTMTracker from "@/lib/utm/UtmTracker";
import { ApolloProvider } from "@apollo/client/react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import WAEnquirySection from "@/app/components/WAEnquiry";

const ClientContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <main className="mt-16">{children}</main>
      <Suspense fallback={null}>
        <UTMTracker />
        <WAEnquirySection />
      </Suspense>
      <Footer />
      <ToastContainer className="z-99999 mt-20" />
    </ApolloProvider>
  );
};

export default ClientContext;
