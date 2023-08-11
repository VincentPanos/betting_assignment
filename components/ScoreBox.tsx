import { LiveStatus } from "./LiveStatus";
import { Match } from "./types";

import styled from "styled-components";
import { format } from "date-fns";

type StatusMapType = {
  notstarted: string;
  finished: string;
  canceled: string;
  inprogress: string;
};

const statusMap: StatusMapType = {
  notstarted: "notstarted",
  finished: "ENDED",
  canceled: "canceled",
  inprogress: "LIVE",
};

const Box = styled.div`
  margin: 5px;
  border-bottom: solid;
  border-color: white;
  border-width: 2px;
  text-align: center;
`;

const Status = styled.h4`
  color: white;
  &.canceled {
    color: #a55c66;
  }
  &.inprogress {
    color: #baab27;
  }
  &.finished {
    color: #41a051;
  }
`;

const Teams = styled.h2`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    font-size: 20px;
  }

  div {
    margin: auto;
    flex: 1;
  }
`;

export function ScoreBox({ game }: { game: Match }) {
  const date = game.date.split(".");
  return (
    <Box>
      <h4>{game.country}</h4>
      <h2>{game.competition}</h2>
      <Status className={game.status.type}>
        {game.status.type === statusMap.notstarted
          ? format(
              new Date(Number(date[2]), Number(date[1]), Number(date[0])),
              "MMM dd'th' yyyy"
            ).toUpperCase()
          : statusMap[game.status.type].toUpperCase()}
      </Status>
      <h1>
        {game.status.type === statusMap.notstarted ||
        game.status.type === statusMap.canceled ? (
          <span>0 - 0</span>
        ) : (
          <span>
            {game.homeScore.current} - {game.awayScore.current}
          </span>
        )}
      </h1>
      <Teams>
        <div>{game.homeTeam.name}</div>
        <div>
          <LiveStatus game={game} />
        </div>
        <div>{game.awayTeam.name}</div>
      </Teams>
    </Box>
  );
}
