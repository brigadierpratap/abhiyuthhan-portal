import {Component} from 'react';

import {Link} from 'react-router-dom';
import Footer from '../../components/Footer/footer.component';
import './leaderboard.styles.css';


class Leaderboard extends Component {
    constructor(){
        super();
        this.state = {
        }
    }

    render=()=>{
        return(
            <div className="main">
                <div className="leaderboard-content">
                    <h1>Leaderboard</h1>
                    <div className="tb">
                    <table class="table">
                        <thead>
                            <tr className="tb">
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody className="tb">
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            </tr>

                            <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            </tr>

                            <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            </tr>

                            <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            </tr>
                        

                        </tbody>
                        </table>
                        </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Leaderboard;