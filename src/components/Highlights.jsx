import React from 'react';

const highlights = [
  '🚀 Built a full-stack Web3 Crowdfunding DApp with ETH + UPI integration.',
  '📱 Designed and deployed a location-based Party App using React Native + Firebase.',
  '🧠 Self-taught Solidity, Tailwind, and backend integration from scratch.',
  '💡 Contributed to launching a real-world startup project with active users.',
  '⚙️ Continuously building and shipping side projects to improve dev skills.'
];

const Highlights = () => {
  return (
    <section id="highlights" classname="pt-24 bg-gray-950 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Highlights</h2>
      <div className="max-w-4xl mx-auto space-y-4 text-gray-300 text-lg">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl hover:scale-[1.02] transition duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
