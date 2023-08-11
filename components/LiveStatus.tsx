import styled from "styled-components";
import { Match } from "./types";

const SingleChart = styled.div`
  display: block;
  margin: 10px auto;
  width: 110px;
  height: 110px;

  .circle-bg {
    fill: none;
    stroke: lightgray;
    stroke-width: 2.8;
  }

  .circle {
    fill: none;
    stroke-width: 1.8;
    stroke-linecap: round;
  }

  .circular-chart.green .circle {
    stroke: #4cc790;
  }

  .percentage {
    fill: white;
    font-size: 0.5em;
    text-anchor: middle;
  }
`;

const minutesToDeg = (minutes: string): number => {
  switch (minutes) {
    case "-":
      return 0;
    case "HT":
      return 50;
    case "45+":
      return 50;
    case "FT":
      return 100;
    case "90+":
      return 100;
    default: {
      return (Number(minutes) / 90) * 100;
    }
  }
};

export function LiveStatus({ game }: { game: Match }) {
  return (
    <SingleChart>
      <svg viewBox="0 0 36 36" className="circular-chart green">
        <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        {minutesToDeg(game.liveStatus) && (
          <path
            className="circle"
            stroke-dasharray={minutesToDeg(game.liveStatus) + ", 100"}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        )}
        <text x="18" y="22" className="percentage">
          {game.liveStatus !== "-" && game.liveStatus !== "Canceled"
            ? game.liveStatus
            : ""}
        </text>
      </svg>
    </SingleChart>
  );
}
