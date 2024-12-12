type Excuse<T> = new (
  data: T,
) => T extends Record<infer R extends string, any> ? `${R}: ${T[R]}` : never;
