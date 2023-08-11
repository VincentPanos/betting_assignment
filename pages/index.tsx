import { Suspense, useState, useEffect } from "react";
import { Match } from "../components/types";
import { getSports } from "../api";
import { SportsBook } from "../components/SportsBook";
import { Filters } from "../components/Filters";
import { Container, Main, Header } from "../components/sharedstyles";

export default function Home() {
  const [data, setData] = useState<Match[]>([]);

  useEffect(() => {
    getSports<Match[]>(
      `https://raw.githubusercontent.com/spinbet/fe-interview-test/master/data/sports.json`
    ).then((data) => setData(data));
  }, []);

  return (
    <Container>
      <Main>
        <Suspense fallback={"Loading..."}>
          <Header>
            <Filters matches={data} />
          </Header>
          <SportsBook matches={data} />
        </Suspense>
      </Main>
    </Container>
  );
}
