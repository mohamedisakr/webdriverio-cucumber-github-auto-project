const page = require("../page-objects/enterprise.page");

function load() {
  page.load();
}

function startFreeTrial() {
  page.$enterpriseButton.click();
}

function goCloud() {
  page.$cloud.click();
}

function goServer() {
  page.$server.click();
}

export { load, startFreeTrial, goCloud, goServer };
