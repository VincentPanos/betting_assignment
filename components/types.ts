export interface Match {
  id: string;
  name: string;
  competitionId: string;
  competition: string;
  countryId: string;
  country: string;
  timestamp: number;
  date: string;
  time: string;
  status: Status;
  round: Round;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  homeScore: HomeScore;
  awayScore: AwayScore;
  liveStatus: string;
}

export interface Status {
  code: number;
  type: string;
}

export interface Round {
  round: number;
}

export interface HomeTeam {
  id: number;
  name: string;
  slug: string;
  gender: string;
  subTeams: any[];
}

export interface AwayTeam {
  id: number;
  name: string;
  slug: string;
  gender: string;
  subTeams: any[];
}

export interface HomeScore {
  current: number;
  period1: number;
  normaltime: number;
}

export interface AwayScore {
  current: number;
  period1: number;
  normaltime: number;
}
