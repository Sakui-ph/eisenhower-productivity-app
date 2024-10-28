export interface ITaskBoxProps {
  isChecked: boolean;
  taskDescription: string;
}

export default function TaskBox(props: ITaskBoxProps) {
  const description: string = props.taskDescription;
  let isChecked: boolean = props.isChecked;

  return (
    <div className="task">
      <input type="checkbox" checked={isChecked}></input>
      <div className="task-details">
        <span className="task-description">{description}</span>
      </div>
    </div>
  );
}
