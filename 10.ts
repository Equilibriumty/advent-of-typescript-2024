enum Gift {
  Coal = 0,
  Train = 1,
  Bicycle = 2,
  SuccessorToTheNintendoSwitch = 4,
  TikTokPremium = 4 * 2,
  Vape = 4 * 4,
  Traditional = Bicycle | Train,
  OnTheMove = Coal | Bicycle | TikTokPremium | Vape,
  OnTheCouch = Coal | SuccessorToTheNintendoSwitch | TikTokPremium | Vape,
}
