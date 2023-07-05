"use client";
import Package from "@/components/Package";
import { annuallyPricing, monthlyPricing } from "@/data";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [pricing, setPricing] = useState("monthly");
  const [pricingData, setPricingData] = useState(monthlyPricing);
  function changePricing(pricing) {
    setPricing(pricing);
    if (pricing == "monthly") {
      setPricingData(monthlyPricing);
    } else {
      setPricingData(annuallyPricing);
    }
  }
  // function convertToMonthlyPricing() {
  //   setPricing("monthly");
  // }
  // function convertToAnnuallyPricing() {
  //   setPricing("annually");
  // }
  console.log(pricing);
  return (
    <main>
      <section className="header">
        <a href="/coins">View Coins</a>
        <h2>Pricing</h2>
        <p>
          Signup in less than 30 seconds. Try our 7 day risk free trial. Upgrade
          at anytime, no questions, no hustle.
        </p>
        <div className="buttons">
          <button
            onClick={() => changePricing("monthly")}
            className={
              pricing == "monthly" ? "monthly-btn active-btn" : "monthly-btn"
            }
          >
            Monthly
          </button>
          <button
            onClick={() => changePricing("annually")}
            className={
              pricing == "annually" ? "annually-btn active-btn" : "annually-btn"
            }
          >
            Annually
          </button>
        </div>
      </section>
      <section className="pricing-packages">
        {pricingData.map((packageData, i) => {
          return <Package key={i} data={packageData} />;
        })}
      </section>
    </main>
  );
}
