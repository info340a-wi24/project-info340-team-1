import React from 'react';
import '../style.css';
import LineChartImg from '../img/lineChart.png'; 
import PieChartImg from '../img/pieChart.png'; 


function GraphCard({ title, description, imgSrc, altText }) {
  return (
    <div className="graph-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div id={`${title.replace(/\s/g, '')}Graph`} className="graph-chart">
        <img src={imgSrc} alt={altText} />
      </div>
    </div>
  );
}

export function Graphs() {
  return (
      <div>
      <main id="Graph-pages">
        <div className="graph-container">
          <GraphCard
            title="Line Chart"
            description="This line chart displays the frequency of symptoms reported each month, which helps in tracking symptom patterns and trends over time."
            imgSrc={LineChartImg}
            altText="Line Chart showing symptoms per month"
          />
          <GraphCard
            title="Pie Chart"
            description="The pie chart depicts the proportion of each symptom reported, providing a visual comparison of their relative frequencies."
            imgSrc={PieChartImg}
            altText="Pie Chart showing the distribution of symptoms"
          />
        </div>
      </main>
      <footer className="footer">
        <p>This page was created by our Info 340 team</p>
        <p>&copy; 2024 SymptoTrack.</p>
      </footer>
    </div>
  );
}
