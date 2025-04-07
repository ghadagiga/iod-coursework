import { useState } from "react";
function MoodChanger() {
  const [mood, setMood] = useState("😊");
  return (
    <>
      <div className="MoodChanger componentBox">Current Mood: {mood}</div>
      {/* Using arrow functions */}
      <button onClick={() => setMood("🥱")}>Sleepy</button>
      <button onClick={() => setMood("😖")}>Exhasted</button>
    </>
  );
}

export default MoodChanger;

// function MoodChanger() {
//   const [mood, setMood] = useState('😊');
//   // Calls setMood with a fixed value of 'ecstatic'
//   // begin with 'handle' prefix by convention
//   const handleWinLotto = () => {
//     setMood("ecstatic");
//   };
//   // Calls setMood with a conditional state value
//   const handleRunningLate = () => {
//     let newMood = "stressed";
//     if (mood === "stressed") newMood = "really stressed";
//     else if (mood === "really stressed") newMood = "giving up";
//     setMood(newMood);
//   };
//   return (
//     <div className="MoodChanger">
//       Current Mood: {mood}
//       {/* Using arrow functions */}
//       <button onClick={() => setMood()}>Stay Up Late</button>
//       {/* Using custom event handler functions */}
//       <button onClick={handleRunningLate}>Running Late</button>
//       <button onClick={handleWinLotto}>Win Lotto</button>
//     </div>
//   );
// }
// export default MoodChanger;
