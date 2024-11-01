import React from 'react';
import { Stethoscope, Brain, Heart, Baby, Bone, Activity } from 'lucide-react';

const SERVICES = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Expert care for heart conditions with advanced diagnostic and treatment options.',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Specialized treatment for neurological disorders and brain health.',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Comprehensive healthcare for children from newborns to adolescents.',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Treatment for bone, joint, and muscle conditions.',
  },
  {
    icon: Activity,
    title: 'General Medicine',
    description: 'Primary healthcare services for all your medical needs.',
  },
  {
    icon: Stethoscope,
    title: 'Internal Medicine',
    description: 'Diagnosis and treatment of adult diseases and conditions.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Medical Services</h2>
          <p className="text-gray-600">
            We offer a comprehensive range of medical services to meet all your healthcare needs.
            Our specialists are here to provide you with the best care possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}