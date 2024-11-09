import { useContext, useRef } from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";
import { AuthContext } from "../../context/AuthProvider";

export default function TaskList({data}){

    const scrollContainerRef = useRef(null);

    const handleScroll = (e) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += e.deltaY;
        }
    };

    const [userData] = useContext(AuthContext);   
    const employee = userData ? userData.employees.find((emp) => emp.id === data.id) : null;

    return(
        <div
            className="px-10 overflow-x-auto flex items-center pb-5"
            ref={scrollContainerRef}
            onWheel={handleScroll}
        >
            {employee.tasks.map((e, idx) => {
                if(e.newTask){
                    return <NewTask data={e} employee={employee} key={idx}/>
                }
                if(e.active){
                    return <AcceptTask data={e} employee={employee} key={idx}/>
                }
                if(e.completed){
                    return <CompleteTask data={e} key={idx}/>
                }
                if(e.failed){
                    return <FailedTask data={e} key={idx}/>
                }
            })}
        </div>
    )
}