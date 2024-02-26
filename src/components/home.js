import React from 'react';
import '../style.css';
import {SymptomForm} from './form';
import filterImg from '../img/filter.png';
import editImg from '../img/edit.png'; 
import trashImg from '../img/trash.png';
import mycharImg from '../img/mychar.png'; 
import uwMHImg from '../img/uwMH.png';
import webMDImg from '../img/webMD.png'; 
import seaHealthImg from '../img/seattleHealth.png'; 


function deleteButton(event) {
    const symptomElement = event.target.closest('.symptom');
    if (symptomElement) {
        symptomElement.remove();
    }
}

export function Home (props) {
    return (
        <div>
            <main id="main_page">
                    <div className="container">
                        <div className="tracker">
                            <section className="head">
                                <h2>Symptoms</h2>
                                <div className="filter">
                                    <button type="button" id="filter-image">
                                        <img src={filterImg} alt="Filter Icon"/>   
                                    </button>
                                </div>
                            </section>
                            <ul>
                                <section className="symptom">
                                    <li>
                                        <a className="symptom_link" href="Chest Pain">Chest Pain</a>
                                        <div className="symptom-button">
                                        {/* <a href="Users/meiyo/Downloads/info340-code/project-info340-team-1/project-draft/HTML/edit-form.html" target="_blank"><img src={editImg} alt="Edit Icon"/></a> */}
                                        <a href={SymptomForm} target="_blank"><img src={editImg} alt="Edit Icon"/></a>
                                            <button className="trash-icon" onClick={deleteButton}>
                                                <img src={trashImg} alt="Trash Icon"/>
                                            </button>
                                        </div>
                                    </li>
                                </section>
                                <section className="symptom">
                                    <li>
                                        <a className="symptom_link" href="Runny Nose">Runny Nose</a>
                                        <div className="symptom-button">
                                            <a className="edit-btn" href="edit-form.html">
                                                <button className="edit-icon" onclick="editPage(event)">
                                                    <img src={editImg} alt="Edit Icon"/>
                                                </button>
                                            </a>
                                            <button className="trash-icon" onClick={deleteButton}>
                                                <img src={trashImg} alt="Trash Icon"/>
                                            </button>
                                        </div>
                                    </li>
                                </section>
                                <section className="symptom">
                                    <li>
                                        <a className="symptom_link" href="Hives Flare Again">Hives Flare Again</a>
                                        <div className="symptom-button">
                                            <a className="edit-btn" href="edit-form.html">
                                                <button className="edit-icon" onclick="editPage(event)">
                                                    <img src={editImg} alt="Edit Icon"/>
                                                </button>
                                            </a>
                                            <button className="trash-icon" onClick={deleteButton}>
                                                <img src={trashImg} alt="Trash Icon"/>
                                            </button>
                                        </div>
                                    </li>
                                </section>
                                <section className="symptom">
                                    <li>
                                        <a className="symptom_link" href="Cough">Cough</a>
                                        <div className="symptom-button">
                                            <a className="edit-btn" href="edit-form.html">
                                                <button className="edit-icon" onclick="editPage(event)">
                                                    <img src={editImg} alt="Edit Icon"/>
                                                </button>
                                            </a>
                                            <button className="trash-icon" onClick={deleteButton}>
                                                <img src={trashImg} alt="Trash Icon"/>
                                            </button>
                                        </div>
                                    </li>
                                </section>
                                <section className="symptom">
                                    <li>
                                        <a className="symptom_link" href="Fever">Fever</a>
                                        <div className="symptom-button">
                                            <a className="edit-btn" href="edit-form.html">
                                                <button className="edit-icon" onclick="editPage(event)">
                                                    <img src={editImg} alt="Edit Icon"/>
                                                </button>
                                            </a>
                                            <button className="trash-icon" onClick={deleteButton}>
                                                <img src={trashImg} alt="Trash Icon"/>
                                            </button>
                                        </div>
                                    </li>
                                </section>
                                <section className="symptom">
                                    <li>
                                        <a className="symptom_link" href="Hive Flare">Hive Flare</a>
                                        <div className="symptom-button">
                                            <a className="edit-btn" href="edit-form.html">
                                                <button className="edit-icon" onclick="editPage(event)">
                                                    <img src={editImg} alt="Edit Icon"/>
                                                </button>
                                            </a>
                                            <button className="trash-icon" onClick={deleteButton}>
                                                <img src={trashImg} alt="Trash Icon"/>
                                            </button>
                                        </div>
                                    </li>
                                </section>
                            </ul>
                        </div>
            
                        <div className="quick-links">
                            <div className="link-box">
                                <section className="head">
                                    <h2>Quick Links</h2>
                                </section>
            
                                <div className="link">
                                    <a href="https://www.mychart.org/" target="_blank"><img src={mycharImg} alt="my chart" />My Chart</a>
                                </div>
                                <div className="link">
                                    <a href="https://wellbeing.uw.edu/mental-health/mental-health-resources/" target="_blank"><img src={uwMHImg} alt="uw resources" />UW Mental Health Resources</a>
                                </div>
                                <div className="link">
                                    <a href="https://www.webmd.com/" target="_blank"><img src={webMDImg} alt="webmd" />WebMD</a>
                                </div>
                                <div className="link">
                                    <a href="https://seattlecenter.org/skcclinic/" target="_blank"><img src={seaHealthImg} alt="Seattle Center Foundation" />Seattle Center Foundation</a>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
            </main>
        </div>
        )
    };
  