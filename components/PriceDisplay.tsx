"use client";

import { useState, useEffect } from "react";

// Cache to prevent multiple API calls
let cachedRate: number | null = null;
let cachedCurrency: string | null = null;
let isFetching = false;

interface PriceDisplayProps {
  amountUsd: number;
  className?: string;
}

export default function PriceDisplay({ amountUsd, className }: PriceDisplayProps) {
  const [currency, setCurrency] = useState<string>("USD");
  const [rate, setRate] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCurrencyData() {
      if (cachedCurrency && cachedRate) {
        setCurrency(cachedCurrency);
        setRate(cachedRate);
        setLoading(false);
        return;
      }

      if (isFetching) {
        // Simple polling wait if another component is fetching
        const interval = setInterval(() => {
          if (cachedCurrency && cachedRate) {
            setCurrency(cachedCurrency);
            setRate(cachedRate);
            setLoading(false);
            clearInterval(interval);
          }
        }, 100);
        return;
      }

      isFetching = true;
      try {
        // 1. Get user currency code based on IP
        const ipRes = await fetch("https://ipapi.co/json/");
        const ipData = await ipRes.json();
        const userCurrency = ipData.currency || "USD";

        // 2. Get exchange rates
        const rateRes = await fetch("https://open.er-api.com/v6/latest/USD");
        const rateData = await rateRes.json();
        
        const currentRate = rateData.rates[userCurrency] || 1;

        cachedCurrency = userCurrency;
        cachedRate = currentRate;

        setCurrency(userCurrency);
        setRate(currentRate);
      } catch (error) {
        console.error("Failed to fetch currency:", error);
      } finally {
        isFetching = false;
        setLoading(false);
      }
    }

    fetchCurrencyData();
  }, []);

  if (loading) {
    return <span className={`animate-pulse bg-white/10 rounded px-4 text-transparent ${className}`}>$0.00</span>;
  }

  const convertedAmount = amountUsd * rate;
  
  const formatted = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency,
    currencyDisplay: "narrowSymbol",
  }).format(convertedAmount);

  return <span className={className}>{formatted}</span>;
}
