import React from 'react';
import './Events.css'

const eventsData =[
    {
        time: 'March 5th at 5PM-8PM',
        title: 'New Members',
        Description: 'Meet and greet night.'
    },
    {
        time: 'July 4th at 7PM-10PM',
        title: 'Independence Day',
        Description: 'Come enjoy the fireworks!!'
    },
    {
        time: 'October 31th at 5PM-9PM',
        title: 'Halloween',
        Description: 'Halloween costume party!'
    }
];

function EventCard(props){
    return(
        <div className="Events-card">
            <h2>{props.title}</h2>
            <div><strong>When:</strong>{props.time}</div>
            <div><strong>Description:</strong>{props.Description}</div>
        </div>
    );
}

export default function Events(){

    let eventsDisplay = eventsData.map((event) => <EventCard time={event.time}
                                                           title={event.title}
                                                           Description={event.Description}/>);
    return (
        <div className="Events">{eventsDisplay}</div>
    );
}

