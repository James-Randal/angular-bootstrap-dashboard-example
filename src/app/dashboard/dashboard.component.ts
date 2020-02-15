import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import {  Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lineChartData: ChartDataSets[] = [
    { data: [15339, 21345, 18483, 24003, 23489, 24092, 12034]   },
  ];
  
  lineChartLabels: Label[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  lineChartOptions = {
    responsive: true,
    
  };
  
  // This could be a Color Object, however we found that in order to use the lineTension property we need to use any
  lineChartColors: any[] = [
    {
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';


}