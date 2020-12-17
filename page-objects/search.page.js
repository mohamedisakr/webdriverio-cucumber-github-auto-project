const PageBase = require("./base.page");

class SearchPage extends PageBase {
  constructor() {
    super("./");
    console.log(super.path);
  }

  // 2. go to search box and type webdriverio and press enter
  get $searchBox() {
    return $("[name='q'][type='text']");
  }

  // 3. go to the Language left side bar and click TypeScript
  get $language() {
    return $("a[href*='TypeScript'][class='filter-item']");
  }

  get $firstResult() {
    return $(".repo-list-item:nth-child(1) .v-align-middle");
  }
}

module.exports = new SearchPage();
