import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Activity, CalendarCheck, UserPlus } from 'lucide-react';
import { MISSION_VISION, SERVICES, SPECIALIST_CLINICS } from '../data';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 4);
  const nextThreeClinics = SPECIALIST_CLINICS.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-hospital-blue overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/1920/1080?grayscale"
            alt="Hospital Building"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hospital-blue via-hospital-blue/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3 lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              <Activity className="w-4 h-4 mr-2" />
              Healing Hands, Caring Hearts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Webuye West <br/> <span className="text-blue-300">Hospital</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg">
              {MISSION_VISION.preamble}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-3 bg-white text-hospital-blue font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                Book a Visit
              </Link>
              <Link to="/careers" className="px-8 py-3 bg-blue-600/50 border border-blue-400/30 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                <UserPlus className="w-4 h-4 mr-2" />
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-hospital-green text-white py-6 md:-mt-12 relative z-10 mx-4 md:mx-auto max-w-7xl rounded-lg shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-green-600">
          <div className="flex items-center justify-center md:justify-start gap-4 p-2">
            <div className="bg-white/20 p-3 rounded-full">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Emergency Care</h4>
              <p className="text-sm opacity-90">24/7 Rapid Response</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 p-2">
             <div className="bg-white/20 p-3 rounded-full">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Specialist Clinics</h4>
              <p className="text-sm opacity-90">Weekly Schedules Available</p>
            </div>
          </div>
           <div className="flex items-center justify-center md:justify-start gap-4 p-2">
             <div className="bg-white/20 p-3 rounded-full">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Service Charter</h4>
              <p className="text-sm opacity-90">Transparent Timelines</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Commitment to You</h2>
            <div className="w-20 h-1 bg-hospital-purple mx-auto mb-6"></div>
            <p className="text-lg text-slate-600">{MISSION_VISION.vision}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow group">
                {service.icon && <service.icon className="w-10 h-10 text-hospital-blue mb-4 group-hover:scale-110 transition-transform" />}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{service.description}</p>
                <Link to="/services" className="text-hospital-lightBlue font-medium text-sm inline-flex items-center hover:text-hospital-blue">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/services" className="inline-block px-6 py-3 border border-hospital-blue text-hospital-blue font-semibold rounded-lg hover:bg-hospital-blue hover:text-white transition-colors">
               View All Services
             </Link>
          </div>
        </div>
      </section>

      {/* Specialist Preview */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Specialist Clinics</h2>
              <p className="text-slate-600">Expert care on scheduled days.</p>
            </div>
            <Link to="/clinics" className="mt-4 md:mt-0 text-hospital-blue font-semibold flex items-center hover:underline">
              View Full Schedule <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextThreeClinics.map((clinic) => (
              <div key={clinic.id} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-hospital-purple">
                <h3 className="font-bold text-lg text-slate-900">{clinic.service}</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Day:</span>
                    <span className="font-medium text-slate-800">{clinic.day}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Time:</span>
                    <span className="font-medium text-slate-800">{clinic.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;