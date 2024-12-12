type FormatNames<T extends [string, string, string][]> = {
  [K in keyof T]: {
    name: T[K][0];
    count: T[K][2] extends `${infer N extends number}` ? N : never;
    rating: T[K][0] extends "Liam" | "Aala" ? "naughty" : "nice";
  };
};
