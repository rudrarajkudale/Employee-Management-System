import Header from "../Others/Header";
import TaskList from "../Others/TaskList";
import TaskNumber from "../Others/TaskNumbers";

export default function EmployeeDashboard(props) {
    return (
        <div className="bg-gray-800 h-screen text-white overflow-y-hidden">
            <Header  data={props.data} changeuser={props.changeuser}/>
            <TaskNumber data={props.data}/>
            <TaskList data={props.data}/>
        </ div>        
    );
}
