import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Line } from "react-chartjs-2";

function last7Days() {
  return [0, 1, 2, 3, 4, 5, 6, 7]
    .map(function(n) {
      var d = new Date();
      d.setDate(d.getDate() - n);

      return (function(day, month, year) {
        return [
          year,
          month + 1 < 10 ? `0${month + 1}` : month + 1,
          day < 10 ? `0${day}` : day,
        ].join("-");
      })(d.getDate(), d.getMonth(), d.getFullYear());
    })
    .reverse();
}

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allPrismicPomodoro {
          edges {
            node {
              data {
                date
                completed
                abandoned
              }
            }
          }
        }
      }
    `}
    render={data => {
      const labels = last7Days();
      const completed = {};
      const abandoned = {};

      data.allPrismicPomodoro.edges.forEach(edge => {
        completed[edge.node.data.date] = edge.node.data.completed;
        abandoned[edge.node.data.date] = edge.node.data.abandoned;
      });
      const lineGraphData = {
        labels: labels,
        datasets: [
          {
            label: "Completed",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(64, 127, 194, .5)",
            borderColor: "rgba(59, 111, 183,1)",
            borderCapStyle: "butt",
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(59, 111, 183,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(59, 111, 183,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: labels.map(date => (completed[date] ? completed[date] : 0)),
          },
          {
            label: "Abandoned",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(192,192,192,0.4)",
            borderColor: "rgba(192,192,192,1)",
            borderCapStyle: "butt",
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(192,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(192,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: labels.map(date => (abandoned[date] ? abandoned[date] : 0)),
          },
        ],
      };

      return (
        <div>
          <Line data={lineGraphData} />
        </div>
      );
    }}
  />
);
