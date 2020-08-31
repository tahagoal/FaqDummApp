import React from 'react';
import './FaqList.css';
import { Faq } from '../models/models';
import { IonItem, IonLabel } from '@ionic/react';
import { Link } from 'react-router-dom';

interface ContainerProps {
    faqs: Faq[];
    pending:any;
    err:any;
}

const FaqList: React.FC<ContainerProps> = ({ faqs, pending, err }) => {
    if (pending) {
        return(
            <h1>Loading</h1>
        )
    }
    else if (err){
        return(
            <h1>Error</h1>
        )
    }
    else if (faqs) {
        return (
            <div className="ion-padding-start red-inner no-line">
                {faqs.map(faq => (
                    <Link key={faq.id} to={{pathname: `details/${faq.id}`}}>
                        <IonItem>
                            <IonLabel>{faq.name}</IonLabel>
                        </IonItem>
                    </Link>
                ))}
            </div>
        )
    }
    else{
        return(
            <div>EMPTY DIV</div>
        )
    }
};

export default FaqList;
