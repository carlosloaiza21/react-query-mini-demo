import axios from "axios";
const url='http://localhost:3000/task/';

export const getTask=async()=>{
    const data=  await axios.get(url);
    return data.data;
}

export const addTask=async (data)=>{
    await axios.post(url,{
        name:data,
        status: false
    });
}

export const deleteTask=async(id)=>await axios.delete(`${url}${id}`,{
    status:false
})




