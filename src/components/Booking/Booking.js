import React from "react";
import Header from "../Header";
import "./Booking.css";
import "../image/grounde.jpg"
function Booking() {


    return (
        <><Header />


            <main className="Book-con">



                <div className="cont">
                    <h2>Your Booking </h2>

                    <div className="book-sec">
                        <div className="book-sub-sec">
                            <h3>DC Cricket Ground</h3>
                            <p>January 5, 2025</p>
                            <p>morning</p>
                            <p class="pend"><span class="pendi">pending</span></p>
                        </div>

                    </div>
                </div>

                <div className="cont1">
                    <div className="book-sec1">
                        <p>2 Grounds Available in </p>
                        <select id="location" class="opt">
                            <option value="" disabled="">-- Select a City --</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Tirupati">Tirupati</option>
                            <option value="Kerala">Kerala</option>
                        </select>
                    </div>

                    <div className="cont2">
                        <div className="book-sec2">
                            <div className="venue">
                                <div className="img">
                                <img src="grounde" alt="DC Cricket Ground" class="threecat-module--groundImage--382d4"></img>

                                </div>
                            </div>
                        </div>
                    </div>





                </div>



            </main>
        </>

    )


}

export default Booking



















