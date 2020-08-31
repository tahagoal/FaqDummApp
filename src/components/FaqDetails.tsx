import React, { useState } from 'react';
import './FaqList.css';
import { detF } from '../models/models';
import { IonItem, IonLabel, IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

interface ContainerProps {
    details: detF[];
    pending:any;
    err:any;
}

const FaqDetails: React.FC<ContainerProps> = ({ details, pending, err }) => {

    const [id, setId] = useState(1);
    const [detailsCheck, setCheck] = useState(false);

    if (pending) {
        return(
            <h1>Loading...</h1>
        )
    }
    else if (err){
        return(
            <h1>Error</h1>
        )
    }
    else if (details) {
        const question = details[0].questions.filter(x => x.id === id)[0];

        if(!detailsCheck)
            return (
                <div className="ion-padding-start red-inner no-line">
                    {details.map(faq => (
                        <div key={faq.id}>
                            <IonLabel><b>{faq.name}</b></IonLabel>
                            {faq.questions.map(question => (
                                <IonItem key={question.id}
                                onClick={() => {
                                    setId(question.id);
                                    setCheck(true);
                                }}>
                                    <IonLabel>
                                        {question.text}
                                    </IonLabel>
                                </IonItem>
                            ))}
                        </div>
                    ))}
                </div>
            )
        else{
            return(
                <div>
                    <IonIcon className="font20" icon={arrowBack}  onClick={() => {setCheck(false);}}/>
                    <br></br>
                    {question.details}
                </div>
            )
        }
    }
    else{
        return(
            <div>EMPTY DIV</div>
        )
    }
};

export default FaqDetails;
