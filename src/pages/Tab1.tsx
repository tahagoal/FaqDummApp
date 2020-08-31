import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { useDispatch, useSelector } from "react-redux";
import './Tab1.css';
import { fetchAll } from "../redux/ActionCreators";
import { AppState } from "../redux/store";
import FaqList from "../components/FaqList";
import FaqHeaders from "../components/FaqHeaders";

const Tab1: React.FC = () => {

  const faqs: any = useSelector((state: AppState) => state.faqList);
  const dispatch = useDispatch();

  useIonViewDidEnter(() => {
    dispatch(fetchAll());
  });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding-start ion-padding-end">
          <FaqHeaders />
          <FaqList faqs={faqs.faqs}
            pending={faqs.pending}
            err={faqs.err}
          />
          <br></br>
          <h3><b>Still need help?</b></h3>
          <h4>Feedback</h4>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};


export default Tab1;
