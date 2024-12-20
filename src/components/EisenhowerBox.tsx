import TaskBox, { ITaskBoxProps } from './TaskBox';

interface IEisenhowerGridProps {
  taskBoxData?: ITaskBoxProps[];
}

export default function EisenhowerBox(props: IEisenhowerGridProps) {
  const taskBoxData = props.taskBoxData;
  return (
    <div className="eisenhower-box">
      {taskBoxData != null ? (
        taskBoxData.map((taskBoxProp, index) => {
          return (
            <TaskBox
              key={index}
              isChecked={taskBoxProp.isChecked}
              taskDescription={taskBoxProp.taskDescription}
            ></TaskBox>
          );
        })
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
}
