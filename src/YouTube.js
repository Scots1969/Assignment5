import React from 'react';
import 'bulma/css/bulma.css';

export default function YouTube(props){

    return(
        <div style={{position:'relative', height:0, paddingBottom: '56.25%'}}>
     <iframe
       src="https://www.youtube.com/embed/GHbKOr1wurI"
       width={640} height={360} frameBoarder={0}
     style={{
     position: 'absolute',
     width: '30%',
     height: '30%',
     left:0
     }}
     allowFullScreen
     />
   </div>

    );

}