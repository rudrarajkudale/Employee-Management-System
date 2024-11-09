import CreateTask from "../Others/CreateTask";
import Header from "../Others/Header";
import Status from "../Others/Status";

export default function AdminDashboard(props) {
    return (
        <div className="bg-gray-800 text-white flex flex-col">
            <Header changeuser={props.changeuser}/>
            <CreateTask />
            <Status />
        </div>
    );
}
