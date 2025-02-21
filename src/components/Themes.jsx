import React from "react";
import Card from "../components/Card";

const Themes = ({ theme }) => {
  return (
    <>
      <div className="flex flex-col bg-darkbrown h-full text-beige text-5xl p-8 items-center gap-9">
        <h3 className="text-center">{theme}</h3>
        <div className="flex flex-col justify-between h-full gap-9">
          <Card number="1" href="/question"/>
          <Card number="2" href="/question"/>
          <Card number="3" href="/question"/>
          <Card number="5" href="/question"/>
        </div>
      </div>
    </>
  );
};

export default Themes;
