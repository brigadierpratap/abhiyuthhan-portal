import './leaderboard-popup.css';

const PopupCard=(props)=>{
    let rows=[];
    for(let i=0;i<props.data.length;i++)
        rows.push(<tr key={i+1}>
                    <th scope="row">{i+1}</th>
                    <td>{props.data[i].name}</td>
                    <td>{props.data[i].total_score}</td>
                </tr>);
    return(
        <div className="popup">
            <div className="overlay"></div>
            <div className="overlay-content">
                <div className="close-btn" onClick={props.togglePopup}>&times;</div>
                <div className="leaderboard-content">
                    <h1>Leaderboard</h1>
                    <div className="tb">
                        <table className="table">
                            <thead>
                                <tr className="tb">
                                <th scope="col">#</th>
                                <th scope="col">Username</th>
                                <th scope="col">Score</th>
                                </tr>
                            </thead>
                            <tbody className="tb">
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupCard;