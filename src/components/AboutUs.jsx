import React, { useState } from "react";

const tabs = [
  {
    id: "about",
    label: "Sobre mí",
    content:
      "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquid quaerat, rerum laboriosam odio officiis ullam earum officia maiores aut veniam ad assumenda voluptates hic voluptas, tempora suscipit ipsam deserunt!",
  },
  {
    id: "education",
    label: "Educación",
    content:
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquid quaerat, rerum laboriosam odio officiis ullam earum officia maiores aut veniam ad assumenda voluptates hic voluptas, tempora suscipit ipsam deserunt!",
  },
  {
    id: "contact",
    label: "Contacto",
    content:
      "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquid quaerat, rerum laboriosam odio officiis ullam earum officia maiores aut veniam ad assumenda voluptates hic voluptas, tempora suscipit ipsam deserunt!",
  },
];

export const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full max-w-[1100px] mx-auto grid md:grid-cols-[1fr_3fr] gap-4">
      <div className="flex flex-row gap-2 space-y-2 sm:flex-col justify-center sm:justify-start sm:gap-0">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer h-[60px] sm:h-[70px] flex items-center px-5 py-2 text-[#f4f4f4] rounded-2xl border border-[#f4f4f40e] transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-[#0073ff18] border-l-[#0073ff] shadow-md"
                : "hover:bg-[#0073ff18] hover:border-l-[#0073ff]"
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="p-4 bg-[#1010106c] rounded-2xl border border-[#f4f4f40e] text-pretty">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
