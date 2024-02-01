"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Concerts",
    id: "concerts",
    content: (
      <ul className="list-disc pl-2">
        <li>VIP Seats</li>
        <li>Easy Access</li>
        <li>Exclusive Events</li>
        <li>Best Performers</li>
      </ul>
    ),
  },
  {
    title: "Sports",
    id: "sports",
    content: (
      <ul className="list-disc pl-2">
        <li>VIP Entrances</li>
        <li>Season Passes</li>
        <li>Clear view of the Game</li>
        <li>Memorable Experience</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Customized to the Client needs.</li>
        <li>Top notch attention</li>
        <li>No ticket cancellations</li>
        <li>Swift Delivery</li>
        <li>Reliability</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("concerts");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/event.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Our Mission!</h2>
          <p className="py-2 text-base lg:text-lg">
          We want you to  experience an event without having to purchase tickets on resell platforms 
          and have a clear understanding of where purchased seats are located. Let us connect you to 
          professional baseball, football, soccer, tennis and racing events.
          </p>

          <h2 className="py-2 text-4xl font-bold text-white mb-4 text-right">We Own Our Stock!</h2>
          <p className="text-base lg:text-lg">
          Unlike many competitors, we do not rely on dropshipping. We own our ticket inventory and
          guarantee that you get authentic tickets.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("concerts")}
              active={tab === "concerts"}
            >
              {" "}
              Concerts{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("sports")}
              active={tab === "sports"}
            >
              {" "}
              Sports{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;