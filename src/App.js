import './App.css';
import TableComponent from './Components/Table';
import  AddTask  from './Components/AddTask';
import {getTask, addTask, deleteTask} from './Api';
import { useQuery, useMutation, useQueryClient } from 'react-query';


const App=()=> {

    const client=useQueryClient();

    const query=useQuery('getData',getTask,{

    });
    const create=useMutation(addTask,{
        onSuccess:()=>{
            client.invalidateQueries('getData')
            client.clear()
        }
    });

    const del=useMutation(deleteTask,{
        onSuccess:()=>{
            client.invalidateQueries('getData')
        }
    })

    const save=(name)=>{
        create.mutate(name)
    }

    const deleteElement=(id)=>{
        del.mutate(id)
    }

    const {isLoading, error, data} = query;

    if(isLoading) return <h1>Loading...</h1>
    if(error) return <h1>{error.message}</h1>


    return (
        <div className="App">
            <div>
                <AddTask onSave={save}/>
            </div>
            <div>
                <TableComponent
                    onDelete={deleteElement}
                    data={data}
                />
            </div>
        </div>
    );
}

export default App;
