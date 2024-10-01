// import React, { useState, useEffect } from 'react';
// import { CaregiverCard } from '../components/CaregiverCard'; 

// export const DoctorMarketPlace = () => {
//   const [caregivers, setCaregivers] = useState([]);
//   const [filters, setFilters] = useState({ experience: '', location: '', specialization: '' });

//   useEffect(() => {
//     // Fetch caregivers with 'pending' status from the database
//     const fetchCaregivers = async () => {
//       const response = await fetch('/api/caregivers?status=pending');
//       const data = await response.json();
//       setCaregivers(data);
//     };
    
//     // fetchCaregivers();
//   }, []);

//   // Filter caregivers based on selected filters
//   const filteredCaregivers = caregivers.filter(caregiver => {
//     // Add filtering logic based on the filters state
//     return (
//       (filters.experience ? caregiver.experience === filters.experience : true) &&
//       (filters.location ? caregiver.location === filters.location : true) &&
//       (filters.specialization ? caregiver.specializations.includes(filters.specialization) : true)
//     );
//   });

//   return (
//     <div>
//       <h1>Pending Caregiver Requests</h1>
//       {/* Filter Options Component */}
//       <div>
//         {/* Add filter inputs here, updating `setFilters` accordingly */}
//       </div>
//       <div className="caregiver-list">
//         {filteredCaregivers.map(caregiver => (
//           <CaregiverCard
//             key={caregiver.id}
//             name={caregiver.name}
//             metrics={caregiver.metrics}
//             onApprove={() => handleStatusChange(caregiver.id, 'approved')}
//             onReject={() => handleStatusChange(caregiver.id, 'rejected')}
//           />
//         ))}
//       </div>
//     </div>
//   );

//   // Function to handle status changes
//   const handleStatusChange = async (id, newStatus) => {
//     await fetch(`/api/caregivers/${id}/status`, {
//       method: 'PATCH',
//       body: JSON.stringify({ status: newStatus }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     // Update state after approval/rejection if needed
//   };
// };































import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { CaregiverCard } from '../components/CaregiverCard';
import { CareGiverMoreInfo } from '../components/CareGiverMoreInfo';

const initialCaregivers = [
  {
    id: 1,
    name: 'John Doe',
    metrics: [
      { label: 'Experience', value: '4 years' },
      { label: 'Location', value: 'Mumbai' },
      { label: 'Specialization', value: 'Paralysis Care' }
    ],
  },
  {
    id: 2,
    name: 'Rory McDonalds',
    metrics: [
      { label: 'Experience', value: '7 years' },
      { label: 'Location', value: 'Pune' },
      { label: 'Specialization', value: 'Dementia Care' }
    ],
    experience: '5 years',
    location: 'New York',
    specializations: ['Alziemer Care']
  },
  {
    id: 3,
    name: 'Jake Ellenburger',
    metrics: [
      { label: 'Experience', value: '12 years' },
      { label: 'Location', value: 'Banglore' },
      { label: 'Specialization', value: 'Post Operation Care' }
    ]
  },
  {
    id: 4,
    name: 'John Wick',
    metrics: [
      { label: 'Experience', value: '16 years' },
      { label: 'Location', value: 'Delhi' },
      { label: 'Specialization', value: 'General Care' }
    ]
  },
  {
    id: 5,
    name: 'Mark Ruffallo',
    metrics: [
      { label: 'Experience', value: '1 years' },
      { label: 'Location', value: 'Calcutta' },
      { label: 'Specialization', value: 'Physical Therapy' }
    ]
  },
  {
    id: 6,
    name: 'Robert Downey',
    metrics: [
      { label: 'Experience', value: '3 years' },
      { label: 'Location', value: 'Goa' },
      { label: 'Specialization', value: 'Dementia Care' }
    ]
  },
  {
    id: 7,
    name: 'Cillian Murphy',
    metrics: [
      { label: 'Experience', value: '8 years' },
      { label: 'Location', value: 'Gujhrat' },
      { label: 'Specialization', value: 'General Care' }
    ],
  },
  {
    id: 8,
    name: 'Ray Fischer',
    metrics: [
      { label: 'Experience', value: '2 years' },
      { label: 'Location', value: 'Kerela' },
      { label: 'Specialization', value: 'Post Operation Care' }
    ],
  },
  {
    id: 9,
    name: 'Barry Allen',
    metrics: [
      { label: 'Experience', value: '1 years' },
      { label: 'Location', value: 'Madhya Pradesh' },
      { label: 'Specialization', value: 'Alziemers Care' }
    ],
  },
  {
    id: 10,
    name: 'Jane Smith',
    metrics: [
      { label: 'Experience', value: '15 years' },
      { label: 'Location', value: 'Kashmir' },
      { label: 'Specialization', value: 'Physical Therapy' }
    ],
  },
  // Add more dummy caregivers as needed
];

export const FamilyMarketPlace = () => {
  const [caregivers, setCaregivers] = useState(initialCaregivers);
  const [filters, setFilters] = useState({ experience: '', location: '', specialization: '' });

  const filteredCaregivers = caregivers.filter(caregiver => {
    return (
      (filters.experience ? caregiver.experience === filters.experience : true) &&
      (filters.location ? caregiver.location === filters.location : true) &&
      (filters.specialization ? caregiver.specializations.includes(filters.specialization) : true)
    );
  });

  const handleStatusChange = (id, newStatus) => {
    console.log(`Caregiver ${id} has been ${newStatus}.`);
    toast.success(`Caregiver ${id} has been ${newStatus}.`);
    
    // Remove the caregiver from the list
    setCaregivers(prevCaregivers => prevCaregivers.filter(caregiver => caregiver.id !== id));
  };

  return (
    <div className="p-4">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">Pending Caregiver Requests</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Experience"
          value={filters.experience}
          onChange={e => setFilters({ ...filters, experience: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={filters.location}
          onChange={e => setFilters({ ...filters, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Specialization"
          value={filters.specialization}
          onChange={e => setFilters({ ...filters, specialization: e.target.value })}
        />
      </div>
      <div className="flex flex-wrap justify-between">
        {filteredCaregivers.map(caregiver => (
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={caregiver.id}>
            <CaregiverCard
              name={caregiver.name}
              metrics={caregiver.metrics}
              GreenButtonName={"Hire"}
              RedButtonName={"More Info"}
              onApprove={() => handleStatusChange(caregiver.id, 'approved')}
              onReject={() => handleStatusChange(caregiver.id, 'rejected')}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
