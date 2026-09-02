/**
 * chakridev.dev — Portfolio JavaScript v2
 * Chakravarthy Amajala | AWS Cloud DevOps Engineer
 * Logic is embedded inline in index.html; this file is the extracted companion.
 */

// Loader
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2100);
});

// Particles, Typewriter, Scroll behaviors, Reveal, Counters, Resume, Contact
// — all logic lives in index.html <script> block for zero-dependency loading.
// This file exists for reference, linting, and future refactoring into ES modules.

function dlResume() {
  const a = document.createElement('a');
  a.href = 'Chakravarthy-Resume.pdf';
  a.download = 'Chakravarthy_Amajala_DevOps_Resume.pdf';
  a.click();
}

function sendMail() {
  const n = document.getElementById('cn').value;
  const e = document.getElementById('ce').value;
  const s = document.getElementById('cs').value;
  const m = document.getElementById('cm').value;
  if (!n || !e || !m) { alert('Please fill in name, email, and message.'); return; }
  const body = encodeURIComponent(`From: ${n} (${e})\n\n${m}`);
  const subj = encodeURIComponent(s || 'Portfolio Inquiry');
  window.open(`mailto:chakridevops16@gmail.com?subject=${subj}&body=${body}`);
}
