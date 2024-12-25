import React, { useState, useEffect } from "react";
const quotes = [
  "Avoid daydreaming about the years to come.",
  "You are the most important person in your whole life.",
  "Always be true to who you are, and ignore what other people have to say about you.",
  "Only demonstrate your strength when it’s really required.",
  "Subscribe to Drop X Out",
];

export default function Eleven() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    function updateQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }
    updateQuote();

    const intervalId = setInterval(updateQuote, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{quote}</div>;
}
