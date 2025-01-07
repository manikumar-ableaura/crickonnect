import React from "react";
import "./Booking.css";
import venue from "../image/grounde.jpg";





function Booking() {


    return (
        <>
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
                </div>


                <div className="part1">
                    <div className="cont2">
                        <div className='bolt'>
                            <div className='venue'>
                                <img
                                    className="img"
                                    src={venue}
                                    alt="Loading..." />

                                <div className="book-sec2">
                                    <h3>Mahtma Ground</h3>
                                    <p> Price- $50 \ hr</p>
                                    <a
                                        href="https://www.google.com/maps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="getlink"
                                    >
                                        Get  Directions
                                    </a>
                                </div>
                            </div>
                            <button type="Book" className="btw">BOOK NOW</button>
                        </div>
                    </div>

                    <div className="cont3">
                        <div className='malt'>
                        <div className='venue'>
                                <img
                                    className="img"
                                    src={venue}
                                    alt="Loading..." />

                                <div className="book-sec2">
                                    <h3>National Ground</h3>
                                    <p>Price- $80 \ hr</p>
                                    <a
                                        href="https://www.google.com/maps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="getlink"
                                    >
                                        Get  Directions
                                    </a>
                                </div>
                            </div>
                            <button type="Book" className="bto">BOOK NOW</button>
                        </div>
                    </div>



                    <div className="cont4">
                        <div className='bolta'>
                        <div className='venue'>
                                <img
                                    className="img"
                                    src={venue}
                                    alt="Loading..." />

                                <div className="book-sec3">
                                    <h3>Mahtma Ground</h3>
                                    <p>Price- $50 \ hr</p>
                                    <a
                                        href="https://www.google.com/maps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="getlink"
                                    >
                                        Get  Directions
                                    </a>
                                </div>
                            </div>
                            <button type="Book" className="btw">BOOK NOW</button>
                        </div>
                    </div>

                    <div className="cont5">
                        <div className='malta'>
                        <div className='venue'>
                                <img
                                    className="img"
                                    src={venue}
                                    alt="Loading..." />
                                <div className="book-sec3">
                                    <h3>National Ground</h3>
                                    <p>Price- $80 \ hr</p>
                                    <a
                                        href="https://www.google.com/maps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="getlink"
                                    >
                                        Get  Directions
                                    </a>
                                </div>
                            </div>
                            <button type="Book" className="bto">BOOK NOW</button>
                        </div>
                    </div>



                    <div className="cont6">
                        <div className='bolta'>
                        <div className='venue'>
                                <img
                                    className="img"
                                    src={venue}
                                    alt="Loading..." />

                                <div className="book-sec4">
                                    <h3>Mahtma Ground</h3>
                                    <p>Price- $50 \ hr</p>
                                    <a
                                        href="https://www.google.com/maps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="getlink"
                                    >
                                        Get  Directions
                                    </a>
                                </div>
                            </div>
                            <button type="Book" className="btw">BOOK NOW</button>
                        </div>
                    </div>

                    <div className="cont7">
                        <div className='malta'>
                        <div className='venue'>
                                <img
                                    className="img"
                                    src={venue}
                                    alt="Loading..." />

                                <div className="book-sec4">
                                    <h3>National Ground</h3>
                                    <p>Price- $80 \ hr</p>
                                    <a
                                        href="https://www.google.com/maps"
                                        target="_blank"
                                        className="getlink"
                                    >
                                        Get  Directions
                                    </a>
                                </div>
                            </div>
                            <button type="Book" className="bto">BOOK NOW</button>
                        </div>
                    </div>

                </div>


            </main>
        </>

    )


}

export default Booking



















