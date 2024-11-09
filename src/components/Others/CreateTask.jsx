import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { setLocalStorage } from "../../utils/LocalStorage"; 

export default function CreateTask() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [assignee, setAssignee] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const [userData, setUserData] = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = { 
            title, 
            description, 
            date, 
            category, 
            active: false,  
            newTask: true, 
            failed: false, 
            completed: false 
        };

        const updatedEmployees = userData.employees.map((employee) => {
            if (employee.firstName === assignee) {
                employee.tasks.push(newTask);   
                employee.taskCount.newTask += 1;  
            }
            return employee;
        });

        setUserData({ employees: updatedEmployees });
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));

        setTitle("");
        setDate("");
        setAssignee("");
        setCategory("");
        setDescription("");
    };

    return (
        <form onSubmit={submitHandler} className="flex gap-10 p-10 bg-gray-700 mx-5 rounded-md">
            <div className="flex flex-col gap-4 w-1/2 mr-20">
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg flex-shrink-0 w-28">Task Title:</h3>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Make a UI Design"
                        className="bg-transparent p-2 rounded-md w-full text-white border-white border"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg flex-shrink-0 w-28">Date:</h3>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="bg-transparent p-2 rounded-md w-full text-white border-white border"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg flex-shrink-0 w-28">Assign to:</h3>
                    <input
                        value={assignee}
                        onChange={(e) => setAssignee(e.target.value)}
                        placeholder="Employee name"
                        className="bg-transparent p-2 rounded-md w-full text-white border-white border"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg flex-shrink-0 w-28">Category:</h3>
                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Design, Dev, etc."
                        className="bg-transparent p-2 rounded-md w-full text-white border-white border"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2">
                <div>
                    <h3 className="font-semibold text-lg mb-3">Description:</h3>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-transparent p-2 rounded-md w-full h-28 text-white border-white border"
                        placeholder="Task description..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-8 rounded-lg"
                >
                    Save Task
                </button>
            </div>
        </form>
    );
}
