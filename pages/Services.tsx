import React from 'react';
import { SERVICES } from '../data';

const Services: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-hospital-lightBlue font-semibold uppercase tracking-wider text-sm">What we offer</span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Medical Services</h1>
          <p className="text-slate-600 text-lg">
            We provide a comprehensive range of medical services designed to meet the needs of our community, delivered by a dedicated team of professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-start group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-hospital-blue mb-6 group-hover:bg-hospital-blue group-hover:text-white transition-colors duration-300">
                {service.icon && <service.icon className="w-8 h-8" />}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-hospital-blue transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100 w-full">
                <span className="text-sm font-semibold text-hospital-lightBlue uppercase tracking-wide">Available</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;