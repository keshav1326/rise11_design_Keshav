import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DashBoard from "./Components/DashBoard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Sector,
  Rectangle,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  const data = [
    { name: "Jan", CourseVisit: 20, CourseSale: 2 },
    { name: "Feb", CourseVisit: 48, CourseSale: 25 },
    { name: "Mar", CourseVisit: 50, CourseSale: 30 },
    { name: "Apr", CourseVisit: 55, CourseSale: 40 },
    { name: "May", CourseVisit: 60, CourseSale: 12 },
    { name: "June", CourseVisit: 80, CourseSale: 20 },
    { name: "July", CourseVisite: 63, CourseSale: 70 },
    { name: "Aug", CourseVisit: 50, CourseSale: 23 },
    { name: "Sept", CourseVisit: 65, CourseSale: 19 },
    { name: "Oct", CourseVisit: 48, CourseSale: 65 },
    { name: "Nov", CourseVisit: 30, CourseSale: 50 },
    { name: "Dec", CourseVisit: 80, CourseSale: 40 },
  ];
  const data2 = [
    { name: "Mo", value: 80 },
    { name: "Tu", value: 50 },
    { name: "Wed", value: 38 },
    { name: "Thu", value: 52 },
    { name: "Fri", value: 38 },
    { name: "Sat", value: 20 },
  ];
  const data02 = [
    { name: "A1", value: 2000 },
    { name: "A2", value: 1500 },
  ];
  return (
    <>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <div className="app-container">
            <p className="revenue"> Revenue</p>
            <LineChart
              width={700}
              height={200}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="CourseVisit"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="CourseSale" stroke="#82ca9d" />
            </LineChart>
            <p className="visitors">Visitors</p>
            <BarChart width={320} height={200} data={data2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="value"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
            </BarChart>
          </div>
          <div class="sale-container">
            <p className="sale">Sale</p>
            <PieChart
              width={400}
              height={200}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <Pie
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Sale</th>
                <th scope="col">Rating</th>
                <th scope="col">Earning</th>
                <th scope="col">Visitor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Complete Python Bootcamp</th>
                <td>Design</td>
                <td>150</td>
                <td>4.5</td>
                <td>$610.50</td>
                <td>24,512</td>
              </tr>
              <tr>
                <th scope="row">Advanced Excel Formulas</th>
                <td>Development</td>
                <td>20</td>
                <td>5.0</td>
                <td>$55.50</td>
                <td>6,200</td>
              </tr>
              <tr>
                <th scope="row">Advanced Excel Formulas</th>
                <td>Photography</td>
                <td>56</td>
                <td>4.0</td>
                <td>$610.50</td>
                <td>24,512</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
