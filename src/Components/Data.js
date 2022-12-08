import SleepItems from "./SleepItems";
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    registerables,
    plugins
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function Chart() {
    const data = {
        labels: ["Nov 29", "Nov 30", "Dec 1", "Dec 2", "Dec 3"],
        datasets: [{
            data: [6, 5, 6, 8, 7],
            backgroundColor: '#282C34',
            borderColor: '#9464EC',
            pointBorderWidth: 2 
        }]
    };
    const config = {
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Hours Slept'
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    callback: (value) => value + 'hours'
                },
                grid: {
                    display: true
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Hours Slept'
            }
        }
    }
    return(
        <div style={{width: '600px', height:"1000 px", marginright: '25px', marginLeft: '25px'}}>
            <Line data={(data)} options={config}></Line>
        </div>
    )
}
 
export default Chart;