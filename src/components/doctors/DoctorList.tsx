import React from 'react';
import { Star, Clock, Video, Calendar } from 'lucide-react';
import DoctorCard from './DoctorCard';

const MOCK_DOCTORS = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    rating: 4.9,
    reviews: 127,
    experience: '15 years',
    education: 'Harvard Medical School',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    nextAvailable: 'Today',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Dermatology',
    rating: 4.8,
    reviews: 98,
    experience: '12 years',
    education: 'Stanford Medical School',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80',
    nextAvailable: 'Tomorrow',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    rating: 4.9,
    reviews: 156,
    experience: '10 years',
    education: 'Johns Hopkins School of Medicine',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80',
    nextAvailable: 'Today',
  },
];

export default function DoctorList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {MOCK_DOCTORS.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}