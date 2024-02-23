import React, { useState } from 'react'; //import React Component
import Form from './form';
import Calendar from './calendar';
import Graph from './graph';
import '../style.css';

export const header = (
    <header className="header">
        <h1 id="nav-title">SymptoTracker</h1>
        <nav className="nav">
            <div id="hamburger-menu"><a href="#"><i class="fa fa-bars" aria-label="menu"></i></a></div>
            <ul id="nav-links">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="calendar.html">Calendar</a></li>
                <li><a href="graphs.html">Data Visualization</a></li>
                <li><a href="form.html">Form</a></li>
            </ul>
        </nav>
    </header>
);

function App(props) {
    return (
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
                          <section className="symptom">
                              <li>
                                  <a className="symptom_link" href="Chest Pain">Chest Pain</a>
                                  <div className="symptom-button">
                                      <a className="edit-btn" href="edit-form.html">
                                          <button id="close-image"><img src="../img/edit.png"/></button>
                                      </a>
                                      <button type="button" id="close-image"><img src="../img/trash.png"/></button>
                                  </div>
                              </li>
                          </section>
                          <section className="symptom">
                              <li>
                                  <a className="symptom_link" href="Runny Nose">Runny Nose</a>
                                  <div claclassNamess="symptom-button">
                                      <a claclassNamess="edit-btn" href="edit-form.html">
                                          <button id="close-image"><img src="../img/edit.png"/></button>
                                      </a>
                                      <button type="button" id="close-image"><img src="../img/trash.png"/></button>
                                  </div>
                              </li>
                          </section>
                          <section className="symptom">
                              <li>
                                  <a className="symptom_link" href="Hives Flare Again">Hives Flare Again</a>
                                  <div className="symptom-button">
                                      <a className="edit-btn" href="edit-form.html">
                                          <button id="close-image"><img src="../img/edit.png"/></button>
                                      </a>
                                      <button type="button" id="close-image"><img src="../img/trash.png"/></button>
                                  </div>
                              </li>
                          </section>
                          <section className="symptom">
                              <li>
                                  <a className="symptom_link" href="Cough">Cough</a>
                                  <div className="symptom-button">
                                      <a className="edit-btn" href="edit-form.html">
                                          <button id="close-image"><img src="../img/edit.png"/></button>
                                      </a>
                                      <button type="button" id="close-image"><img src="../img/trash.png"/></button>
                                  </div>
                              </li>
                          </section>
                          <section className="symptom">
                              <li>
                                  <a className="symptom_link" href="Fever">Fever</a>
                                  <div className="symptom-button">
                                      <a className="edit-btn" href="edit-form.html">
                                          <button id="close-image"><img src="../img/edit.png"/></button>
                                      </a>
                                      <button type="button" id="close-image"><img src="../img/trash.png"/></button>
                                  </div>
                              </li>
                          </section>
                          <section className="symptom">
                              <li>
                                  <a className="symptom_link" href="Hive Flare">Hive Flare</a>
                                  <div className="symptom-button">
                                      <a className="edit-btn" href="edit-form.html">
                                          <button id="close-image"><img src="../img/edit.png"/></button>
                                      </a>
                                      <button type="button" id="close-image"><img src="../img/trash.png"/></button>
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
      ); 
};
export default App;