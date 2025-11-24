import React from 'react';
import { Briefcase, UserPlus, CheckCircle } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-hospital-blue text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Our Medical Team</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Build your career with Webuye West Hospital. We are looking for passionate individuals dedicated to healthcare excellence.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Benefits Section - Compact */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-hospital-blue" />
                Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Modern Medical Facilities</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Professional Growth</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Community Impact</span>
                </div>
            </div>
        </div>

        {/* Google Form Embed Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="p-4 bg-hospital-blue/5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-hospital-blue" />
                <span className="font-bold text-hospital-blue">Job Application Form</span>
            </div>
            <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">Secure Application</span>
          </div>
          
          <div className="w-full bg-slate-50 relative">
            {/* Loading Indicator (visible if iframe is slow) */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 z-0">
                Loading Form...
            </div>
            
            {/* 
              REPLACE THE SRC URL BELOW with your actual Google Form Embed URL.
              1. Go to your Google Form
              2. Click Send -> Embed HTML (< >)
              3. Copy the URL inside the src="" attribute
            */}
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfD_XZ8QZ8QZ8QZ8QZ8QZ8QZ8QZ8QZ8Q/viewform?embedded=true" 
              width="100%" 
              height="1200" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full relative z-10 bg-white"
              title="Job Application Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;