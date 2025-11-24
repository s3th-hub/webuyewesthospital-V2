import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PATIENT_FLOW } from '../data';

const Flow: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Patient Flow Chart</h1>
          <p className="text-lg text-slate-600">
            A step-by-step guide to your journey through Webuye West Hospital.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {PATIENT_FLOW.map((step, index) => (
            <div key={step.id} className="relative pl-8 md:pl-0">
              
              {/* Connecting Line (except for last item) */}
              {index !== PATIENT_FLOW.length - 1 && (
                <div className="hidden md:block absolute left-1/2 ml-[-1px] top-full h-12 w-0.5 bg-slate-200 z-0"></div>
              )}
               {/* Mobile Connecting Line */}
               {index !== PATIENT_FLOW.length - 1 && (
                <div className="md:hidden absolute left-8 ml-[-1px] top-12 h-full w-0.5 bg-slate-200 z-0"></div>
              )}

              <div className="relative z-10 mb-12 md:mb-16 group">
                <div className="flex flex-col md:items-center">
                  
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg mb-4 transition-transform group-hover:scale-110 border-4 border-white ${step.title.includes('Emergency') ? 'bg-red-500' : 'bg-hospital-blue'}`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content Card */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 w-full md:w-[500px] shadow-sm text-center md:text-center text-left">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 mb-4">{step.description}</p>
                    
                    {/* Sub steps (departments) */}
                    {step.subSteps && (
                      <div className="flex flex-wrap gap-2 justify-center mt-4">
                        {step.subSteps.map(sub => (
                          <span key={sub} className="px-3 py-1 bg-white border border-blue-200 rounded-full text-xs font-semibold text-hospital-blue">
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Arrow Indicator for visual flow */}
              {index !== PATIENT_FLOW.length - 1 && (
                 <div className="md:hidden absolute left-[26px] top-[calc(100%-20px)] text-slate-300">
                    <ArrowDown className="w-4 h-4" />
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flow;