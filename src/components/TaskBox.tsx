import React, { useEffect, useState } from 'react';

export interface ITaskBoxProps {
  isChecked: boolean;
  taskDescription: string;
}

export default function TaskBox(props: ITaskBoxProps) {
  const [isMouseDownInside, setIsMouseDownInside] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  });

  const description: string = props.taskDescription;
  const isChecked: boolean = props.isChecked;

  const handleMouseDown = () => {
    setIsMouseDownInside(true);
  };
  const handleMouseUp = () => {
    setIsMouseDownInside(false);
  };
  const handleMouseMove = (event: React.MouseEvent) => {
    if (isMouseDownInside) {
      const newLeft = position.left + event.movementX;
      const newTop = position.top + event.movementY;
      setPosition({ left: newLeft, top: newTop });
    }
  };

  useEffect(() => {}, [position]);

  return (
    <div
      style={position}
      className="task"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <input type="checkbox" defaultChecked={isChecked}></input>
      <div className="task-details">
        <span className="task-description">{description}</span>
      </div>
    </div>
  );
}
