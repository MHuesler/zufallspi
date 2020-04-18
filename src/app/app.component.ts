import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions, ChartPoint } from 'chart.js';

class Data {
  x: number;
  y: number;
  constructor(X: number, Y: number) {
    this.x = X;
    this.y = Y;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Zufallspi';

  pi = 0;
  versuche = 0;
  treffer = 0;
  abweichung = 0;

  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Zufallszahlen',
      pointRadius: 5,
    },
  ];

  public scatterChartType: ChartType = 'scatter';

  ngOnInit() {
    this.generiere(this.versuche);
  }

  public generiere(versuche: number) {
    this.clearData();

    for (let i = 1; i <= versuche; i++) {
      const x = (Math.random() * 2 - 1).toFixed(4);
      const y = (Math.random() * 2 - 1).toFixed(4);
      this.versuche ++;
      const abstand = Math.sqrt(Math.pow(Number(x), 2) + Math.pow(Number(y), 2));
      if (abstand < 1) { this.treffer++; }
      const data: ChartPoint = {
        x: Number(x),
        y: Number(y),
      };
      (this.scatterChartData[0].data as ChartPoint[]).push(data);
    }

    this.pi = (4.0 * this.treffer / this.versuche);
    this.abweichung = (Math.abs(this.pi - Math.PI) / Math.PI) * 100;
  }

  clearData() {
    this.scatterChartData[0].data = [];
    this.versuche = 0;
    this.treffer = 0;
  }

}
