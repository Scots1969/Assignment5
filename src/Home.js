import React from 'react';
import './App.css';


import imageSummer1 from './Images/WestSwimClub1.jpg';
import imageSummer2 from './Images/WestSwimClub2.jpg';
import imageSummer3 from './Images/WestSwimClub3.jpg';



function HoursOfOperation(){
    return(
        <div>
            <h2>Regular Season Hours</h2>
            <p>Open Mondy-Friday 7AM-5PM</p>

            <h2>Pool closing early on these dates for Special 2017 Events</h2>
            <ul>
                <li>Swim Meet:  Saturday, June 10, Closed until noon</li>
                <li>Swim Meet:  Saturday, June 17, Closed until noon</li>
                <li>Swim Meet: Wednesday June 21, Closing at 4pm</li>
                <li>Swim Meet: Saturday June 24, Closed until noon</li>
                <li>Swim Meet: Wednesday, July 5, Closing at 4pm</li>
                <li>Swim Meet: Wednesday, July 12, Closing at 4pm</li>
                <li>Swim Team Banquet: Saturday July 23, Closing at 4pm </li>
            </ul>

        </div>

    );
}

function WelcomeIntro(){
    return(
        <div>
            <p>We are conveniently located at the intersection of Route 41 and Hercules Road.  Look at all
                Westminster has to offer...
            </p>
            <ul>
                <li>6 Lane Heated Pool! </li>
                <li>Professional Swim Team Coach </li>
                <li>Swim Lessons </li>
                <li>Stroke and Turn Clinics </li>
                <li>Sports/Tennis Courts </li>
                <li>Shaded Pool-Side Deck </li>
                <li>Patio Grills for Member Use </li>
                <li>Concession Stand, Open Daily! </li>
                <li>Master's Early-Morning Lap Swim </li>
                <li>Adults-Only Swim Times </li>
                <li>Professional Pool Management Staff </li>
                <li>Social Events for families and members of all ages--all summer long!! </li>
                <li>Free WiFi!!</li>
            </ul>

            <p>Westminster is a private, community Swim Club that is run by its members. There are currently 11 members
               serving on the Board of Directors. Westminster offers members bonded memberships.  Bonds are a one time
               purchase of $360 for the life of the membership and are refundable upon termination to all members in
                good standing.  New members may also opt to purchase their bond in four $100 installments.</p>
        </div>

    );
}

function MembershipCosts(){
    return(
        <div>
            <p>
                <h2>Membership Fee</h2>
                2017 Membership is $400
            </p>

        </div>

    );
}
export default function Home(){
    return (
        <div>


              <h1>Welcome to the Westminter Swim Club</h1>
          <div id="test">
              <WelcomeIntro/>
              <HoursOfOperation/>
              <MembershipCosts/>
          </div>
              <div class="parent">
              <img className="Gallery-image" src={imageSummer1} alt = "Image1"/>
              <img className="Gallery-image" src={imageSummer2} alt = "Image2"/>
              <img className="Gallery-image" src={imageSummer3} alt = "Image3"/>
          </div>


        </div>
    );
}
