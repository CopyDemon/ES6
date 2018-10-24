(function() {
  var whileList = {
    "qzs.qq.com": 1,
    "astro.fashion.qq.com": 2,
    "gameapp.qq.com": 2,
    "fn.qq.com": 2
  };

  function getHostname(href) {
    var a = document.createElement("a");
    a.href = href;

    return a.hostname;
  }

  if (window.opener && document.referrer) {
    var hostname = getHostname(document.referrer);
    var hostSplit = hostname.split(".");
    var domain2 = hostSplit.slice(-2).join(".");
    var domain3 = hostSplit.slice(-3).join(".");
    var domain4 = hostSplit.slice(-4).join(".");
    var parentDomain3;

    try {
      parentDomain3 = getHostname(window.opener.parent.location.href)
        .split(".")
        .slice(-3)
        .join(".");
    } catch (error) {
      parentDomain3 = "";
    }

    if (domain2 === "qq.com" && domain3 !== "qzone.qq.com") {
      if (
        (whileList[domain3] === 1 || whileList[domain4] === 1) &&
        parentDomain3 &&
        parentDomain3 === "qzone.qq.com"
      ) {
        // 类型 1
        console.log("whileList opener type 1");
      } else if (whileList[domain3] === 2 || whileList[domain4] === 2) {
        // 类型 2
        console.log("whileList opener type 2");
      } else {
        window.close();
      }
    }
  }
})();
