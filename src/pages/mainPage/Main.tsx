import '../../styles/eisenhower.css';
import '../../styles/App.css';
import '../../styles/task.css';
import '../../styles/index.css';
import { ITaskBoxProps } from '../../components/TaskBox';
import EisenhowerBox from '../../components/EisenhowerBox';

export default function Main() {
  const taskBox0: ITaskBoxProps[] = [
    { isChecked: true, taskDescription: 'minecraft' },
    { isChecked: false, taskDescription: 'fortnite' },
  ];
  return (
    <div className="eisenhower-box-grid">
      <EisenhowerBox></EisenhowerBox>
      <EisenhowerBox taskBoxData={taskBox0}></EisenhowerBox>
      <EisenhowerBox taskBoxData={taskBox0}></EisenhowerBox>
      <EisenhowerBox taskBoxData={taskBox0}></EisenhowerBox>
    </div>
  );
}
