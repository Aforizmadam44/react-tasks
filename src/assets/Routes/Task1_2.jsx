import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Task.module.css';
import Home from '../Home';

function App() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {

    axios.get(`https://api.github.com/users/Ali-GreenHeart/followers`)
      .then(response => {
        setFollowers(response.data);
      })
      .catch(error => {
        console.error('error:', error);
      });
  }, []);

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Follower adları və rəsmləri</h1>
        {followers.map(follower => (
            <>
             <div key={follower.id} className={styles.followersTitle}>{follower.login}</div>  
              <div key={follower.id} className={styles.followersPhoto}><img src={follower.avatar_url} /></div>
             <hr />       
            </>
          ))}
    </div>
  );
}

export default App;
