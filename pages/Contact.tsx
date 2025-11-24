import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600">
            We are here to help. Contact us for inquiries, appointments, or emergency services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg text-hospital-blue mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Our Location</h4>
                    <p className="text-slate-600">Webuye West Hospital<br/>Webuye, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-lg text-hospital-green mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone Number</h4>
                    <p className="text-slate-600">+254 700 000 000</p>
                    <p className="text-xs text-red-500 font-bold mt-1">Emergency: 999 / 112</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-50 p-3 rounded-lg text-hospital-purple mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Address</h4>
                    <p className="text-slate-600">info@webuyewesthospital.go.ke</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-500 mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Operating Hours</h4>
                    <p className="text-slate-600">Emergency & Inpatient: 24/7</p>
                    <p className="text-slate-600">Outpatient: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="bg-slate-200 w-full h-64 rounded-2xl overflow-hidden relative flex items-center justify-center">
                 {/* In a real app, embed Google Maps iframe here */}
                 <div className="text-center">
                    <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                    <span className="text-slate-500 font-medium">Google Map Placeholder</span>
                 </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-hospital-blue">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-hospital-blue focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-hospital-blue focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-hospital-blue focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <select id="subject" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-hospital-blue focus:border-transparent outline-none transition-all text-slate-600">
                  <option>General Inquiry</option>
                  <option>Appointment Request</option>
                  <option>Feedback / Complaint</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-hospital-blue focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-hospital-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;