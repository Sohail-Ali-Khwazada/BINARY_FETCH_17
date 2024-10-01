import React, { useState } from "react";
import { CareGiverMoreInfo } from "./CareGiverMoreInfo";

export const CaregiverCard = ({
  name,
  metrics,
  onApprove,
  onReject,
  GreenButtonName,
  RedButtonName = "",
}) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreInfo = () => {
    setShowMoreInfo(true);
  };

  const handleCloseMoreInfo = () => {
    setShowMoreInfo(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg w-auto p-4 m-4 border-4">
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

        {RedButtonName == "Reject" && (
          <>
            <button
              onClick={onReject}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
            >
              {RedButtonName}
            </button>
            <button
              onClick={handleMoreInfo}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            >
              More Info
            </button>
          </>
        )}

        {RedButtonName === "More Info" && (
          <button
            onClick={handleMoreInfo}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            More Info
          </button>
        )}
      </div>

      {showMoreInfo && (
        <CareGiverMoreInfo
          onClose={handleCloseMoreInfo}
          name={name}
          metrics={metrics}
          // profilePhoto="https://your-image-url.jpg"
        />
      )}
    </div>
  );
};
