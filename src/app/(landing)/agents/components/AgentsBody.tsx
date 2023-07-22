"use client";
import React, { ReactNode, useState } from "react";
import AgentFilters from "./AgentFilters";
import AgentPagination from "./AgentPagination";
import Footer from "@/app/components/Footer";

const agentData = [
  {
    name: "Arlene McCoy",
    designation: "Broker",
    imgSrc: "images/team/agent-1.jpg",
  },
  {
    name: "Esther Howard",
    designation: "Broker",
    imgSrc: "images/team/agent-2.jpg",
  },
  {
    name: "Cody Fisher",
    designation: "Broker",
    imgSrc: "images/team/agent-3.jpg",
  },
  {
    name: "Bessie Cooper",
    designation: "Broker",
    imgSrc: "images/team/agent-4.jpg",
  },
  {
    name: "Guy Hawkins",
    designation: "Broker",
    imgSrc: "images/team/agent-5.jpg",
  },
  {
    name: "Arlene McCoy",
    designation: "Broker",
    imgSrc: "images/team/agent-6.jpg",
  },
  {
    name: "Esther Howard",
    designation: "Broker",
    imgSrc: "images/team/agent-7.jpg",
  },
  {
    name: "Cody Fisher",
    designation: "Broker",
    imgSrc: "images/team/agent-8.jpg",
  },
  {
    name: "Bessie Cooper",
    designation: "Broker",
    imgSrc: "images/team/agent-9.jpg",
  },
  {
    name: "Guy Hawkins",
    designation: "Broker",
    imgSrc: "images/team/agent-10.jpg",
  },
  {
    name: "Guy Hawkins",
    designation: "Broker",
    imgSrc: "images/team/agent-11.jpg",
  },
  {
    name: "Guy Hawkins",
    designation: "Broker",
    imgSrc: "images/team/agent-12.jpg",
  },
  {
    name: "Guy Hawkins",
    designation: "Broker",
    imgSrc: "images/team/agent-13.jpg",
  },
  {
    name: "Guy Hawkins",
    designation: "Broker",
    imgSrc: "images/team/agent-14.jpg",
  },
  {
    name: "Guy Hawkins",
    designation: "Broker",
    imgSrc: "images/team/agent-15.jpg",
  },
];

export default function AgentsBody() {
  function AgentImage(props: any): ReactNode {
    return (
      <>
        <div className="col">
          <div className="feature-style2 mb30">
            <div className="feature-img">
              <img className="bdrs12" src={props.imgSrc} alt="" />
            </div>
            <div className="feature-content pt20">
              <h6 className="title mb-1">{props.name}</h6>
              <p className="text fz15">{props.designation}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Agents title */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Agents</h2>
                <div className="breadcumb-list">
                  <a href="">Home</a>
                  <a href="">For Rent</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Agents title ended */}

      <section className="our-agents pt-0">
        <div className="container">
          {/* Filters */}
          <AgentFilters />

          {/*  Agents Section Area */}
          <div
            className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 wow fadeInUp"
            data-wow-delay="100ms"
          >
            {agentData.map(
              (
                element: { name: string; designation: string; imgSrc: string },
                index
              ) => {
                return (
                  <AgentImage
                    key={`Agent_image_key_${index}`}
                    name={element.name}
                    designation={element.designation}
                    imgSrc={element.imgSrc}
                  />
                );
              }
            )}
          </div>
          {/* Agent section area ends */}


          {/* Pagination component */}
          <AgentPagination />

        </div>
      </section>
    </>
  );
}
