"use client";
import Coin from "@/components/Coin";
import { useEffect, useState } from "react";

export default function Page() {
  const [coins, setCoins] = useState([]);
  // console.log(coins);
  async function fetchData() {
    const response = await fetch("/api/coins");
    const coins = await response.json();
    setCoins(coins);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <button onClick={fetchData}>Fetch Coins</button> */}
      <section className="coins">
        {coins?.map((coin) => {
          return <Coin data={coin} key={coin.uuid} />;
        })}
      </section>
    </div>
  );
}
