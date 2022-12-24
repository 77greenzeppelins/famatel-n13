import React from 'react';

const TextSection: React.FunctionComponent<{ categoryIndex: number }> = ({
  categoryIndex,
}) => {
  return (
    <div>
      <p className="text-2x text-grey">{`categoryIndex: ${categoryIndex}`}</p>
    </div>
  );
};

export default TextSection;
