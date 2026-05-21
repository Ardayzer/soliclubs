// User database
const users = [
  { key: "isilay", name: "IŞILAY YUDUM YAŞA", phone: "000***85", img: "icons/isilay_pp.png" },
  { key: "pelin",  name: "PELİN DURUKAN",     phone: "000***42", img: "icons/pelin_pp.png" },
  { key: "harun",  name: "HARUN DOĞRU",       phone: "000***17", img: "icons/harun_pp.png" },
  { key: "zeynep", name: "ZEYNEP KİBAR",      phone: "000***63", img: "icons/zeynep_pp.png" },
  { key: "mert",   name: "MERT AKTAŞ",        phone: "000***08", img: "icons/mert_pp.png" },
];

const avatarImg = document.getElementById("avatarImg");
const userName  = document.getElementById("userName");
const userPhone = document.getElementById("userPhone");
const avatarBtn = document.getElementById("avatarBtn");

// Determine starting user
function getInitialIndex() {
  const params = new URLSearchParams(window.location.search);
  const u = (params.get("u") || "").toLowerCase();
  const idx = users.findIndex(x => x.key === u);
  return idx >= 0 ? idx : 0;
}

let currentIndex = getInitialIndex();

function render(i) {
  const u = users[i];
  avatarImg.src = u.img;
  avatarImg.alt = u.name;
  userName.textContent = u.name;
  userPhone.textContent = u.phone;

  // Update URL (no reload)
  const params = new URLSearchParams(window.location.search);
  params.set("u", u.key);
  history.replaceState(null, "", "?" + params.toString());
}

render(currentIndex);

// Cycle on avatar click
avatarBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % users.length;
  render(currentIndex);
});
