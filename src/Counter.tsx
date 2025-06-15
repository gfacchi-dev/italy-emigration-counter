import { useState, useEffect } from "react";

const secondsInYear = 365 * 24 * 60 * 60;
// Ensure startTime is correctly defined for a TSX file
const startTime = new Date("2025-01-01T00:00:00Z").getTime();

interface CounterProps {
  label: string;
  annualEmigrants: number;
  isCurrency?: boolean; // Optional prop
}

export default function Counter({ label, annualEmigrants, isCurrency = false }: CounterProps) {
  const [count, setCount] = useState<number>(0);
  const ratePerSecond = annualEmigrants / secondsInYear;
  const ratePerMinute = ratePerSecond * 60;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsedSeconds = (now - startTime) / 1000;
      setCount(Math.floor(ratePerSecond * elapsedSeconds));
    }, 1000);
    return () => clearInterval(interval);
  }, [ratePerSecond]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{label}</h2>
      <div 
        style={{ 
          fontSize: "3rem", // Reduced for compactness
          fontWeight: "bold", 
          color: isCurrency ? undefined : '#f0f0f0' // Use App.css for currency, bright white for others
        }}
        className={isCurrency ? "economic-loss-value" : undefined} // Apply class for currency
      >
        {isCurrency ? "€ " : ""}{count.toLocaleString()}
      </div>
      <div style={{ fontSize: "1rem", color: "#bbbbbb", marginTop: "4px" }}>
        ({isCurrency ? "+€" : "+"}{ratePerMinute.toFixed(2)} per minute)
      </div>
    </div>
  );
}

