import React, { useState } from "react";
import { plans } from "../../utils/plans";
import CardPlan from "../molecules/card-plan/CardPlan";
import styles from "./styles.module.css";
import InfPlans from "../molecules/tables-plans/InfPlans";
export default function PlansPrice() {
  const [planSelect, setPlanSelect] = useState(plans[0]);
  return (
    <div>
      <div className={styles.div_root}>
        {plans.map((plan) => (
          <CardPlan
            key={plan.id}
            quantityPlans={plans.length}
            {...plan}
            setPlanSelect={setPlanSelect}
            planSelect={planSelect}
          />
        ))}
      </div>
      <InfPlans plan={planSelect} />
    </div>
  );
}
