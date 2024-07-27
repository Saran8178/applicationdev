import React from 'react';
import { Separator } from "@/components/ui/separator";

const logos = {
  Accenture: 'https://ik.imagekit.io/2xni35fuk/applicationsemfive/Accenture-Emblem.png?',
  'National Instruments': 'https://ik.imagekit.io/2xni35fuk/applicationsemfive/national-instruments-logo-7B17A88280-seeklogo.com.png?updatedAt=1722011298565',
  Zoho: 'https://ik.imagekit.io/2xni35fuk/applicationsemfive/Zoho_Corporation-Logo.wine.png?updatedAt=1722011384487',
  Wipro: 'https://ik.imagekit.io/2xni35fuk/applicationsemfive/Wipro-logo.png?updatedAt=1722011699872',
  Wavity: 'https://ik.imagekit.io/2xni35fuk/applicationsemfive/abstract-circle-wave-logo-png-image-11.png?updatedAt=1722011832689',
  'Synergy Electric': 'https://ik.imagekit.io/2xni35fuk/applicationsemfive/exact_synergy_z5ycbt.webp?updatedAt=1722011984597',
};

const Userjobs = () => {

  const cardData = [
    { title: 'Accenture', description: 'Candidates who have configuration experience of Apache, nginx, mySQL, Microsoft SQL and PostgreSQL along with Linux..' },
    { title: 'National Instruments', description: 'Candidates who have configuration experience of Apache, nginx, mySQL, Microsoft SQL and PostgreSQL along with Linux.' },
    { title: 'Zoho', description: 'Candidates who have configuration experience of Apache, nginx, mySQL, Microsoft SQL and PostgreSQL along with Linux.' },
    { title: 'Wipro', description: 'Candidates who have configuration experience of Apache, nginx, mySQL, Microsoft SQL and PostgreSQL along with Linux.' },
    { title: 'Wavity', description: 'Candidates who have configuration experience of Apache, nginx, mySQL, Microsoft SQL and PostgreSQL along with Linux.' },
    { title: 'Synergy Electric', description: 'Candidates who have configuration experience of Apache, nginx, mySQL, Microsoft SQL and PostgreSQL along with Linux.' },
  ];

  return (
    <div className='p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className='bg-white p-4 shadow-lg rounded-lg min-h-[200px] flex flex-col justify-between' // Flexbox for layout
          >
            <div className='flex items-center mb-4'>
              <img 
                src={logos[card.title]} 
                alt={`${card.title} logo`} 
                className='w-8 h-8 mr-2' 
              /> {/* Logo next to the title */}
              <h2 className='text-xl font-bold'>{card.title}</h2> {/* Title centered at the top */}
            </div>
            <div className='flex-1 flex items-center justify-center'>
              <p className='text-center'>{card.description}</p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>FullTime</div>
              <Separator orientation="vertical" />
              <div>Hyderbad</div>
              <Separator orientation="vertical" />
              <div>₹50,000-₹80,000</div>
            </div>
            <div className='mt-4 text-center'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                Apply Now
              </button> {/* Blue button with hover effect */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Userjobs;
