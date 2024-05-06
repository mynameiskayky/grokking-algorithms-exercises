let statesToCover = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations: { [key: string]: Set<string> } = {
  kone: new Set(["id", "nv", "ut"]),
  ktwo: new Set(["wa", "id", "mt"]),
  kthree: new Set(["or", "nv", "ca"]),
  kfour: new Set(["nv", "ut"]),
  kfive: new Set(["ca", "az"]),
};

const finalStations: Set<string> = new Set();

while (statesToCover.size) {
  let bestStation: string | null = null;
  let coveredStates: Set<string> = new Set();

  for (const station in stations) {
    const covered = new Set(
      [...stations[station]].filter((state) => statesToCover.has(state))
    );
    if (covered.size > coveredStates.size) {
      bestStation = station;
      coveredStates = covered;
    }
  }

  coveredStates.forEach((state) => statesToCover.delete(state));
  if (bestStation) {
    finalStations.add(bestStation);
  }
}
console.log(finalStations);
