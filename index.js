let clicks = 0;
let cpc = 1;
let cps = 0;
let nu = 20;
let cpsUpgrade = 50;

document.getElementById("getScore").onclick = function scoreUp() {
  clicks += cpc;
  document.getElementById("score").innerHTML = "clicks: " + clicks;
};

document.getElementById("upgrade").onclick = function cpcUpgrade() {
  if (clicks >= nu) {
    clicks -= nu;
    document.getElementById("score").innerHTML = "clicks: " + clicks;
    cpc += Math.ceil((cpc += 0.75 * cpc));
    document.getElementById("cpc").innerHTML = "CPC: " + cpc;
    nu += Math.ceil((nu += 1.5 * nu));
    document.getElementById("nextUp").innerHTML = nu + " Clicks";
  }
};

document.getElementById("cpsUp").onclick = function cpsUp() {
  if (clicks >= cpsUpgrade) {
    cps += 1;
    cps += Math.ceil(cps * 1.5);
    clicks -= cpsUpgrade;
    cpsUpgrade *= 1.8;
    document.getElementById("score").innerHTML = "clicks: " + clicks;
    document.getElementById("cpsUpgrade").innerHTML = "cps cost: " + cpsUpgrade;
    document.getElementById("cps").innerHTML = "cps: " + cps;
  }
};
setInterval(function click() {
  clicks += cps;
  document.getElementById("score").innerHTML = "clicks: " + clicks;
}, 1000);
