import { Match } from "./types";
import { ScoreBox } from "./ScoreBox";
import { useRouter } from "next/router";
import { useMemo } from "react";

const findGamesByType = (
  matches: Match[],
  filter: string | string[] | undefined
) => {
  if (!filter || filter === "all") return matches;
  const game = matches.filter((obj) => obj.status.type === filter);
  return game;
};

export function SportsBook({ matches }: { matches: Match[] }) {
  const router = useRouter();
  const { filter } = router.query;
  const games = useMemo(
    () => findGamesByType(matches, filter),
    [matches, filter]
  );
  return (
    <div>
      {games.map((match, index) => (
        <ScoreBox key={index} game={match} />
      ))}
    </div>
  );
}
