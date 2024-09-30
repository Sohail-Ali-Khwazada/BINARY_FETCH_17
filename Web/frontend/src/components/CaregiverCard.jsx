import React from 'react';

export const CaregiverCard = ({ name, metrics, 
    onApprove, onReject, GreenButtonName, RedButtonName = "" }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-72 p-4 m-4 border-4">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <div className="metrics mb-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex justify-between">
            <strong>{metric.label}:</strong>
            <span>{metric.value}</span>
          </div>
        ))}
      </div>
      <div className="actions flex justify-between">
        <button
          onClick={onApprove}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
        >
          {GreenButtonName}
        </button>
        {
            RedButtonName!=""?
            <button
            onClick={onReject}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
          >
            {RedButtonName}
          </button>:null
        }
      </div>
    </div>
  );
};
