import React, { useEffect, useState } from "react";
import PriceTemplate from "../../components/template/price-template/PriceTemplate";
import Navbar from "../../components/organisms/navbar-2/Navbar";
import Calificasion from "../../components/molecules/qualification/qualification";
import WaitingTime from "../../components/waitingTime/waitingTime";

export default function PricePage() {
  return (
    <div>
      <Calificasion />
      <Navbar />
      <PriceTemplate />
      <WaitingTime />
    </div>
  );
}
