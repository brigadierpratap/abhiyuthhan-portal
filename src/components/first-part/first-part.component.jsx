import './first-part.styles.css';
import  abhi from '../../assets/first/abhiyuthan_logo.png';
//import  logo from '../../assets/first/robotics_logo.png';
//import  quiz from '../../assets/first/quiz-on-computer-with-question-signs-around.png';
import  ckt from '../../assets/first/circuit-board.png';
import  map from '../../assets/first/treasure-map1.png';
import  pic from '../../assets/first/background.png';
//import { Button } from 'reactstrap';

const FirstPart = () =>{
    return(
        <div>
          <div className="img-slides">
            <img src={ckt} className="ckt" alt=""/>
            <img src={map} className="map" alt=""/>
          </div>
          <div className="myDiv">
            <img src={pic} className="pic" alt=""/>

            <div className="box" >
                <img src={abhi} className="logo" alt=""/>
                 <p>20th  to 28th Feburary</p>

                <h1>An Adventurous expedition</h1>
                <p className="details">"Abhiyuthhan" is a week long technical fest organised by the robotics club counting   in engrossing guest sessions and freaky events celebrating the spirit of robotics and teamwork.
 The techweek, being conducted in virtual mode, aims at providing a common platform to all the tech aficionados to showcase their skills and problem solving abilities. This will also bring some thrill in pandemic induced monotonic life.</p>
               <a class="btn btn-primary" href="https://drive.google.com/drive/folders/1-TG6HW0gpxX-1XZQYXGh4Tp38VjgG5Xg?usp=sharing" target="new" role="button">Download Rulebook</a>

            </div>
            </div>

        </div>
    )
}

export default FirstPart;
