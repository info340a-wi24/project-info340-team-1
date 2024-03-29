import React, { useState, useEffect } from 'react';//import React Component
import '../style.css';
import {Routes, Route} from 'react-router-dom';
import {SymptomForm } from './form';
import {Calendar} from './calendar';
import {Graphs} from './graph';
import {Nav} from './Nav';
import{Home} from './home';
import { EditSymptomForm } from './editForm';

import { firebaseConfig} from './Config'; // import firebase-config
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off, push, set, remove } from 'firebase/database';

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function Header() {
    return(
        <header className="header">
            <h1 id="nav-title">SymptoTracker</h1>
            <Nav />
        </header>
    );
};

function App(props) {
    const [symptoms, setSymptoms] = useState([]);
    const symptomsRef = ref(db, 'symptoms');


    const updateSymptomInFirebase = (symptomId, updatedSymptomData) => {
        const symptomRef = ref(db, `symptoms/${symptomId}`);
        return set(symptomRef, updatedSymptomData);
      };

      const handleFormSubmit = (formData, isEditing = false) => {
        if (isEditing) {
            // Handle updating an existing symptom
            const symptomRef = ref(db, `symptoms/${formData.id}`);
            set(symptomRef, formData)
              .then(() => {
                onValue(symptomsRef, (snapshot) => {
                    const symptomsData = snapshot.val();
                    const symptomsList = symptomsData ? Object.keys(symptomsData).map(key => ({
                        ...symptomsData[key],
                        id: key,
                    })) : [];
                    setSymptoms(symptomsList);
                });
              })
              .catch(error => {
                console.error("Error updating symptom in Firebase: ", error);
              });
        } else {
            // Handle adding a new symptom
            const newSymptomRef = push(symptomsRef);
            set(newSymptomRef, formData)
                .then(() => {
                    onValue(symptomsRef, (snapshot) => {
                        const symptomsData = snapshot.val();
                        const symptomsList = symptomsData ? Object.keys(symptomsData).map(key => ({
                            ...symptomsData[key],
                            id: key,
                        })) : [];
                        setSymptoms(symptomsList);
                    });
                })
                .catch(error => {
                    console.error("Error writing to Firebase: ", error);
                });
        }
    };

    const handleDeleteSymptom = (symptomId) => {
        // Update the state to remove the symptom.
        setSymptoms(prevSymptoms => prevSymptoms.filter(symptom => symptom.id !== symptomId));
        
        // Remove the symptom from Firebase.
        const symptomRef = ref(db, `symptoms/${symptomId}`);
        remove(symptomRef);
    };

    useEffect(() => {
        // 在这里设置监听器，监听数据库的变化
        const symptomsRef = ref(db, 'symptoms');
        onValue(symptomsRef, (snapshot) => {
            const symptomsData = snapshot.val();
            const symptomsList = symptomsData ? Object.keys(symptomsData).map(key => ({
                ...symptomsData[key],
                id: key,
            })) : [];
            setSymptoms(symptomsList); // 将获取的数据设置到状态中
        });

        // 清除监听器
        return () => off(symptomsRef);
    }, []);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/form" element={<SymptomForm onFormSubmit={handleFormSubmit} />} />
                <Route path="/editForm/:symptomId" element={<EditSymptomForm onUpdateSymptom={updateSymptomInFirebase} db={db}/>} />
                <Route path="/graph" element={<Graphs />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="*" element={<Home symptoms={symptoms} onDeleteSymptom={handleDeleteSymptom} />} />
            </Routes>
        </div>
    
    );
};
export default App;