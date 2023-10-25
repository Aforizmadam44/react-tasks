import { NavLink } from "react-router-dom";

function Navigation({to, title}){
return(
<NavLink to={to} style={({isActive})=>({color:isActive? "red" : "default"} ) }>
{title}
</NavLink>)
}
const Home = () => {
  return (
    <div style={{textAlign:"center"}} >
    <h1 style={{textAlign:"center"}}>Alion Greenheart💚 github profile</h1>
      <Navigation to="/" title="Home"/>
     <Navigation  to="/task1" title="Task1"/>
     <Navigation  to="/task2" title="Task2"/>
     <Navigation  to="/task3" title="Task3"/>
    </div>
  )
}

export default Home