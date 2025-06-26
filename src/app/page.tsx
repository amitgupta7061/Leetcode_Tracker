"use client";

import { useState } from 'react';
import { ExternalLink, Github, Trophy } from 'lucide-react';

export default function LeetCodePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const profiles = [
    {
      id: 'a_mmitt',
      displayName: 'Amit Gupta',
      username: 'a_mmitt',
      profileUrl: 'https://leetcode.com/a_mmitt',
      heatmapImage: 'https://leetcard.jacoblin.cool/a_mmitt?theme=dark,forest&ext=heatmap',
      description: 'Passionate problem solver with a focus on algorithms and data structures.',
    },
    {
      id: 'a_mitt',
      displayName: 'Amit Gupta',
      username: 'a_mitt',
      profileUrl: 'https://leetcode.com/a_mitt',
      heatmapImage: 'https://leetcard.jacoblin.cool/a_mitt?theme=dark,forest&ext=heatmap',
      description: 'Dedicated to teaching and sharing coding knowledge with the community.',
    }
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 font-sans antialiased">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-4 px-4 sm:px-6 lg:px-8"> 
          <h1 className="text-xl md:text-2xl font-extrabold text-white mb-3 leading-tight text-center"> 
            My <span className="bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">LeetCode</span> Profiles
          </h1>  
      </div>

      {/* Profiles Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`group relative bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform ${
                hoveredCard === index ? 'scale-[1.002] ring-2 ring-orange-400 ring-opacity-50' : 'hover:scale-[1.01]'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className="relative p-6 pb-4 bg-gray-800 border-b border-gray-700"> {/* Removed gradient, consistent bg */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3"> {/* Reduced mb */}
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">{profile.displayName}</h2> {/* Reduced font size */}
                      <p className="text-blue-400 font-semibold">@{profile.username}</p>
                    </div>
                    <div className="flex items-center">
                      <a
                        href={profile.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-orange-500 hover:bg-orange-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg group-hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 text-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> {/* Smaller icon and margin */}
                        <span>View Profile</span>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{profile.description}</p>
                </div>
              </div>

              {/* Heatmap Card */}
              <div className="p-6"> {/* Reduced padding */}
                <div className="relative overflow-hidden rounded-lg shadow-inner-lg">
                  <img
                    src={profile.heatmapImage}
                    alt={`${profile.username} Activity Heatmap`}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6"> {/* Reduced padding */}
                <div className="flex items-center justify-between p-3 bg-gray-700/60 rounded-xl border border-gray-600 shadow-md"> {/* Reduced padding */}
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div> {/* Smaller indicator */}
                    <span className="text-xs font-medium text-gray-300">Active Profile</span> {/* Smaller text */}
                  </div>
                  <div className="text-xs text-gray-400">
                    Data updated daily
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 border-t border-gray-700 py-3 px-4 text-center text-sm font-medium flex items-center justify-center gap-2 text-gray-400"> {/* Reduced vertical padding (py) */}
        <Github className="w-4 h-4 text-gray-500" /> 
        <span>This project is Open Source</span>
      </footer>
    </main>
  );
}