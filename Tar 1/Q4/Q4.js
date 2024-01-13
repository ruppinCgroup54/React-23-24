// Q4 - 1

class point {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }

  Show() {
    console.log(`x value = ${this.x}, y value = ${this.y}`);
  }

  Equals(p) {
    return this.x == p.x && this.y == p.y;
  }
}

var pArr = [
  new point(5, 3),
  new point(-2, 5),
  new point(2, -9),
  new point(8, 3),
  new point(-1, 5),
  new point(5, 7),
  new point(-6, 3),
];

const pIn = new point(2, -9);
const pNot = new point(1, 1);

// Q4 - 2

function ArrayContainPoint(pointArr, x, y) {
  return pointArr.some((item) => item.x == x && item.y == y);
}

console.log(ArrayContainPoint(pArr, pIn.x, pIn.y));
console.log(ArrayContainPoint(pArr, pNot.x, pNot.y));

// Q4 - 3

function ArrayEqualPoint(pointArr, point) {
  return pointArr.some((item) => item.Equals(point));
}

console.log(ArrayEqualPoint(pArr, pIn));
console.log(ArrayEqualPoint(pArr, pNot));

//Q4 - 4

var pArr2 = [
  new point(1.2, 2),
  new point(4, 5.8),
  new point(8, 7),
  new point(4.6, 7.9),
];

function MeasureTotalDistance(pointsArr) {
  var distance = 0;
  for (let i = 0; i < pointsArr.length - 1; i++) {
    distance += DistanceB2Points(pointsArr[i], pointsArr[i + 1]);
  }
  return distance;
}

function DistanceB2Points(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

newPoint=()=>{
  pArr2.push(new point(document.querySelector("#Xa").value,document.querySelector("#Ya").value));
  myChart.update()
}

const loadChart = () => {
  pArr2.map((i) => i.Show());

  const data = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        label: "Road points",
        data: pArr2,
        borderColor: "rgba(255, 99, 99,1)",
        backgroundColor: "rgba(255, 99, 99,0.5)",
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: `Total distance = ${MeasureTotalDistance(pArr2)}`,
          font:{
            size:40
          }
        },
        tooltip: {
          usePointStyle: true,
          font:{
            size:30,
          },
          callbacks: {
            title: (context)=>{return "Current location"},
            label: (item)=>{return `  {x=${item.dataset.data[item.dataIndex].x},y=${item.dataset.data[item.dataIndex].y}}`},
            labelColor: function(context) {
              return {
                  backgroundColor: 'rgb(255, 0, 0)',
                  borderWidth: 3,
                  borderRadius: 2,
              };
              
          },
        },
      }},
      interaction: {
        intersect: false,
      },
      responsive: true,
      scales: {
        x: {
          type: "linear",
        },
        y:{
          min:0
        }
      },
    },
  };

  myChart = new Chart("myChart", config);
};
