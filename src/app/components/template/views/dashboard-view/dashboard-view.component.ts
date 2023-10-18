import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, inject } from '@angular/core';
import Chart from 'chart.js/auto';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
export class DashboardViewComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }
      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Topico 0',
          'Topico 1',
          'Topico 2',
          'Topico 3',
          'Topico 4',
          'Topico 5',
          'Topico 6',
          'Topico 7',
          'Topico 7',
          'Topico 7',
          'Topico 7',
          'Topico 7',
          'Topico 7',
        ],
        datasets: [
          {
            label: 'Erros',
            data: [
              '467',
              '576',
              '572',
              '79',
              '92',
              '574',
              '573',
              '576',
              '1000',
              '190',
              '999',
              '880',
              '703',
            ],
            backgroundColor: 'red',
          },
          {
            label: 'Acertos',
            data: [
              '542',
              '542',
              '536',
              '327',
              '17',
              '0.00',
              '538',
              '541',
              '1000',
              '190',
              '999',
              '880',
              '703',
            ],
            backgroundColor: 'limegreen',
          },
        ],
      },
      options: {
        aspectRatio: 3.5,
      },
    });
  }
}
