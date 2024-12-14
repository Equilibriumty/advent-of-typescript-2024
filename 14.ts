type PerfReview<T> =
  T extends AsyncGenerator<infer K, infer A, infer R> ? K : never;
