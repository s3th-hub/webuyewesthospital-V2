import React from 'react';
import { Timer } from 'lucide-react';
import { SERVICE_CHARTER } from '../data';

const Charter: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-block p-3 rounded-full bg-hospital-green/10 mb-4">
            <Timer className="w-8 h-8 text-hospital-green" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900">Service Charter</h1>
          <p className="text-lg text-slate-600 mt-4">
            We value your time. Our commitment is to serve you within these standard timelines.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-12 bg-hospital-green text-white font-bold text-sm sm:text-base uppercase tracking-wider">
                <div className="col-span-8 p-6">Service</div>
                <div className="col-span-4 p-6 border-l border-green-600">Service Time</div>
            </div>
            
            <div className="divide-y divide-slate-100">
                {SERVICE_CHARTER.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 hover:bg-green-50/30 transition-colors">
                        <div className="col-span-8 p-6 text-slate-900 font-medium flex items-center">
                            <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs text-slate-500 mr-3 shrink-0 font-bold">
                                {item.id}
                            </span>
                            {item.service}
                        </div>
                        <div className="col-span-4 p-6 border-l border-slate-100 text-slate-700 font-semibold flex items-center">
                            {item.time}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500 italic">
            * Times indicated are average wait times and may vary depending on patient volume and emergency cases.
        </div>
      </div>
    </div>
  );
};

export default Charter;