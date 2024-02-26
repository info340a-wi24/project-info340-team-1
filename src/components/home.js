import React, { useState, useEffect }from 'react';
import '../style.css';
import {SymptomForm} from './form';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


export function Home ({ symptoms }) {

    const location = useLocation();
    const [titles, setTitles] = useState([]);

  // Effect to update titles when location state changes
    useEffect(() => {
        const newTitle = location.state ? location.state.title : null;
        if (newTitle) {
            setTitles(prevTitles => [...prevTitles, newTitle]);
            }
        }, [location.state]);
    
    return (
        <div>
            <main id="main_page">
                    <div className="container">
                        <div className="tracker">
                            <section className="head">
                                <h2>Symptoms</h2>
                                <div className="filter">
                                    <button type="button" id="filter-image"><img src="../img/filter.png"/></button>
                                </div>
                            </section>
                            <ul>
                                {symptoms.map((symptom, index) => (
                                    <section className="symptom" key={index}>
                                        <li>
                                            <Link to="/form" className="symptom_link">{symptom}</Link>
                                            <div className="symptom-button">
                                                <a className="edit-btn" href="edit-form.html">
                                                    <button id="close-image"><img src="../img/edit.png" alt="Edit" /></button>
                                                 </a>
                                                <button type="button" id="close-image"><img src="../img/trash.png" alt="Delete" /></button>
                                            </div>
                                        </li>
                                    </section>
                                ))}
                            </ul>
                        </div>
                        <div className="quick-links">
                            <div className="link-box">
                                <section className="head">
                                    <h2>Quick Links</h2>
                                </section>
            
                                <div className="link">
                                    <a href="https://www.mychart.org/" target="_blank"><img src="../img/mychar.png" alt="my chart" />My Chart</a>
                                </div>
                                <div className="link">
                                    <a href="https://wellbeing.uw.edu/mental-health/mental-health-resources/" target="_blank"><img src="../img/uwMH.png" alt="uw resources" />UW Mental Health Resources</a>
                                </div>
                                <div className="link">
                                    <a href="https://www.webmd.com/" target="_blank"><img src="../img/webMD.png" alt="webmd" />WebMD</a>
                                </div>
                                <div className="link">
                                    <a href="https://seattlecenter.org/skcclinic/" target="_blank"><img src="../img/seattleHealth.png" alt="Seattle Center Foundation" />Seattle Center Foundation</a>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
            </main>
        </div>

    )
    };
  