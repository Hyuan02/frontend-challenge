import React, {useState} from 'react';
import CardTravel from './card-travel/CardTravel';


export default function CardContainer({listOfCards, removeFlightEvent}:any){
    return(
        <div>
            {listOfCards.map((e:any)=>{
                console.log("e rendered: ", e);
            return <CardTravel key={e.id} flightData={e} removeFlightEvent={removeFlightEvent}/>
            })
        }
        </div>
        
    )
}