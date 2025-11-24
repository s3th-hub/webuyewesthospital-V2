import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { SPECIALIST_CLINICS } from '../data';

const Clinics: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Specialist Clinics Schedule</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Our specialists are available at specific times throughout the week. Please plan your visit accordingly.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-slate-200 shadow-lg">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-hospital-blue text-white">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Service / Clinic</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Day</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {SPECIALIST_CLINICS.map((clinic, index) => (
                <tr key={clinic.id} className={index % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50 hover:bg-slate-100'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">{clinic.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {clinic.day}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 font-medium">{clinic.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {SPECIALIST_CLINICS.map((clinic) => (
            <div key={clinic.id} className="bg-white p-5 rounded-lg shadow-md border border-slate-200">
              <h3 className="font-bold text-lg text-hospital-blue mb-3">{clinic.service}</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center text-slate-600">
                  <Calendar className="w-4 h-4 mr-2 text-hospital-green" />
                  <span className="font-medium">{clinic.day}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Clock className="w-4 h-4 mr-2 text-hospital-purple" />
                  <span>{clinic.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg text-center">
            <p className="text-hospital-blue font-medium">
                Note: Schedules are subject to change on public holidays. Please contact reception to confirm.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Clinics;