import { useState } from "react";

const Button = ({ onClick, text }) => {
  return (
  <button
    onClick={onClick}

  >
    {text}
  </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td className="uppercase">{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({ good, neutral, bad, AvgFeed, totalFeed, positiveFeed }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h1>statistics</h1>
      <table className="table-auto border-collapse border border-gray-400 mt-2">
        <tbody>
          {/* <tr>
            <td className="">Good</td>
            <td className="">{good}</td>
          </tr> */}
          <StatisticLine text="Good" value={good} />
          {/* <tr>
            <td className="">Neutral</td>
            <td className="">{neutral}</td>
          </tr> */}
          <StatisticLine text="Neutral" value={neutral} />
          {/* <tr>
            <td className="">Bad</td>
            <td className="">{bad}</td>
          </tr> */}
          <StatisticLine text="Bad" value={bad} />
          {/* <tr>
            <td className="">All</td>
            <td className="">{totalFeed}</td>
          </tr> */}
          <StatisticLine text="All" value={totalFeed} />
          {/* <tr>
            <td className="">Average</td>
            <td className="">{AvgFeed}</td>
          </tr> */}
          <StatisticLine text="Average" value={AvgFeed} />
          {/* <tr>
            <td className="">Positive</td>
            <td className="">{positiveFeed} %</td>
          </tr> */}
          <StatisticLine text="Positive" value={`${positiveFeed} %`} />
        </tbody>
      </table>
    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeed = good + neutral + bad;
  const AvgFeed = totalFeed === 0 ? 0 : (good - bad) / totalFeed;
  const positiveFeed = totalFeed === 0 ? 0 : (good / totalFeed) * 100;

  return (
    <div>
      <h1>give feedback</h1>

    <div >
     <Button
          onClick={() => setGood(good + 1)}
          text="Good"
        />
        <Button
          onClick={() => setNeutral(neutral + 1)}
          text="Neutral"
        />
        <Button
          onClick={() => setBad(bad + 1)}
          text="Bad"
        />
        <Button
          onClick={() => {
            (setGood(0), setNeutral(0), setBad(0));
          }}
          text="Reset"
        />
      </div>

    <Statistics good={good} neutral={neutral} bad={bad} AvgFeed={AvgFeed} totalFeed={totalFeed} positiveFeed={positiveFeed}/>

  </div>
)
};

export default App;
