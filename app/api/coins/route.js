import { NextResponse } from "next/server";

const url =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
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
