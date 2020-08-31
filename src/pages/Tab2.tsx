import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, useIonViewDidEnter } from '@ionic/react';
import './Tab2.css';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { detailsFirst } from '../redux/ActionCreators';
import { AppState } from '../redux/store';
import FaqDetails from '../components/FaqDetails';
import FaqHeaders from '../components/FaqHeaders';

const Tab2: React.FC = () => {

  
  const details: any = useSelector((state: AppState) => state.detailsFList);
  
  let { id } = useParams();
  const dispatch = useDispatch();

  useIonViewDidEnter(() => {
    dispatch(detailsFirst(id));
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Details 1
          </IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding-start ion-padding-end">
          <FaqHeaders/>
          {
            <FaqDetails details={details.details}
            pending={details.pending}
            err={details.err}
          />
          }
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
