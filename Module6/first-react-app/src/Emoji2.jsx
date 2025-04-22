import { useState, createContext, useContext } from "react";

const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [mood, setMood] = useState("😊");

  const pressMood = (prem) => {
    setMood((prem) => (prem === "😊" ? "😎" : "😊"));
  };

  return (
    <MoodContext.Provider value={{ mood, pressMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export const useMood = () => useContext(MoodContext);
