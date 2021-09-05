import "./register-card.css";
// import demo from "../../assets/demo-event.jpg";
import { Link } from "react-router-dom";

const Card=({name,img,description,path,currentUser,type})=>{
	const onClick=()=>{
		if(!currentUser)
			alert('Signin to proceed');
	}
    return(
      <div className='registration-card'>
  			<img src={img} alt="card-img"/>
  			<h2 style={{fontWeight:'bold',fontFamily: `"Lucida Console","Courier New", monospace`}}>{name}</h2>
  			<p>{description}</p>
        {
            (type==="anotherweb")?
            <a className='register-btn' href={path} target="blank">Register here</a>:
            <Link className='register-btn' to={path} onClick={onClick}>Register here</Link>
        }
      </div>
    );
}

export default Card;
