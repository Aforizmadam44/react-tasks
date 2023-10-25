import axios from "axios"
import { useEffect, useState } from "react"
import styles from './Task.module.css';
import Home from "../Home";

const Task1_3 = () => {
    const[userRepo, setUserRepo] =useState([])
    useEffect(() =>{
        axios.get("https://api.github.com/users/Ali-GreenHeart/repos").then((response) =>
      
        { const tenRepos= response.data.slice(0,10)  
         setUserRepo(tenRepos)}) 
        .catch(error => {
            console.error('error:', error);
        });
    }, [])
  return (
    <div>
        <h1 className={styles.titleRepo}>Repos name</h1>
             <ul>
             {userRepo.map(repo => (
               <p key={repo.id} className={styles.repoTitle}>{repo.name}</p>
             ))}
           </ul>
        </div>
  )
}

export default Task1_3