import React from 'react';
import { Star, Clock, Video, Calendar } from 'lucide-react';
import AppointmentModal from '../appointments/AppointmentModal';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  experience: string;
  education: string;
  image: string;
  nextAvailable: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const [showAppointment, setShowAppointment] = React.useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
              <p className="text-gray-600 mb-2">{doctor.specialty}</p>
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-medium">{doctor.rating}</span>
                <span className="text-gray-500">({doctor.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>• {doctor.experience} experience</p>
            <p>• {doctor.education}</p>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <div className="flex items-center text-green-600">
              <Clock className="h-4 w-4 mr-1" />
              <span>Next available: {doctor.nextAvailable}</span>
            </div>
            <div className="flex items-center text-blue-600">
              <Video className="h-4 w-4 mr-1" />
              <span>Online consult</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={() => setShowAppointment(true)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Calendar className="h-4 w-4" />
              Book Visit
            </button>
            <button className="border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
              View Profile
            </button>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={showAppointment}
        onClose={() => setShowAppointment(false)}
        doctor={doctor}
      />
    </>
  );
}