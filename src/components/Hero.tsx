import React from 'react';
import { Search, Video, Calendar, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Connect with top healthcare professionals from the comfort of your home.
            Quality care is just a click away.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Video className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Virtual Consultations</h3>
              <p className="text-gray-600 text-center">
                Connect with doctors via secure video calls
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600 text-center">
                Book appointments at your convenience
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600 text-center">
                Your health data is protected and encrypted
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}