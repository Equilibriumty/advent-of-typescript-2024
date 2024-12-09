declare module "santas-special-list" {
  type Status = "nice" | "naughty";

  type Child = {
    name: string;
    status: Status;
  };

  type List = Child[];
}
