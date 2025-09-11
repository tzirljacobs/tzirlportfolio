import React from 'react';
import ProjectPage from '../../components/ProjectPage';

export default function CycleAway() {
  const projectData = {
    title: 'CycleAway Rental App',
    type: 'fullstack',
    overview:
      'A full-stack React app built from scratch for managing a cycle rental service with real-time customer and employee dashboards.',
    sections: [
      {
        title: 'Key Features',
        type: 'list',
        content: [
          'Address autocomplete and live map display for location services',
          'Role-based authentication for customers and employees',
          'Integrated Stripe payment processing',
          'Print functionality for rental agreements and receipts',
          'Real-time asset tracking system',
          'Custom PostgreSQL schema design',
        ],
      },
    ],
    technologies: ['React', 'Supabase', 'PostgreSQL'],
    liveLink: 'https://cycleaway.vercel.app',
    images: [
      {
        url: '/projects/cycleaway/dashboard.jpg',
        caption: 'Main dashboard showing bike availability and bookings',
      },
      {
        url: '/projects/cycleaway/booking.jpg',
        caption: 'Booking interface with map location selection',
      },
      {
        url: '/projects/cycleaway/admin.jpg',
        caption: 'Admin dashboard for managing rentals and inventory',
      },
      {
        url: '/projects/cycleaway/mobile.jpg',
        caption: 'Mobile responsive view of the customer interface',
      },
    ],
  };

  return <ProjectPage {...projectData} />;
}
