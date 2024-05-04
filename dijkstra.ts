const graph: Record<string, Record<string, number>> = {
  start: { a: 6, b: 2 },
  a: { finish: 1 },
  b: { a: 3, finish: 5 },
  finish: {},
};

const costs: Record<string, number> = {
  a: 6,
  b: 2,
  finish: Infinity,
};

const parents: Record<string, string> = {
  a: "start",
  b: "start",
  finish: "",
};

const processed: string[] = [];

function findLowestCostNode(costs: Record<string, number>) {
  let lowestCostNode = null;
  let lowestCost = Infinity;

  for (const node in costs) {
    const cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
}

let node = findLowestCostNode(costs);
while (node !== null) {
  const cost = costs[node];
  const neighbors = graph[node];

  for (const neighbor in neighbors) {
    const newCost = cost + neighbors[neighbor];
    if (costs[neighbor] > newCost) {
      costs[neighbor] = newCost;
      parents[neighbor] = node;
    }
  }

  processed.push(node);
  node = findLowestCostNode(costs);
}

// Reconstruindo o caminho mais curto
let path = [];
let step = "finish";
while (step !== "start") {
  path.push(step);
  step = parents[step];
}
path.push("start");
path.reverse();

console.log("Caminho mais curto:", path.join(" -> "));
console.log("Custo total:", costs["finish"]);
