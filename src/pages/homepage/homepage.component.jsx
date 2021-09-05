import RegistrationCard from '../../components/cards/register-card.js';
import Footer from '../../components/Footer/footer.component';
import FirstPart from '../../components/first-part/first-part.component'
import './homepage.styles.css';
import logo from '../../assets/logo.png';
import D2D from '../../assets/Design2Debug.jpg';
import KP from '../../assets/Kasperable.jpg';
import LOC from '../../assets/Loop-of-Codes.jpeg';
import QoQ from '../../assets/Quiz-o-quest.jpg';

import Eventschedule from '../../components/event-schedule/event-schedule.component';
import Sponsors from '../../components/sponsors/sponsors.component';
import Speakers from '../../components/speakers/speakers.component';

import Prizes from '../../components/prizes/C';



const Homepage=({currentUser,img})=>{
    return(
        <div className="wrap">
          <FirstPart/>
            <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
                <RegistrationCard path="/Quiz" currentUser={currentUser} img={QoQ} name='Quiz-o-Quest' description='An event, only there to test your aptitude, knowledge and intelligent quotient, giving you a chance to prove your mettle.'/>
                <RegistrationCard path="/Kasa-parabel" currentUser={currentUser} img={KP} name='KasParable' description='There can be nothing adventurous than solving a quest by decoding clues, one after the other, leading you to an amazing treasure.'/>
                <RegistrationCard path="/design-to-debug" currentUser={currentUser} img={D2D} name='Design 2 Debug' description='An event, so fulfilled, designed specially to test your designing skills, you got to debug some circuits to be our charming winner.'/>
                <RegistrationCard path="https://www.codingninjas.com/events/ninja-prestige-loop-of-codes-at-nit-patna" type="anotherweb" img={LOC} currentUser={currentUser} name='Loop of Codes' description='All you need to do is  code hard extending your limits touching sky high and you get to brag yourself as hard-core coder.'/>
            </div>
            <Eventschedule/>
            <Speakers/>
            <br/>
            <h1>PRIZES</h1>
            <br/>
            <Prizes/>
            <Sponsors/>
            <Footer/>
        </div>
    )
}

export default Homepage;
/*
<Link to="/Kasa-parabel" style={{color:"white"}}>Link to treasure hunt</Link>
<Link to="/Quiz" style={{color:"white"}}>Link to Quiz</Link>
<Link to="/Kasa-parabel" style={{color:"white"}}>Link to treasure hunt</Link>
*/
/*
<RegistrationCard path="/audio-visual" name='Audio Visual Round'/>
<RegistrationCard path="/Others" currentUser={currentUser} name='Other Events'/>
*/
