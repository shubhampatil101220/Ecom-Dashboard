export interface LineChartData {
    labels: string[];
    datasets: {
      data: number[];
      borderColor: string;
      backgroundColor: string;
      pointRadius: number;
      lineTension: number;
      fill: {};
    }[];
  }