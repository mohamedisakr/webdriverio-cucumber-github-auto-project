import { When } from "cucumber";
import { getOpenPosistions } from "../../services/career";

When("the user can navigate through open positions", () => {
  const openPositions = getOpenPosistions();
  console.log(openPositions);
});
