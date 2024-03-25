import React, { useState } from 'react';

const Button = ({ id }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggled ? `Button ${id} Toggled ON` : `Button ${id} Toggled OFF`}
      </button>
    </div>
  );
};

export default Button;
