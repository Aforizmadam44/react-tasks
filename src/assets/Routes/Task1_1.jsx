import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Task.module.css';
import Home from '../Home';

function Task1() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios.get("https://api.github.com/users/Ali-GreenHeart")
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('error:', error);
      });
    },[]);


  return (
    <div>
      <div style={{textAlign:"center"}}>
        <h1>İstifadəçi məlumatları</h1>
        <img src={userData.avatar_url} />
        <p><span className={styles.title}>İstifadəçi adı:</span> {userData.login}</p>
        <p><span className={styles.title}>Məskən:</span> {userData.location}</p>
        <p><span className={styles.title}>Motto:</span> {userData.bio}</p>
        <p><span className={styles.title}>Repo sayı:</span> {userData.public_repos}</p>
        <p> <span className={styles.title}>İzləyici sayı:</span> {userData.followers}</p>
      </div>  
    </div>
  );
}

export default Task1;
