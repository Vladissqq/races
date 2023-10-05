export interface Race {
  raceName: string;
  season: string;
  time: string;
  url: string;
  position: string;
  circuitId: string;
  points: string;
}

export interface InitialRace {
  raceName: string;
  season: string;
  time: string;
  url: string;
  circuitId: string;
  Results: [
    {
      position: string;
      points: string;
    },
  ];
}
