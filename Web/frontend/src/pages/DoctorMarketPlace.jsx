
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { CaregiverCard } from '../components/CaregiverCard';

const initialCaregivers = [
  {
    id: 1,
    name: 'John Doe',
    metrics: [
      { label: 'Experience', value: '5 years' },
      { label: 'Location', value: 'New York' },
      { label: 'Specialization', value: 'Dementia Care' }
    ],
    experience: '5 years',
    location: 'New York',
    specializations: ['Dementia Care']
  },
  {
    id: 2,
    name: 'John Doe',
    metrics: [
      { label: 'Experience', value: '5 years' },
      { label: 'Location', value: 'New York' },
      { label: 'Specialization', value: 'Dementia Care' }
    ],
    experience: '5 years',
    location: 'New York',
    specializations: ['Dementia Care']
  },
  {
    id: 3,
    name: 'John Doe',
    metrics: [
      { label: 'Experience', value: '5 years' },
      { label: 'Location', value: 'New York' },
      { label: 'Specialization', value: 'Dementia Care' }
    ],
    experience: '5 years',
    location: 'New York',
    specializations: ['Dementia Care']
  },
  {
    id: 4,
    name: 'John Doe',
    metrics: [
      { label: 'Experience', value: '5 years' },
      { label: 'Location', value: 'New York' },
      { label: 'Specialization', value: 'Dementia Care' }
    ],
    experience: '5 years',
    location: 'New York',
    specializations: ['Dementia Care']
  },
  {
    id: 5,
    name: 'John Doe',
    metrics: [
      { label: 'Experience', value: '5 years' },
      { label: 'Location', value: 'New York' },
      { label: 'Specialization', value: 'Dementia Care' }
    ],
    experience: '5 years',
    location: 'New York',
    specializations: ['Dementia Care']
  },
  {
    id: 6,
    name: 'John Doe',
    metrics: [
      { label: 'Experience', value: '5 years' },
      { label: 'Location', value: 'New York' },
      { label: 'Specialization', value: 'Dementia Care' }
    ],
    experience: '5 years',
    location: 'New York',
    specializations: ['Dementia Care']
  },
  {
    id: 7,
    name: 'John Doe',
    metrics: [
      { label: 'Experience', value: '5 years' },
      { label: 'Location', value: 'New York' },
      { label: 'Specialization', value: 'Dementia Care' }
    ],
    experience: '5 years',
    location: 'New York',
    specializations: ['Dementia Care']
  },
  {
    id: 8,
    name: 'John Doe',
    metrics: [
      { label: 'Experience', value: '5 years' },
      { label: 'Location', value: 'New York' },
      { label: 'Specialization', value: 'Dementia Care' }
    ],
    experience: '5 years',
    location: 'New York',
    specializations: ['Dementia Care']
  },
  {
    id: 9,
    name: 'John Doe',
    metrics: [
      { label: 'Experience', value: '5 years' },
      { label: 'Location', value: 'New York' },
      { label: 'Specialization', value: 'Dementia Care' }
    ],
    experience: '5 years',
    location: 'New York',
    specializations: ['Dementia Care']
  },
  {
    id: 10,
    name: 'Jane Smith',
    metrics: [
      { label: 'Experience', value: '3 years' },
      { label: 'Location', value: 'Los Angeles' },
      { label: 'Specialization', value: 'Physical Therapy' }
    ],
    experience: '3 years',
    location: 'Los Angeles',
    specializations: ['Physical Therapy']
  },
  // Add more dummy caregivers as needed
];

export const DoctorMarketPlace = () => {
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
              GreenButtonName={"Approve"}
              RedButtonName={"Reject"}
              onApprove={() => handleStatusChange(caregiver.id, 'approved')}
              onReject={() => handleStatusChange(caregiver.id, 'rejected')}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
