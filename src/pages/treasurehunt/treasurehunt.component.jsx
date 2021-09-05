//Update hint and pass to popup
import {Component} from 'react';
import LeaderboardPopup from '../../components/cards/leaderboard-popup.jsx';
import LevelPopup from '../../components/cards/treasurehunt-question-popup.jsx';
import Footer from '../../components/Footer/footer.component';
import './treasurehunt.styles.css';

let current_level_no,current_level_question,current_level_img,current_level_completed,current_level_message,current_level_hint,leaderboard_data;
class Treasure extends Component {
    constructor(){
        super();
        this.state={
            current_set_no: 1,
            total_score: '#',
            leaderboard_popup: false,
            level_popup: false
        }
    }
    onLeaderboardClick=()=>{
        fetch("https://eventnitrob.herokuapp.com/treasure/leaderboard")
        .then(res=>{
            if(res.status===500)
                throw(res.statusText);
            return(res.json());
        })
        .then(data=>{
            leaderboard_data=data.data;
            this.toggleLederboardPopup();
        })
        .catch(err=>console.log(err));
    }
    onLevelClick=(event)=>{
        current_level_no=Number(event.target.value);
        fetch("https://eventnitrob.herokuapp.com/question/treasure_question",{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                set_no: this.state.current_set_no,
                level_no: current_level_no,
                user_email: this.props.currentUser.email
            })
        })
        .then(res=>{
            if(res.status===500)
                throw(res.statusText);
            return(res.json());
        })
        .then(data=>{
            console.log(data);
            current_level_question=data.question;
            current_level_img=data.img;
            current_level_completed=data.completed;
            current_level_hint=data.hint;
            if(current_level_completed)
                current_level_message="you might proceed to the next level";
            else
                current_level_message="complete this level to proceed to next";
            this.toggleLevelPopup();
        })
        .catch(err=>console.log(err));
    }
    toggleLederboardPopup=()=>{
        this.setState({
            leaderboard_popup: !this.state.leaderboard_popup
        })
    }
    toggleLevelPopup=()=>{
        this.setState({
            level_popup: !this.state.level_popup
        })
    }
    onSetChange=(set_no)=>{
        this.levelBtnActivate([false,false,false,false,false,false])
        this.setState({
            current_set_no: Number(set_no)
        })
        fetch("https://eventnitrob.herokuapp.com/treasure/user-active-levels",{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                set_no: Number(set_no),
                user_email: this.props.currentUser.email
            })
        })
        .then(res=>{
            if(res.status===500)
                throw(res.statusText);
            return(res.json());
        })
        .then(data=>{
            this.levelBtnActivate(data.active_levels);
        })
        .catch(err=>console.log(err));
    }
    componentDidMount(){
        this.setScore();
        this.levelBtnActivate([true,false,false,false,false,false]);
        fetch("https://eventnitrob.herokuapp.com/treasure/user-active-levels",{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                set_no: 1,
                user_email: this.props.currentUser.email
            })
        })
        .then(res=>{
            if(res.status===500)
                throw(res.statusText);
            return(res.json());
        })
        .then(data=>{
            this.levelBtnActivate(data.active_levels);
        })
        .catch(err=>console.log(err));
    }
    levelBtnActivate=(active_levels)=>{
        let level_btn=document.getElementsByClassName("level-btn");
        for(let i=0;i<level_btn.length;i++){
            if(active_levels[level_btn[i].value]){
                level_btn[i].disabled=false;Object.assign(level_btn[i].style,{cursor:"pointer",color:"rgba(255,255,255)"});
            }
            else{
                level_btn[i].disabled=true;
                Object.assign(level_btn[i].style,{cursor:"not-allowed",color:"rgba(255,255,255,0.5)"});
            }
        }
    }
    setScore=()=>{
        fetch("https://eventnitrob.herokuapp.com/treasure/get-score",{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                user_email: this.props.currentUser.email
            })
        })
        .then(res=>{
            if(res.status===500)
                throw(res.statusText);
            return(res.json());
        })
        .then(data=>{
            this.setState({
                total_score: data.total_score
            });
        })
        .catch(err=>console.log(err));
    }
    render=()=>{
        let options=[];
        for(let i=1;i<=4;i++)
            options.push(<option key={i} value={i}>{i}</option>);
        return(
            <div className="treasure-wrap">
                <div className="user-status">
                    <h5>My Score: {this.state.total_score}</h5>
                    <input className="submit-btn" type="submit" onClick={this.onLeaderboardClick} value="Leaderboard"/>
                </div>
                <div className="ctn">
                    <h5 id="set-select">Set No.{" "}
                        <select id="set-no" onChange={(event)=>this.onSetChange(event.target.value)} value={this.state.current_set_no}>
                            {options}
                        </select>
                    </h5>
                    <div className="level-btn-container">
                        <button className="level-btn" onClick={this.onLevelClick} value='0'>Level 0</button>
                        <button className="level-btn" onClick={this.onLevelClick} value='1'>Level 1</button>
                        <button className="level-btn" onClick={this.onLevelClick} value='2'>Level 2</button>
                        <button className="level-btn" onClick={this.onLevelClick} value='3'>Level 3</button>
                        <button className="level-btn" onClick={this.onLevelClick} value='4'>Level 4</button>
                        <button className="level-btn" onClick={this.onLevelClick} value='5'>Bonus</button>
                    </div>
                </div>
                <Footer/>
                {
                    this.state.leaderboard_popup?
                    <LeaderboardPopup togglePopup={this.toggleLederboardPopup} data={leaderboard_data}/>:<div></div>
                }
                {
                    this.state.level_popup?
                    <LevelPopup togglePopup={this.toggleLevelPopup} currentUser={this.props.currentUser} set_no={this.state.current_set_no} level_no={current_level_no} completed={current_level_completed} question={current_level_question} img={current_level_img} message={current_level_message} onSetChange={this.onSetChange} setScore={this.setScore}/>:<div></div>   
                }
            </div>
        );
    }
}

export default Treasure;