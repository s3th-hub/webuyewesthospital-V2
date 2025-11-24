import React from 'react';
import { Target, Eye, BookOpen } from 'lucide-react';
import { MISSION_VISION } from '../data';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Who We Are</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Webuye West Hospital is a cornerstone of health in the region, dedicated to excellence and compassion.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Image Side */}
          <div className="relative">
            <img 
              src="https://picsum.photos/800/1000?grayscale" 
              alt="Medical Team" 
              className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-hospital-blue text-white p-8 rounded-xl shadow-lg hidden md:block max-w-xs">
              <p className="font-serif italic text-lg">"Healing Hands, Caring Hearts"</p>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="space-y-8">
            
            {/* Preamble Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-hospital-blue">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Our Preamble</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {MISSION_VISION.preamble}
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg text-hospital-purple">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {MISSION_VISION.vision}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg text-hospital-green">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {MISSION_VISION.mission}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;