import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function Status() {
    const [userData] = useContext(AuthContext);
    
    return (
        <div className="p-5 bg-gray-700 m-5 rounded-md flex flex-col flex-grow">
            {/* Header Row */}
            <div className="bg-red-500 text-white p-4 rounded-lg flex justify-between text-center">
                <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
                <h3 className="text-lg font-medium w-1/5">New Task</h3>
                <h3 className="text-lg font-medium w-1/5">Active Task</h3>
                <h3 className="text-lg font-medium w-1/5">Completed Task</h3>
                <h3 className="text-lg font-medium w-1/5">Failed Task</h3>
            </div>

            {/* Employee Data Rows */}
            {userData.employees.map((employee, idx) => (
                <div
                    className="p-4 rounded-lg flex justify-between my-2 border border-emerald-500 bg-transparent text-center"
                    key={idx}
                >
                    <h2 className="text-lg font-medium w-1/5 text-white">{employee.firstName}</h2>
                    <h3 className="text-lg font-medium w-1/5 text-blue-500">{employee.taskCount.newTask}</h3>
                    <h3 className="text-lg font-medium w-1/5 text-green-500">{employee.taskCount.active}</h3>
                    <h3 className="text-lg font-medium w-1/5 text-yellow-500">{employee.taskCount.completed}</h3>
                    <h3 className="text-lg font-medium w-1/5 text-red-500">{employee.taskCount.failed}</h3>
                </div>
            ))}
        </div>
    );
}
