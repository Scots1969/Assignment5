import React from 'react';
import './App.css'
import staff1 from './Images/Manager1.jpg';
import staff2 from './Images/Manager2.jpg';
import staff3 from './Images/Manager3.jpg';


function HistoryText(){
    return(
        <div>
            <p>A few years ago, our founder’s young kids joined the neighborhood summer league swim team. Shortly
                thereafter Mason’s wife volunteered him for the position of “Computer Guy.” Being an experienced
                software engineer and a year-round and high school swimmer in his younger days, Mason thought, “Sure,
                how hard can it be?” But he soon learned the answer was, “Very hard!” His team was using painfully
                antiquated team management software — running on a team laptop that was passed around from one
                volunteer to another. Determined to save time and frustration for himself and the other volunteers,
                Mason developed an online system to manage his swim team. Over several seasons Mason added new
                capabilities, the system evolved, and soon other teams in the area were asking if they could use it too.

                During the spring and summer of 2010, Mason’s original system, created for just his team, was completely
                rewritten and revamped into what would become Westminster Swim Club. Drawing from his experience
                building software to support some of the highest traffic websites on the internet, Mason designed this
                new system to leverage the scalability and security of cloud computing technology. In February 2011,
                Westminster Swim Club opened its doors and made its first sales.

                From these early beginnings, our product continues to evolve and our company continues to grow. Our core
                mission is to make software that is intuitive and easy to use. Fueled by our vision to make running a
                swim team LESS WORK and MORE FUN, Westminster Swim Club has grown to support hundreds of teams from
                around the world, and our product has expanded to provide features and a mobile app that make life
                easier for swim parents and coaches everywhere.</p>

        </div>
    )
}

function StaffBios(){
    return(

        <div>
            <StaffCard name="Bill Anderson" title="Owner" image={staff1}/>
            <StaffCard name="Molly Hendricks" title="Manager" image={staff2}/>
            <StaffCard name="Cindy Stetina" title="Life Gaurd" image={staff3}/>
        </div>
    )

}

function StaffCard(props){
    return(
        <figure className="staff-card">
            <img className="staff-image" src={props.image} alt={props.name}/>
            <figcaption><strong>{props.name}</strong><br/> {props.title}</figcaption>
        </figure>
      )


}
export default function About(){
    return (
      <div>
        <HistoryText/>
          <h2>Our Staff</h2>
        <StaffBios/>
      </div>
    );
}