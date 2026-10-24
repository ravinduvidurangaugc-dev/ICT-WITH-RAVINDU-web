/* ---- EDIT HERE: one entry per file. Put the PDF path in `file` (e.g. "files/cmaths-2024.pdf") and remove `sample: true`. ---- */
/* One medium: use  file: "...", medium: "si"   |   Both Sinhala and English PDFs: use  files: { si: "...", en: "..." }   (no medium needed) */
var ITEMS = [
  { type: "paper", year: 2025, level: "ol", subject: "ict", pages: 12, size: "1.4 MB",
  files: { si: "files/ol/ol-2025-sinhala.pdf", en: "files/ol/ol-2025-english.pdf" },
  t: { en: "o/L 2025, Past Paper", si: "සාමාන්‍ය පෙළ 2025, පසුගිය ප්‍රශ්න පත්‍රය" } },

  { type: "paper", year: 2024, level: "ol", subject: "ict", pages: 12, size: "1.4 MB",
  files: { si: "files/ol/ol-2024-sinhala.pdf", en: "files/ol/ol-2024-english.pdf" },
  t: { en: "o/L 2024, Past Paper", si: "සාමාන්‍ය පෙළ 2024, පසුගිය ප්‍රශ්න පත්‍රය" } },

  { type: "paper", year: 2023, level: "ol", subject: "ict", pages: 12, size: "1.4 MB",
  files: { si: "files/ol/ol-2023-sinhala.pdf", en: "files/ol/ol-2023-english.pdf" },
  t: { en: "o/L 2023, Past Paper", si: "සාමාන්‍ය පෙළ 2023, පසුගිය ප්‍රශ්න පත්‍රය" } },

  { type: "paper", year: 2022, level: "ol", subject: "ict", pages: 12, size: "1.4 MB",
  files: { si: "files/ol/ol-2022-sinhala.pdf", en: "files/ol/ol-2022-english.pdf" },
  t: { en: "o/L 2022, Past Paper", si: "සාමාන්‍ය පෙළ 2022, පසුගිය ප්‍රශ්න පත්‍රය" } },

  { type: "paper", year: 2021, level: "ol", subject: "ict", pages: 12, size: "1.4 MB",
  files: { si: "files/ol/ol-2021-sinhala.pdf", en: "files/ol/ol-2021-english.pdf" },
  t: { en: "o/L 2021, Past Paper", si: "සාමාන්‍ය පෙළ 2021, පසුගිය ප්‍රශ්න පත්‍රය" } },

  { type: "paper", year: 2020, level: "ol", subject: "ict", pages: 12, size: "1.4 MB",
  files: { si: "files/ol/ol-2020-sinhala.pdf", en: "files/ol/ol-2020-english.pdf" },
  t: { en: "o/L 2020, Past Paper", si: "සාමාන්‍ය පෙළ 2020, පසුගිය ප්‍රශ්න පත්‍රය" } },

  { type: "paper", year: 2020, level: "al", subject: "ict", pages: 12, size: "1.4 MB",
  files: { si: "files/al/al-2020-sinhala.pdf", en: "files/al/al-2020-english.pdf" },
  t: { en: "A/L 2020, Past Paper", si: "උසස් පෙළ 2020, පසුගිය ප්‍රශ්න පත්‍රය" } }
];

var SUBJECTS = {
 cmaths: { en: "Combined Maths", si: "ඒකාබද්ධ ගණිතය" }, physics: { en: "Physics", si: "භෞතික විද්‍යාව" },
 chemistry: { en: "Chemistry", si: "රසායන විද්‍යාව" }, ict: { en: "ICT", si: "තොරතුරු තාක්ෂණය" },
 maths: { en: "Mathematics", si: "ගණිතය" }, science: { en: "Science", si: "විද්‍යාව" },
 history: { en: "History", si: "ඉතිහාසය" }, english: { en: "English", si: "ඉංග්‍රීසි" }, sinhala: { en: "Sinhala", si: "සිංහල" }
};
var LEVELS = { al: { en: "A/L", si: "උසස් පෙළ" }, ol: { en: "O/L", si: "සාමාන්‍ය පෙළ" } };
var MEDIUMS = {
  si: { en: "Sinhala", si: "සිංහල" },
  en: { en: "English", si: "ඉංග්‍රීසි" },
  both: { en: "Sinhala + English", si: "සිංහල + ඉංග්‍රීසි" }
};

var UI = {
  en: {
    h1:"ICT With Ravindu.",
    h2: "Every <mark>tute</mark> and paper, in one place.", sub: "Find your notes and past papers by subject, level and year. Open the PDF and start studying.",
    notice: "This is a notice board.",
    all: "All", tutes: "Tutes", papers: "Past papers", search: "Search",
    level: "Level", year: "Year", medium: "Medium", anyLevel: "All levels", anyYear: "All years", anyMedium: "All mediums", anySubject: "All subjects",
    shown: function (n, t) { return n + " of " + t + " files"; }, clear: "Clear filters",
    open: "Open PDF", save: "Save", sample: "Sample", pages: "pages", tute: "TUTE", paper: "PAPER",
    none: "Nothing matches that search", noneHint: "Try a different word, or clear the filters.",
    foot: "Tap Open PDF to read in your browser or save the file to your phone."
  },
  si: {
    h1:"ICT With Ravindu.",
    h2: "සියලුම <mark>ටියුට්</mark> සහ ප්‍රශ්න පත්‍ර, එකම තැනක.", sub: "විෂය, මට්ටම සහ වර්ෂය අනුව ඔබේ සටහන් සහ පසුගිය ප්‍රශ්න පත්‍ර සොයාගන්න. PDF එක විවෘත කර ඉගෙනීම ආරම්භ කරන්න.",
    notice: "මෙය දැන්වීම් පුවරුවයි.",
    all: "සියල්ල", tutes: "ටියුට්", papers: "පසුගිය ප්‍රශ්න පත්‍ර", search: "සොයන්න",
    level: "මට්ටම", year: "වර්ෂය", medium: "මාධ්‍යය", anyLevel: "සියලු මට්ටම්", anyYear: "සියලු වර්ෂ", anyMedium: "සියලු මාධ්‍ය", anySubject: "සියලු විෂයන්",
    shown: function (n, t) { return "ගොනු " + t + " න් " + n; }, clear: "පෙරහන් ඉවත් කරන්න",
    open: "PDF විවෘත කරන්න", save: "සුරකින්න", sample: "නියැදිය", pages: "පිටු", tute: "ටියුට්", paper: "ප්‍රශ්න පත්‍රය",
    none: "ඒ සෙවීමට ගැළපෙන දෙයක් නැත", noneHint: "වෙනත් වචනයක් උත්සාහ කරන්න, නැතහොත් පෙරහන් ඉවත් කරන්න.",
    foot: "PDF විවෘත කරන්න ඔබා බ්‍රවුසරයේම කියවන්න, නැතහොත් ගොනුව ඔබේ දුරකථනයට සුරකින්න."
  }
};

var S = { lang: "en", tab: "all", q: "", level: "", year: "", medium: "", subject: "" };
var $ = function (id) { return document.getElementById(id); };
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }
function mediumsOf(it) { return it.files ? Object.keys(it.files) : [it.medium]; }
function pdfButtons(url, label, T) {
  return '<span class="pdf">' +
    '<a class="btn" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(label) + "</a>" +
    '<a class="btn save" href="' + esc(url) + '" download>' + esc(T.save) + "</a></span>";
}

function matches(it, ignore) {
  if (ignore !== "tab" && S.tab !== "all" && it.type !== S.tab) return false;
  if (S.level && it.level !== S.level) return false;
  if (S.medium && mediumsOf(it).indexOf(S.medium) < 0) return false;
  if (S.subject && it.subject !== S.subject) return false;
  if (S.year && String(it.year) !== S.year) return false;
  if (S.q) {
    var hay = [it.t.en, it.t.si, SUBJECTS[it.subject].en, SUBJECTS[it.subject].si].join(" ").toLowerCase();
    if (hay.indexOf(S.q.toLowerCase()) < 0) return false;
  }
  return true;
}

function fillSelect(el, opts, current) {
  el.innerHTML = opts.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (o[0] === current ? " selected" : "") + ">" + esc(o[1]) + "</option>"; }).join("");
}

function render() {
  var L = S.lang, T = UI[L];
  document.documentElement.lang = L === "si" ? "si" : "en";
  $("h1").innerHTML = T.h1; $("sub").textContent = T.sub;
  var hasSample = ITEMS.some(function (i) { return i.sample; });
  $("notice").hidden = !hasSample; $("notice").textContent = T.notice;
  $("q").placeholder = T.search; $("q").setAttribute("aria-label", T.search);
  $("l-level").textContent = T.level; $("l-year").textContent = T.year; $("l-medium").textContent = T.medium;
  $("foot").textContent = T.foot;
  $("lang-si").setAttribute("aria-pressed", L === "si"); $("lang-en").setAttribute("aria-pressed", L === "en");

  var counts = { all: 0, tute: 0, paper: 0 };
  ITEMS.forEach(function (i) { if (matches(i, "tab")) { counts.all++; counts[i.type]++; } });
  $("tabs").innerHTML = [["all", T.all], ["tute", T.tutes], ["paper", T.papers]].map(function (t) {
    return '<button class="tab" type="button" data-tab="' + t[0] + '" aria-pressed="' + (S.tab === t[0]) + '">' + esc(t[1]) + ' <span class="n">' + counts[t[0]] + "</span></button>";
  }).join("");

  fillSelect($("f-level"), [["", T.anyLevel]].concat(Object.keys(LEVELS).map(function (k) { return [k, LEVELS[k][L]]; })), S.level);
  var years = []; ITEMS.forEach(function (i) { if (i.year && years.indexOf(i.year) < 0) years.push(i.year); }); years.sort(function (a, b) { return b - a; });
  fillSelect($("f-year"), [["", T.anyYear]].concat(years.map(function (y) { return [String(y), String(y)]; })), S.year);
  fillSelect($("f-medium"), [["", T.anyMedium]].concat(Object.keys(MEDIUMS).map(function (k) { return [k, MEDIUMS[k][L]]; })), S.medium);

  var used = Object.keys(SUBJECTS).filter(function (k) { return ITEMS.some(function (i) { return i.subject === k; }); });
  $("chips").innerHTML = [["", T.anySubject]].concat(used.map(function (k) { return [k, SUBJECTS[k][L]]; })).map(function (c) {
    return '<button class="chip" type="button" data-subject="' + c[0] + '" aria-pressed="' + (S.subject === c[0]) + '">' + esc(c[1]) + "</button>";
  }).join("");
  $("chips").hidden = used.length < 2;

  var shown = ITEMS.filter(function (i) { return matches(i); });
  shown.sort(function (a, b) { return (b.year || 0) - (a.year || 0) || a.t.en.localeCompare(b.t.en); });
  $("count").textContent = T.shown(shown.length, ITEMS.length);
  var filtered = S.q || S.level || S.year || S.medium || S.subject || S.tab !== "all";
  $("reset").hidden = !filtered; $("reset").textContent = T.clear;

  if (!shown.length) {
    $("list").innerHTML = '<li class="empty"><strong>' + esc(T.none) + "</strong>" + esc(T.noneHint) + "</li>";
    return;
  }
  $("list").innerHTML = shown.map(function (it) {
    var action;
    if (it.files) {
      action = '<div class="actions">' + Object.keys(it.files).map(function (m) {
        return pdfButtons(it.files[m], MEDIUMS[m][L] + " PDF", T);
      }).join("") + "</div>";
    } else if (it.file) {
      action = pdfButtons(it.file, T.open, T);
    } else {
      action = '<span class="btn ghost">' + esc(T.sample) + "</span>";
    }
    var yr = it.year ? '<span><b class="mono">' + it.year + "</b></span>" : "";
    var med = mediumsOf(it).map(function (m) { return MEDIUMS[m][L]; }).join(" + ");
    return '<li class="item"><span class="kind ' + it.type + '">' + esc(it.type === "tute" ? T.tute : T.paper) + "</span>" +
      '<div><h3>' + esc(it.t[L]) + '</h3><div class="meta">' + yr +
      "<span>" + esc(SUBJECTS[it.subject][L]) + "</span><span>" + esc(LEVELS[it.level][L]) + "</span><span>" + esc(med) + "</span>" +
      '<span class="mono">' + it.pages + " " + esc(T.pages) + " · " + esc(it.size) + "</span></div></div>" + action + "</li>";
  }).join("");
}

/* events */
$("tabs").addEventListener("click", function (e) { var b = e.target.closest("[data-tab]"); if (b) { S.tab = b.dataset.tab; render(); } });
$("chips").addEventListener("click", function (e) { var b = e.target.closest("[data-subject]"); if (b) { S.subject = b.dataset.subject; render(); } });
$("q").addEventListener("input", function (e) { S.q = e.target.value.trim(); render(); $("q").focus(); });
$("f-level").addEventListener("change", function (e) { S.level = e.target.value; render(); });
$("f-year").addEventListener("change", function (e) { S.year = e.target.value; render(); });
$("f-medium").addEventListener("change", function (e) { S.medium = e.target.value; render(); });
$("reset").addEventListener("click", function () { S.tab = "all"; S.q = ""; S.level = S.year = S.medium = S.subject = ""; $("q").value = ""; render(); });
$("lang-si").addEventListener("click", function () { S.lang = "si"; store("shelf-lang", "si"); render(); });
$("lang-en").addEventListener("click", function () { S.lang = "en"; store("shelf-lang", "en"); render(); });
$("theme-btn").addEventListener("click", function () {
  var root = document.documentElement;
  var dark = root.getAttribute("data-theme") === "dark" || (!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  var next = dark ? "light" : "dark";
  root.setAttribute("data-theme", next); store("shelf-theme", next);
  $("theme-btn").textContent = next === "dark" ? "☀" : "☾";
});

var savedLang = store("shelf-lang"); if (savedLang === "si" || savedLang === "en") S.lang = savedLang;
var savedTheme = store("shelf-theme");
if (savedTheme === "dark" || savedTheme === "light") { document.documentElement.setAttribute("data-theme", savedTheme); $("theme-btn").textContent = savedTheme === "dark" ? "☀" : "☾"; }
render();
