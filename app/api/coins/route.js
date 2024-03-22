import { NextResponse } from "next/server";

const url =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key":"cd443c5e65msha44530d5efea9b0p1b2550jsn0750e37179d9",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};
async function getCoins() {
  const response = await fetch(url, options);
  return await response.json();
}
export async function GET(request) {
  const data = await getCoins();
  return NextResponse.json(data.data.coins);
}
