/**
 * chakridev.dev — Portfolio JavaScript (reference copy)
 * Chakravarthy Amajala | AWS Cloud DevOps Engineer
 * All production logic is embedded inline in index.html for zero-dependency loading.
 * This file exists for reference, linting, and future refactoring into ES modules.
 */

function dlResume() {
  const a = document.createElement('a');
  a.href = 'Chakravarthy-Resume.pdf';
  a.download = 'Chakravarthy_Amajala_DevOps_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function sendMsg() {
  const n = document.getElementById('fn').value.trim();
  const e = document.getElementById('fe').value.trim();
  const s = document.getElementById('fs').value.trim();
  const m = document.getElementById('fm').value.trim();
  if (!n || !e || !m) { alert('Please fill in name, email, and message.'); return; }
  const body = encodeURIComponent(`From: ${n} (${e})\n\n${m}`);
  const subj = encodeURIComponent(s || 'Portfolio Inquiry');
  window.open(`mailto:chakridevops16@gmail.com?subject=${subj}&body=${body}`);
}
