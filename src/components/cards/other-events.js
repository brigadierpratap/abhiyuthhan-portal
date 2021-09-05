// import React from "react";
// import ReactDOM from "react-dom";
// import $ from "jquery";
// import Countdown from "../countdown/countdown.component";
// class Event extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       description: "",
//       registered: 101,
//       eventstarted: false,
//     };
//   }
//   onregister = () => {};
//   componentDidMount() {}

//   render = () => {
//     const { event_name } = this.props;
//     return (
//       <div id="registration-content">
//         {this.state.registered === 101 ? (
//           "loading"
//         ) : (
//           <div className="registration-container">
//             <div className="registration_left">
//               <Countdown
//                 className="countdown"
//                 timeTillDate={eventtime}
//                 timeFormat="MM DD YYYY, h:mm a"
//               />
//               <div className="registration-sponsor">
//                 <h2>Description</h2>
//                 <p>{description}</p>
//               </div>
//             </div>
//             <div className="registration_right">
//               <h1>{event_name}</h1>
//               <h3>
//                 Event date : {dt.getDate()}/{dt.getMonth() + 1}/
//                 {dt.getFullYear()}
//               </h3>
//               {registered === false ? (
//                 <button
//                   className="registration__register-button"
//                   onClick={onregister}
//                 >{`Register to the Event`}</button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     history.push(`${path}/live`);
//                   }}
//                   className="registration__register-button"
//                 >{`Join the Event`}</button>
//               )}
//               <img src={treasurelogo} alt="logo-img" width="100%" />
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };
// }

// export default Event;
