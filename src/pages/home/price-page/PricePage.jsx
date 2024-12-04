import React from "react";
import PriceTemplate from "../../../components/template/price-template/PriceTemplate";
import Navbar from "../../../components/organisms/navbar-2/Navbar";
import Calificasion from "../../../components/molecules/qualification/qualification";

export default function PricePage() {
  return (
    <div>
      <Calificasion />
      <Navbar />
      <PriceTemplate />
    </div>
  );
}
