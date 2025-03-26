import { useState } from "react";
import Picker from "emoji-picker-react";

// save in MoodChanger.jsx
function MoodChanger() {
    <>
  // two variables :
  // mood stores current mood, default happy
  // setMood is a function for updating mood
  const [mood, setMood] = useState(null);
  <image name='f' scr="https://images.app.goo.gl/2eovK7xShSanA37W8" />
   <image name='s' scr="https://images.app.goo.gl/Zi1iPyyohaQnaoRV6" />


  return <div className="MoodChanger componentBox">Current Mood: {mood}</div>;
  return (
<div className="MoodChanger">
Current Mood: {mood}
{/* Using arrow functions */}
<button onClick={() => setMood(image)}>Stay Up Late</button>

</>

}

export default MoodChanger;
