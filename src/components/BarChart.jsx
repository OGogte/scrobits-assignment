import { useState } from 'react';
import '../assets/styles/BarChart.css';

const BarChart = () => {
    //expandedBar is a state variable that will keep track of the index of the bar that is currently expanded. 
    //If no bar is expanded, the value will be null.
    const [expandedBar, setExpandedBar] = useState(null);
    //bars is an array of numbers that will be used to render the bars in the chart.
    const bars = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    //handleBarClick is a function that will be called when a bar is clicked.
    //It will toggle the expandedBar state variable to the index of the clicked bar, or null if the clicked bar is already expanded.
    const handleBarClick = (index) => {
      setExpandedBar(index === expandedBar ? null : index);
    };
  
    return (
      <div className="container">
        {bars.map((value, index) => (
          <div
            key={index} 
            //The expanded class will be added to the bar if its index matches the expandedBar state variable. 
            //The even and odd classes will be added to the bar based on its index.
            className={`bar ${expandedBar === index ? 'expanded' : ''} ${index % 2 === 0 ? 'even' : 'odd'}`}
            onClick={() => handleBarClick(index)}
          >
            <span className="label">{value}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default BarChart;
