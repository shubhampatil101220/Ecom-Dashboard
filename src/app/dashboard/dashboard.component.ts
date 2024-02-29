import { Component, OnInit, } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { LineChartData } from './datatype';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit{
  constructor() {}
    label:any[]= ['', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', ''];
  data1:any[] =[350, 459, 590, 281, 496, 755, 540,
    650, 759, 890, 681, 596, 555, 640, 
    890, 981, 596, 555, 640,650, 759,
     890, 681, 596, 555, 640,650, 759,
     650, 759, 890, 981, 596, 555, 640,
     650, 759, 890, 981, 596, 555, 640, 
     890, 981, 596, 555, 640,650, 759,
      890, 981, 596, 555, 640,650, 759];
      data2:any[] =[
         890, 681, 596, 555, 640,650, 759,
         650, 759, 890, 581, 596, 555, 640,
         650, 759, 890, 581, 596, 555, 640, 
         890, 981, 596, 555, 640,650, 759,
         650, 759, 890, 581, 596, 555, 640,
        650, 759, 890, 681, 596, 555, 640, 
        890, 981, 596, 555, 640,650, 759,
        
          890, 981, 596, 555, 640,650, 759];
  public chartData1: LineChartData = {
    labels: this.label,
    datasets: [
      {
        data: this.data2,
        borderColor: ' #9f4cf1',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointRadius: 0,
        lineTension: 0.5,
        fill: {
          target: 'origin',
          above: 'rgba(159, 76, 241, 0.1)',   // Area will be red above the origin
         // And blue below the origin
        }
      },
    ],
  };
  public chartData2: LineChartData = {
    labels: this.label,
    datasets: [
      {
        data: this.data1,
        borderColor: '#19d7f4',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointRadius: 0,
        lineTension: 0.5,
        fill: {
          target: 'origin',
          above: 'rgba(25, 215, 244, 0.1)',   // Area will be red above the origin
        
        }
      },
    ],
  };
  public chartData3: LineChartData = {
    labels: this.label,
    datasets: [
      {
        data: this.data2,
        borderColor: '#ed840d',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointRadius: 0,
        lineTension: 0.5,
        fill: {
          target: 'origin',
          above: 'rgba(237, 132, 13, 0.1)',   // Area will be red above the origin
         
        }
      },
    ],
  };
  public chartData4: LineChartData = {
    labels: this.label,
    datasets: [
      {
        data: this.data1,
        borderColor: '#d81db6',
        backgroundColor: '#d81db6',
        pointRadius: 0,
        lineTension: 0.5,
        fill: {
          target: 'origin',
          above: 'rgba(216, 29, 182, 0.1)',   // Area will be red above the origin
         
        }
      },
    ],
  };



  ngOnInit(): void {
    this.myChart1();
    this.myChart2();
    this.myChart3();
    this.myChart4();
    this.StackedChart();
    }
 
    myChart1(){
      
      const canvas = document.getElementById('myChart1')! as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
     
      new Chart(ctx, {
        type: 'line',
        data: this.chartData1,
        options: { 
          elements: {
          line: {
            borderWidth: 1, // Set the default line width for all datasets
          },
        },
          scales: {
            x: {
              display: false, // Hide x-axis labels and ticks
            },
            y: {
              display: false, // Hide y-axis labels and ticks
            },
          },
          aspectRatio:5,
          plugins: {
            legend: {
              display: false, // Set to false to hide legend labels
            },
          }
        },
      });
    }
    }
    myChart2(){
      const canvas = document.getElementById('myChart2')! as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
     
      new Chart(ctx, {
        type: 'line',
        data: this.chartData2,
        options: {
          elements: {
          line: {
            borderWidth: 1, // Set the default line width for all datasets
          },
        },
          scales: {
            x: {
              display: false, // Hide x-axis labels and ticks
            },
            y: {
              display: false, // Hide y-axis labels and ticks
            },
          },
          aspectRatio:5,
          plugins: {
            legend: {
              display: false, // Set to false to hide legend labels
            },
          }
        },
      });
    }
    }
    myChart3(){
      const canvas = document.getElementById('myChart3')! as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
     
      new Chart(ctx, {
        type: 'line',
        data: this.chartData3,
        options: {elements: {
          line: {
            borderWidth: 1, // Set the default line width for all datasets
          },
        },
          scales: {
            x: {
              display: false, // Hide x-axis labels and ticks
            },
            y: {
              display: false, // Hide y-axis labels and ticks
            },
          },
          aspectRatio:5,
          plugins: {
            legend: {
              display: false, // Set to false to hide legend labels
            },
          }
        },
      });
    }
    }
    myChart4(){
      const canvas = document.getElementById('myChart4')! as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
     
      new Chart(ctx, {
        type: 'line',
        data: this.chartData4,
        options: {
          elements: {
          line: {
            borderWidth: 1, // Set the default line width for all datasets
          },
        },
          scales: {
            x: {
              display: false, // Hide x-axis labels and ticks
            },
            y: {
              display: false, // Hide y-axis labels and ticks
            },
          },
          aspectRatio:5,
          plugins: {
            legend: {
              display: false, // Set to false to hide legend labels
            },
          }
        },
      });
    }
    }
    // ----------------------------------Stacked Chart-------------------------------
     chartData5 = {
      labels: ['Jan','','Feb','','Mar','','Apr','','May','', 'Jun','', 'Jul','','aug'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,45],
          backgroundColor: ' rgb(111, 185, 227)',
          borderColor: 'rgba(25, 215, 244, 1)',
          borderWidth: 0,
          borderRadius:5
        },
        {
          label: 'Dataset 2',
          data: [28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,75],
          backgroundColor: 'rgb(159, 76, 241)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 0,
          borderRadius:5
        },
      ],
    };
    StackedChart(){
      const canvas = document.getElementById('StackChart')! as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
   if(ctx){
    new Chart(ctx, {
      type: 'bar', // Specify chart type as 'bar'
      data: this.chartData5,
      options: {
        scales: {
          x: {
            stacked: true, // Enable stacked bars
            grid:{
              display: false,
          },
          
          },
          y: {
            stacked: true,
            grid:{
              color: 'rgb(234, 237, 237)',
          },
          border: {
              dash: [5,5],
          },  
          },
        },
        plugins: {
          legend: {
            display: false, // Set to false to hide legend labels
          },
        }
      },
    })
   }
     ;
    }
}
