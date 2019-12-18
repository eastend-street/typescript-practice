export const test = (name: string) => {
  const age: number = 32;

  var reactClass: {
    name: string;
    number: number;
  };

  reactClass = {
    name: "React",
    number: 20
  };

  let array: string[] = ["banana", "kiwi", "mango"];

  // union
  let array2: Array<string | string[]> = [
    "desktop",
    "iphone",
    ["android", "ios"]
  ];

  // tuple
  let array3: [string, number] = ["Ayako", 32];

  console.log("age", age);
  console.log("name", `Hi, ${name}`);
  console.log(add(1));
  console.log(multiply(2));
};

export const add = (a: number, b?: number) => {
  if (!b) {
    return a;
  }
  return a + b;
};

export const multiply = (a: number, b: number = 2) => {
  return a * b;
};

enum SuperHero {
  Ironman,
  DeadPool,
  SpiderMan
}

export const getHero = (villain: string): SuperHero => {
  if (villain === "Mystery") {
    return SuperHero.SpiderMan;
  }
  if (villain === "Thanos") return SuperHero.Ironman;

  return SuperHero.DeadPool;
};
