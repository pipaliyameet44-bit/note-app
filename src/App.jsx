import { useState } from "react";

const App = () => {
  const [Title, setTitle] = useState("");
  const [Notes, setNotes] = useState("");
  const [Tasks, setTasks] = useState([]);
  function SubmitForm(){
    console.log("task added",{Heading:Title,List:Notes});
    let newTask=[...Tasks];
    newTask.push({Heading:Title,List:Notes});
    setTasks(newTask);

    console.log(Tasks);
    setTitle("");
    setNotes("");
    
    
  }
  return (
    <>
      <section className="lg:flex items-center justify-center">
        {/* form for add new task */}
        <div className="lg:w-1/2 w-full h-screen flex items-center justify-center px-4">
          <div className="bg-black/20 max-w-sm p-4 rounded-3xl">
            <form className="bg-black text-white w-full rounded-2xl p-8 shadow-lg space-y-5" onSubmit={(e)=>{
              e.preventDefault();
              SubmitForm();
            }}>
            <h1 className="text-3xl font-bold text-center mb-6">Add Your Task</h1>
            <input type="text" onChange={(e)=>{
              setTitle(e.target.value);
            }} className="w-full bg-white text-black px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 placeholder-gray-500" placeholder="Heading" value={Title}/>
            <textarea onChange={(e)=>{
              setNotes(e.target.value);
            }} value={Notes} placeholder="Notes..." className="w-full bg-white text-black px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 placeholder-gray-500 min-h-24 resize-none"></textarea>
            <input type="submit" value="Add task" className="w-full bg-amber-600 text-white font-bold py-3 rounded-lg hover:bg-amber-700 transition-colors cursor-pointer active:bg-black/50 active:text-white"/>
          </form>
          </div>
        </div>
        {/* div for show all tasks */}
        <div className='lg:w-1/2 w-full h-screen lg:border-l-2 max-lg:border-t-2 border-dashed bg-gray-200 flex flex-wrap items-center justify-center p-6 gap-6 overflow-auto'>



          {Tasks.map((task,id)=>{
            return(
            <div className="w-full max-w-72 h-72 bg-white rounded-4xl shadow-2xl flex items-end justify-center p-3 relative" key={id}>
            <img src="./image.png" alt="" className="w-15 h-10 absolute z-10 top-2"/>
            <div className="w-full h-54 bg-orange-200 rounded-4xl p-4">
              <h1 className="text-3xl font-bold">{id+1}</h1>
              <h1 className="text-2xl font-semibold text-center my-1">{task.Heading}</h1>
              <p className="text-gray-400 font-medium text-xl">{task.List}</p>
            </div>
          </div>);
          })}
        </div>
      </section>
    </>
  )
}

export default App;
