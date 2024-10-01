import React from 'react';

export function CareGiverMoreInfo({ onClose, name, profilePhoto = "https://img.freepik.com/premium-vector/avatar-bearded-doctor-doctor-with-stethoscope-vector-illustrationxa_276184-31.jpg" }) {
    
    const initialCaregivers = [
        {
          id: 1,
          name: 'John Doe',
          metrics: [
            { label: 'Experience', value: '4 years' },
            { label: 'Location', value: 'Mumbai' },
            { label: 'Specialization', value: 'Paralysis Care' },
            { label: 'Success Rate', value: '95%' },
            { label: 'Rating', value: '4.7/5' },
            { label: 'Number of Clients Served', value: '50' },
            { label: 'Client Reviews', value: 'Excellent feedback' },
            { label: 'Availability', value: 'Full-time' }
          ],
        },
        {
          id: 2,
          name: 'Rory McDonalds',
          metrics: [
            { label: 'Experience', value: '7 years' },
            { label: 'Location', value: 'Pune' },
            { label: 'Specialization', value: 'Dementia Care' },
            { label: 'Success Rate', value: '90%' },
            { label: 'Rating', value: '4.5/5' },
            { label: 'Number of Clients Served', value: '60' },
            { label: 'Client Reviews', value: 'Positive' },
            { label: 'Availability', value: 'Part-time' }
          ],
        },
        {
          id: 3,
          name: 'Jake Ellenburger',
          metrics: [
            { label: 'Experience', value: '12 years' },
            { label: 'Location', value: 'Banglore' },
            { label: 'Specialization', value: 'Post Operation Care' },
            { label: 'Success Rate', value: '98%' },
            { label: 'Rating', value: '4.9/5' },
            { label: 'Number of Clients Served', value: '100+' },
            { label: 'Client Reviews', value: 'Outstanding' },
            { label: 'Availability', value: 'Full-time' }
          ]
        },
        {
          id: 4,
          name: 'John Wick',
          metrics: [
            { label: 'Experience', value: '16 years' },
            { label: 'Location', value: 'Delhi' },
            { label: 'Specialization', value: 'General Care' },
            { label: 'Success Rate', value: '85%' },
            { label: 'Rating', value: '4.2/5' },
            { label: 'Number of Clients Served', value: '120' },
            { label: 'Client Reviews', value: 'Good' },
            { label: 'Availability', value: 'Full-time' }
          ]
        },
        {
          id: 5,
          name: 'Mark Ruffallo',
          metrics: [
            { label: 'Experience', value: '1 year' },
            { label: 'Location', value: 'Calcutta' },
            { label: 'Specialization', value: 'Physical Therapy' },
            { label: 'Success Rate', value: '70%' },
            { label: 'Rating', value: '3.8/5' },
            { label: 'Number of Clients Served', value: '20' },
            { label: 'Client Reviews', value: 'Mixed' },
            { label: 'Availability', value: 'Part-time' }
          ]
        },
        {
          id: 6,
          name: 'Robert Downey',
          metrics: [
            { label: 'Experience', value: '3 years' },
            { label: 'Location', value: 'Goa' },
            { label: 'Specialization', value: 'Dementia Care' },
            { label: 'Success Rate', value: '92%' },
            { label: 'Rating', value: '4.6/5' },
            { label: 'Number of Clients Served', value: '35' },
            { label: 'Client Reviews', value: 'Very positive' },
            { label: 'Availability', value: 'Full-time' }
          ]
        },
        {
          id: 7,
          name: 'Cillian Murphy',
          metrics: [
            { label: 'Experience', value: '8 years' },
            { label: 'Location', value: 'Gujrat' },
            { label: 'Specialization', value: 'General Care' },
            { label: 'Success Rate', value: '88%' },
            { label: 'Rating', value: '4.4/5' },
            { label: 'Number of Clients Served', value: '80' },
            { label: 'Client Reviews', value: 'Positive' },
            { label: 'Availability', value: 'Part-time' }
          ]
        },
        {
          id: 8,
          name: 'Ray Fischer',
          metrics: [
            { label: 'Experience', value: '2 years' },
            { label: 'Location', value: 'Kerala' },
            { label: 'Specialization', value: 'Post Operation Care' },
            { label: 'Success Rate', value: '75%' },
            { label: 'Rating', value: '4.0/5' },
            { label: 'Number of Clients Served', value: '25' },
            { label: 'Client Reviews', value: 'Mixed feedback' },
            { label: 'Availability', value: 'Full-time' }
          ]
        },
        {
          id: 9,
          name: 'Barry Allen',
          metrics: [
            { label: 'Experience', value: '1 year' },
            { label: 'Location', value: 'Madhya Pradesh' },
            { label: 'Specialization', value: 'Alzheimer’s Care' },
            { label: 'Success Rate', value: '80%' },
            { label: 'Rating', value: '4.1/5' },
            { label: 'Number of Clients Served', value: '15' },
            { label: 'Client Reviews', value: 'Positive' },
            { label: 'Availability', value: 'Part-time' }
          ]
        },
        {
          id: 10,
          name: 'Jane Smith',
          metrics: [
            { label: 'Experience', value: '15 years' },
            { label: 'Location', value: 'Kashmir' },
            { label: 'Specialization', value: 'Physical Therapy' },
            { label: 'Success Rate', value: '94%' },
            { label: 'Rating', value: '4.7/5' },
            { label: 'Number of Clients Served', value: '110' },
            { label: 'Client Reviews', value: 'Very positive' },
            { label: 'Availability', value: 'Full-time' }
          ]
        }
      ];      
    
    // Find the selected caregiver
    const selectedCaregiver = initialCaregivers.find(caregiver => caregiver.name === name);

    return (
        <div className='fixed inset-0 flex items-center justify-center backdrop-blur-lg z-10 '>
            <div className='relative w-auto h-auto bg-blue-950 text-white font-bold border-4 p-6 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold mb-4'>Care Giver: {selectedCaregiver.name}</h2>
                
                <div className='flex space-x-4'>
                    <div className='w-1/2'>
                        <img
                            src={profilePhoto}
                            alt={`${name}'s Profile`}
                            className='w-full h-auto rounded-lg'
                        />
                    </div>

                    <div className='w-1/2'>
                        <ul className='list-disc ml-6 mb-4'>
                            {selectedCaregiver && selectedCaregiver.metrics.map((metric, index) => (
                                <li key={index}>
                                    {metric.label}: {metric.value}
                                    <br />
                                    <br />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
                >
                    Close
                </button>
            </div>
        </div>
    );
}
