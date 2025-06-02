// Services.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LetterCard from "./LetterCard";
import "./style.css";

const services = [
  {
    title: "Graphic Design",
    description: "Custom visuals, logos, and brand assets.",
    letter: {
      title: "🖌️ Your Design is Ready!",
      body: "Hello,\n\nYour custom graphic design has been completed.\nPlease review and share your thoughts.",
      sender: "Creative Team",
    },
  },
  {
    title: "Consultation Call",
    description: "30-min strategy session with our experts.",
    letter: {
      title: "📞 Consultation Details",
      body: "Hi,\n\nYour consultation is confirmed for Thursday at 3 PM. Looking forward to speaking with you!",
      sender: "Support Team",
    },
  },
  {
    title: "Letter Writing Service",
    description: "We craft customer letters and messages for you.",
    letter: {
      title: "✉️ Custom Letter Sent",
      body: "Hey,\n\nWe’ve sent a personalized thank-you letter to your client as requested.",
      sender: "Messaging Team",
    },
  },
];

export default function Services() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <div className="relative">
      {/* Grid of services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div
              onClick={() => setSelectedLetter(service.letter)}
              className="cursor-pointer bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Letter overlay */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            key="letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
          >
            <LetterCard
              title={selectedLetter.title}
              body={selectedLetter.body}
              sender={selectedLetter.sender}
              onClose={() => setSelectedLetter(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
