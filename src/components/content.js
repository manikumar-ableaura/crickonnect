import React from "react";
import './content.css';
import R1 from './img/R1.jpg';
import R2 from './img/R2.jpg';
import R3 from './img/R3.jpg';
import { useNavigate } from "react-router-dom";


function Content() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/oops");
    };
    return (
        <div className="img-block">
            <div className="container">
                <img
                    className="content"
                    src={R1}
                    alt="cricket info"
                />
                <div className="text-block1">
                    <h3>Create Team</h3>
                    <p>Unleash Your Squad – Form the Ultimate Team!</p>
                    <button onClick={handleButtonClick}>Create</button>
                </div>
            </div>
            <div className="container1">
                <img
                    className="content1"
                    src={R2}
                    alt="cricket info"
                />
                <div className="text-block2">
                    <h3>Match Booking</h3>
                    <p>Seize the Pitch – Book Your Battle Now!</p>
                    <button onClick={handleButtonClick}>Book</button>
                </div>
            </div>
            <div className="container2">
                <img
                    className="content2"
                    src={R3}
                    alt="cricket info"
                />
                <div className="text-block3">
                    <h3>Tourmnament Booking</h3>
                    <p>Claim Glory - Enter the tournament Arena!</p>
                    <button onClick={handleButtonClick}>Join</button>
                </div>
            </div>
        </div>
    );
}

 export default Content;