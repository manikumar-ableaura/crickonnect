import React from "react";
import './content.css';
import R1 from './img/R1.jpg';
import R2 from './img/R2.jpg';
import R3 from './img/R3.jpg';


function Content() {
    return (
        <div className="img-block">
            <div className="container">
                <img
                    className="content"
                    src={R1}
                    alt="cricket info"
                />
                <div className="text-block">
                    <h3>Create Team</h3>
                    <p>Unleash Your Squad – Form the Ultimate Team!</p>
                    <button>Create</button>
                </div>
            </div>
            <div className="container1">
                <img
                    className="content1"
                    src={R2}
                    alt="cricket info"
                />
                <div className="text-block">
                    <h3>Match Booking</h3>
                    <p>Seize the Pitch – Book Your Battle Now!</p>
                    <button>Book</button>
                </div>
            </div>
            <div className="container2">
                <img
                    className="content2"
                    src={R3}
                    alt="cricket info"
                />
                <div className="text-block">
                    <h3>View Stats</h3>
                    <p>Explore Your Cricket Journey!</p>
                    <button>View</button>
                </div>
            </div>
        </div>
    );
}
 export default Content;