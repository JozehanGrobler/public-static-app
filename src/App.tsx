import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./App.css";

// Boy and girl name lists
const boyNames = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Joseph",
  "Thomas",
  "Christopher",
];

const girlNames = [
  "Mary",
  "Patricia",
  "Jennifer",
  "Linda",
  "Barbara",
  "Elizabeth",
  "Susan",
  "Jessica",
  "Sarah",
  "Karen",
];

function App() {
  const [boyCollapsed, setBoyCollapsed] = useState(false);
  const [girlCollapsed, setGirlCollapsed] = useState(false);

  // Count votes
  const boyVotes = boyNames.length;
  const girlVotes = girlNames.length;

  // Prepare data for pie chart
  const chartData = [
    { name: "Boy", value: boyVotes, fill: "#3b82f6" },
    { name: "Girl", value: girlVotes, fill: "#ec4899" },
  ];

  return (
    <>
      <section id="center">
        <div className="guess-container">
          <h1>Guess who?</h1>
          <p className="description">
            The chart below shows how many people guessed it's a boy and how
            many people guessed it's a girl
          </p>

          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="votes-summary">
            <div className="vote-card boy">
              <div className="vote-count">{boyVotes}</div>
              <div className="vote-label">Boy Votes</div>
            </div>
            <div className="vote-card girl">
              <div className="vote-count">{girlVotes}</div>
              <div className="vote-label">Girl Votes</div>
            </div>
          </div>

          <div className="names-section">
            <div className="collapsible">
              <button
                className="collapsible-button boy-button"
                onClick={() => setBoyCollapsed(!boyCollapsed)}
              >
                <span className="button-icon">{boyCollapsed ? "▶" : "▼"}</span>
                Boy Guessees ({boyNames.length})
              </button>
              {boyCollapsed && (
                <div className="collapsible-content boy-content">
                  <ul className="names-list">
                    {boyNames.map((name, index) => (
                      <li key={index}>{name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="collapsible">
              <button
                className="collapsible-button girl-button"
                onClick={() => setGirlCollapsed(!girlCollapsed)}
              >
                <span className="button-icon">{girlCollapsed ? "▶" : "▼"}</span>
                Girl Guessees ({girlNames.length})
              </button>
              {girlCollapsed && (
                <div className="collapsible-content girl-content">
                  <ul className="names-list">
                    {girlNames.map((name, index) => (
                      <li key={index}>{name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
