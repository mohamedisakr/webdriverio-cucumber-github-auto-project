const page = require("../page-objects/career.page");
const { getTrimmedText } = require("../utils/functions");

function load() {
  page.load();
}

function getOpenPosistions() {
  let table = `\n`;
  page.$$openPositions.forEach((position) => {
    let department = getTrimmedText(
      position.$("h3[class='float-left h3-mktg text-normal py-4']")
    );

    let openings = getTrimmedText(
      position.$("span[class='float-right d-inline-block my-4']")
    );

    table += `${department}\t\t${openings}\n`;
  });
  return table;
}

export { load, getOpenPosistions };
