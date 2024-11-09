import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function TaskNumber({data}) {
    
    const [userData] = useContext(AuthContext);   
    const employee = userData ? userData.employees.find((emp) => emp.id === data.id) : null;
    const { newTask, active, completed, failed } = employee.taskCount;

    return (
        <div className="flex p-10">
            <div className="bg-blue-600 flex flex-col h-24 w-[30%] m-5 p-5 rounded-lg">
                <h1 className="bg-transparent text-white text-2xl font-bold">{newTask}</h1>
                <h2 className="bg-transparent text-white text-xl font-bold">New Task</h2>
            </div>
            <div className="bg-yellow-400 flex flex-col h-24 w-[30%] m-5 p-5 rounded-lg">
                <h1 className="bg-transparent text-white text-2xl font-bold">{active}</h1>
                <h2 className="bg-transparent text-white text-xl font-bold">Accepted</h2>
            </div>
            <div className="bg-green-600 flex flex-col h-24 w-[30%] m-5 p-5 rounded-lg">
                <h1 className="bg-transparent text-white text-2xl font-bold">{completed}</h1>
                <h2 className="bg-transparent text-white text-xl font-bold">Completed</h2>
            </div>
            <div className="bg-red-600 flex flex-col h-24 w-[30%] m-5 p-5 rounded-lg">
                <h1 className="bg-transparent text-white text-2xl font-bold">{failed}</h1>
                <h2 className="bg-transparent text-white text-xl font-bold">Failed</h2>
            </div>
        </div>
    );
}
