"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";



const AboutSection = () => {
 
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            About In My Company
          </h2>
          <p className="text-base lg:text-lg">
            This Is My Company About Section Where You Can Find My Company Food
            Products: We offer a diverse range of food products, including fresh
            produce, dairy, meats, seafood, pantry staples, and specialty items
            sourced from trusted suppliers. Catering Services: Our professional
            catering services are perfect for corporate events, weddings,
            parties, and other special occasions. We offer customizable menus,
            attentive service, and seamless execution to ensure a memorable
            dining experience. Culinary Solutions: Our team of experienced chefs
            and food experts provides culinary consulting, menu development,
            recipe creation, and kitchen optimization services to restaurants,
            hotels, and foodservice establishments.
          </p>
         
        
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
