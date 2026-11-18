const students = [
  { name: 'Sophie Williams', email: 'sophie.w@email.com', course: 'UX Design Fundamentals', progress: 82, status: 'Active', initials: 'SW', color: 'peach', joined: 'Oct 24, 2024' },
  { name: 'Liam Chen', email: 'liam.chen@email.com', course: 'Digital Marketing Mastery', progress: 64, status: 'Active', initials: 'LC', color: 'blue', joined: 'Oct 22, 2024' },
  { name: 'Olivia Martinez', email: 'olivia.m@email.com', course: 'Product Management 101', progress: 91, status: 'Active', initials: 'OM', color: 'pink', joined: 'Oct 20, 2024' },
  { name: 'Noah Johnson', email: 'noah.j@email.com', course: 'UX Design Fundamentals', progress: 28, status: 'At risk', initials: 'NJ', color: 'green', joined: 'Oct 18, 2024' },
  { name: 'Ava Patel', email: 'ava.patel@email.com', course: 'Content Creation Lab', progress: 47, status: 'Active', initials: 'AP', color: 'yellow', joined: 'Oct 15, 2024' }
];
const courses = [
  { name: 'UX Design Fundamentals', category: 'Design', students: 128, completion: 76, color: 'lilac', icon: '✳', instructor: 'Maya Robinson' },
  { name: 'Digital Marketing Mastery', category: 'Marketing', students: 96, completion: 68, color: 'mint', icon: '↗', instructor: 'Jordan Lee' },
  { name: 'Product Management 101', category: 'Business', students: 84, completion: 82, color: 'butter', icon: '◈', instructor: 'Alex Morgan' },
  { name: 'Content Creation Lab', category: 'Creative', students: 72, completion: 59, color: 'rose', icon: '✎', instructor: 'Taylor Kim' }
];
const activity = [
  { initials: 'OM', color: 'pink', text: '<b>Olivia Martinez</b> completed a lesson in <b>Product Management 101</b>', time: '12 min ago', icon: '✓' },
  { initials: 'LC', color: 'blue', text: '<b>Liam Chen</b> enrolled in <b>Digital Marketing Mastery</b>', time: '48 min ago', icon: '+' },
  { initials: 'SW', color: 'peach', text: '<b>Sophie Williams</b> submitted an assignment', time: '2 hours ago', icon: '↗' },
  { initials: 'NJ', color: 'green', text: '<b>Noah Johnson</b> hasn’t logged in for 7 days', time: '3 hours ago', icon: '!' }
];
let currentPage = location.hash.slice(1) || 'dashboard';
let studentFilter = 'All students';
let searchTerm = '';
const content = document.querySelector('#content');
const titleCase = s => s.charAt(0).toUpperCase() + s.slice(1);
const initialsAvatar = (initials, color) => `<span class="avatar avatar-${color}">${initials}</span>`;

function pageHeader(title, subtitle, action = '') {
  return `<div class="page-heading"><div><div class="eyebrow">TUESDAY, OCTOBER 29, 2024</div><h1>${title}</h1><p>${subtitle}</p></div><div class="heading-actions">${action}</div></div>`;
}
function renderDashboard() {
  content.innerHTML = `${pageHeader('Good morning, Alex <span class="wave">✦</span>', 'Here’s what’s happening with your school today.', '<button class="button button-secondary" data-action="report">⇩ <span>Export report</span></button><button class="button button-primary" data-action="add-student">＋ <span>Add student</span></button>')}
    <section class="metrics-grid">
      <article class="metric-card"><div class="metric-top"><span>Total students</span><span class="metric-icon icon-violet">♙</span></div><div class="metric-value">1,284</div><div class="metric-foot"><span class="trend positive">↗ 12.8%</span><span>vs. last month</span><span class="sparkline purple-spark">▁▃▂▅▄▆▅█</span></div></article>
      <article class="metric-card"><div class="metric-top"><span>Active courses</span><span class="metric-icon icon-blue">▤</span></div><div class="metric-value">24</div><div class="metric-foot"><span class="trend positive">↗ 4.2%</span><span>vs. last month</span><span class="sparkline blue-spark">▂▃▂▄▃▆▄▇</span></div></article>
      <article class="metric-card"><div class="metric-top"><span>Completion rate</span><span class="metric-icon icon-orange">◉</span></div><div class="metric-value">78.6<span class="metric-unit">%</span></div><div class="metric-foot"><span class="trend positive">↗ 6.4%</span><span>vs. last month</span><span class="sparkline orange-spark">▁▂▃▂▄▃▆█</span></div></article>
      <article class="metric-card"><div class="metric-top"><span>Revenue this month</span><span class="metric-icon icon-green">＄</span></div><div class="metric-value">$24,680</div><div class="metric-foot"><span class="trend positive">↗ 8.1%</span><span>vs. last month</span><span class="sparkline green-spark">▂▁▃▄▃▅▆█</span></div></article>
    </section>
    <section class="middle-grid">
      <article class="panel enrollment-panel"><div class="panel-heading"><div><h2>Student enrollment</h2><p>Keep track of your school's growth</p></div><button class="select-button" data-action="period">Last 12 months <span>⌄</span></button></div>
        <div class="chart-summary"><strong>1,284</strong><span class="trend positive">↗ 12.8%</span><small>students enrolled</small></div>
        <div class="chart-wrap"><div class="chart-y"><span>1,500</span><span>1,000</span><span>500</span><span>0</span></div><div class="chart-area"><div class="grid-line"></div><div class="grid-line"></div><div class="grid-line"></div><div class="grid-line"></div><svg viewBox="0 0 700 180" preserveAspectRatio="none" role="img" aria-label="Student enrollment steadily increased throughout the year"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#8171e8" stop-opacity=".22"/><stop offset="1" stop-color="#8171e8" stop-opacity="0"/></linearGradient></defs><path class="chart-fill" d="M0 148 C28 142 44 131 63 137 S102 126 126 119 S165 131 190 112 S224 115 252 96 S292 105 316 91 S352 94 379 74 S414 88 442 67 S483 78 505 58 S546 68 568 45 S607 57 632 35 S672 39 700 15 V180 H0Z"/><path class="chart-line" d="M0 148 C28 142 44 131 63 137 S102 126 126 119 S165 131 190 112 S224 115 252 96 S292 105 316 91 S352 94 379 74 S414 88 442 67 S483 78 505 58 S546 68 568 45 S607 57 632 35 S672 39 700 15"/><circle cx="700" cy="15" r="5" class="chart-point"/></svg><div class="chart-x"><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span></div></div></div>
      </article>
      <article class="panel course-panel"><div class="panel-heading"><div><h2>Top courses</h2><p>By student enrollment</p></div><button class="text-link" data-page-link="courses">View all <span>→</span></button></div><div class="course-list">${courses.slice(0, 4).map((c, i) => `<div class="course-row"><span class="course-icon ${c.color}">${c.icon}</span><div class="course-info"><b>${c.name}</b><small>${c.category} · ${c.students} students</small></div><span class="course-rank">${i + 1}</span></div>`).join('')}</div></article>
    </section>
    <section class="panel activity-panel"><div class="panel-heading"><div><h2>Recent activity</h2><p>The latest updates from your learning community</p></div><button class="text-link" data-page-link="messages">View all activity <span>→</span></button></div><div class="activity-list">${activity.map(a => `<div class="activity-row">${initialsAvatar(a.initials, a.color)}<div class="activity-copy"><p>${a.text}</p><small>${a.time}</small></div><span class="activity-type">${a.icon}</span></div>`).join('')}</div></section>`;
}
function studentRows(list) {
  return list.map(s => `<tr><td><div class="student-name">${initialsAvatar(s.initials, s.color)}<span><b>${s.name}</b><small>${s.email}</small></span></div></td><td>${s.course}</td><td><div class="progress-cell"><div class="progress-track"><i style="width:${s.progress}%"></i></div><span>${s.progress}%</span></div></td><td><span class="status ${s.status === 'Active' ? 'status-active' : 'status-risk'}"><i></i>${s.status}</span></td><td>${s.joined}</td><td><button class="row-more" aria-label="Student actions" data-action="student-menu">···</button></td></tr>`).join('');
}
function renderStudents() {
  const filtered = students.filter(s => (studentFilter === 'All students' || s.status === studentFilter) && `${s.name} ${s.email} ${s.course}`.toLowerCase().includes(searchTerm.toLowerCase()));
  content.innerHTML = `${pageHeader('Students', 'Manage your learners and keep track of their progress.', '<button class="button button-secondary" data-action="report">⇩ <span>Export</span></button><button class="button button-primary" data-action="add-student">＋ <span>Add student</span></button>')}
  <div class="student-stats"><div><span>Total students</span><b>${students.length.toLocaleString()}</b><small class="trend positive">↗ 12.8% this month</small></div><div><span>Active learners</span><b>${students.filter(s => s.status === 'Active').length}</b><small>Currently taking a course</small></div><div><span>Need attention</span><b>${students.filter(s => s.status === 'At risk').length}</b><small>Haven’t engaged recently</small></div></div>
  <section class="panel table-panel"><div class="table-toolbar"><div class="filter-tabs">${['All students', 'Active', 'At risk'].map(f => `<button class="filter-tab ${studentFilter === f ? 'selected' : ''}" data-filter="${f}">${f}${f === 'All students' ? `<span>${students.length}</span>` : ''}</button>`).join('')}</div><label class="table-search">⌕<input id="student-search" type="search" placeholder="Search students..." value="${searchTerm}"></label><button class="button button-secondary filter-button" data-action="filters">☷ <span>Filter</span></button></div>
  <div class="table-scroll"><table><thead><tr><th>STUDENT</th><th>COURSE</th><th>PROGRESS</th><th>STATUS</th><th>ENROLLED</th><th></th></tr></thead><tbody>${studentRows(filtered) || '<tr><td colspan="6" class="empty-state">No students match your search.</td></tr>'}</tbody></table></div><div class="table-footer"><span>Showing <b>${filtered.length ? 1 : 0}–${filtered.length}</b> of <b>${students.length}</b> students</span><div><button class="pagination" disabled>← Previous</button><button class="pagination" disabled>Next →</button></div></div></section>`;
}
function renderCourses() {
  content.innerHTML = `${pageHeader('Courses', 'Create meaningful learning experiences for every student.', '<button class="button button-primary" data-action="new-course">＋ <span>Create course</span></button>')}<div class="course-overview"><div class="stat-mini"><span>Published courses</span><b>24</b><small>Across 6 categories</small></div><div class="stat-mini"><span>Total enrollments</span><b>1,842</b><small class="trend positive">↗ 9.2% this month</small></div><div class="stat-mini"><span>Average completion</span><b>78.6%</b><small>Across all courses</small></div></div><div class="course-grid">${courses.map(c => `<article class="panel course-card"><div class="course-card-top"><span class="course-icon large ${c.color}">${c.icon}</span><button class="row-more" data-action="course-menu">···</button></div><span class="category-pill">${c.category}</span><h2>${c.name}</h2><p>Guided lessons, practical projects, and expert support to help learners grow their skills.</p><div class="instructor-row">${initialsAvatar(c.instructor.split(' ').map(x => x[0]).join(''), 'purple')}<span>${c.instructor}</span></div><div class="course-card-meta"><span>♙ ${c.students} students</span><span>${c.completion}% completion</span></div><div class="progress-track"><i style="width:${c.completion}%"></i></div></article>`).join('')}</div>`;
}
function renderMessages() {
  const messages = [{ initials:'LC',color:'blue',name:'Liam Chen',subject:'Question about week 3 assignment',time:'10:42 AM',preview:'Hi Alex, I had a question about the campaign brief...' },{ initials:'SW',color:'peach',name:'Sophie Williams',subject:'Re: Portfolio review',time:'Yesterday',preview:'Thank you for the feedback! I’ve updated the case study...' },{ initials:'OM',color:'pink',name:'Olivia Martinez',subject:'Course completion certificate',time:'Yesterday',preview:'I just finished the final module and wanted to ask...' },{ initials:'NJ',color:'green',name:'Noah Johnson',subject:'Checking in',time:'Oct 26',preview:'We noticed you haven’t been around this week. Need a hand?' }];
  content.innerHTML = `${pageHeader('Messages', 'Stay connected with your students and teaching team.', '<button class="button button-primary" data-action="compose">✎ <span>New message</span></button>')}<div class="panel inbox-panel"><div class="inbox-toolbar"><b>Inbox <span class="inbox-count">3</span></b><button class="text-link" data-action="compose">＋ Compose</button></div>${messages.map((m,i)=>`<button class="message-row ${i===0?'message-unread':''}" data-action="open-message" data-name="${m.name}">${initialsAvatar(m.initials,m.color)}<span class="message-content"><span class="message-name">${m.name}<time>${m.time}</time></span><b>${m.subject}</b><small>${m.preview}</small></span>${i===0?'<i class="message-indicator"></i>':''}</button>`).join('')}</div>`;
}
function renderAnalytics() {
  content.innerHTML = `${pageHeader('Analytics', 'Understand your school’s growth and learner outcomes.', '<button class="button button-secondary" data-action="report">⇩ <span>Export report</span></button><button class="select-button" data-action="period">Last 30 days ⌄</button>')}<div class="metrics-grid analytics-metrics"><article class="metric-card"><div class="metric-top"><span>New enrollments</span><span class="metric-icon icon-violet">♙</span></div><div class="metric-value">186</div><div class="metric-foot"><span class="trend positive">↗ 12.8%</span><span>vs. previous period</span></div></article><article class="metric-card"><div class="metric-top"><span>Course completion</span><span class="metric-icon icon-orange">◉</span></div><div class="metric-value">78.6%</div><div class="metric-foot"><span class="trend positive">↗ 6.4%</span><span>vs. previous period</span></div></article><article class="metric-card"><div class="metric-top"><span>Avg. study time</span><span class="metric-icon icon-blue">◷</span></div><div class="metric-value">4.2<span class="metric-unit"> hrs</span></div><div class="metric-foot"><span class="trend positive">↗ 3.1%</span><span>vs. previous period</span></div></article><article class="metric-card"><div class="metric-top"><span>Student satisfaction</span><span class="metric-icon icon-green">♡</span></div><div class="metric-value">4.8<span class="metric-unit">/5</span></div><div class="metric-foot"><span class="trend positive">↗ 0.3</span><span>vs. previous period</span></div></article></div><div class="panel analytics-note"><span class="metric-icon icon-violet">✦</span><div><h2>Your school is growing beautifully</h2><p>Enrollments are up 12.8% this month. UX Design Fundamentals continues to lead, with a 76% completion rate.</p></div></div><section class="panel"><div class="panel-heading"><div><h2>Course performance</h2><p>Compare enrollment and completion across courses</p></div></div><div class="performance-list">${courses.map(c=>`<div class="performance-row"><b>${c.name}</b><span>${c.students} enrolled</span><div class="progress-track"><i style="width:${c.completion}%"></i></div><strong>${c.completion}%</strong></div>`).join('')}</div></section>`;
}
function renderUtility(page) {
  const info = page === 'calendar' ? ['Calendar','Plan your school’s upcoming events and sessions.','Your schedule is looking bright. Upcoming classes and events will show up here.'] : ['Settings','Make Dawnside Academy work the way you do.','Workspace settings, team access, notifications, and billing controls will live here.'];
  content.innerHTML = `${pageHeader(info[0],info[1])}<section class="panel utility-panel"><span class="utility-illustration">${page === 'calendar' ? '▦' : '⚙'}</span><h2>${page === 'calendar' ? 'Your calendar is ready' : 'Your workspace, your way'}</h2><p>${info[2]}</p><button class="button button-primary" data-action="coming-soon">${page === 'calendar' ? '＋ Add an event' : 'Manage settings'}</button></section>`;
}
function render() {
  const known = ['dashboard','students','courses','messages','analytics'];
  currentPage = known.includes(currentPage) ? currentPage : ['calendar','settings'].includes(currentPage) ? currentPage : 'dashboard';
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.page === currentPage));
  document.querySelector('#crumb-current').textContent = currentPage === 'dashboard' ? 'Overview' : titleCase(currentPage);
  document.title = `${titleCase(currentPage)} | Dawnside Academy`;
  if (currentPage === 'dashboard') renderDashboard(); else if (currentPage === 'students') renderStudents(); else if (currentPage === 'courses') renderCourses(); else if (currentPage === 'messages') renderMessages(); else if (currentPage === 'analytics') renderAnalytics(); else renderUtility(currentPage);
  document.querySelector('#student-count').textContent = students.length;
}
function toast(message) {
  const root = document.querySelector('#toast-root'); const el = document.createElement('div'); el.className = 'toast'; el.innerHTML = `<span>✓</span>${message}`; root.append(el); setTimeout(() => el.remove(), 3200);
}
function openStudentModal() {
  document.querySelector('#modal-root').innerHTML = `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" data-action="close-modal" aria-label="Close">×</button><div class="modal-kicker">GROW YOUR COMMUNITY</div><h2 id="modal-title">Add a student</h2><p>Invite a learner to join your academy.</p><form id="student-form"><label>Full name<input name="name" placeholder="e.g. Jamie Parker" required></label><label>Email address<input name="email" type="email" placeholder="jamie@email.com" required></label><label>Course<select name="course" required>${courses.map(c=>`<option value="${c.name}">${c.name}</option>`).join('')}</select></label><div class="modal-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancel</button><button type="submit" class="button button-primary">Send invitation</button></div></form></section></div>`;
  document.querySelector('#modal-root .modal input').focus();
}
document.addEventListener('click', e => {
  const nav = e.target.closest('[data-page]');
  if (nav) { e.preventDefault(); currentPage = nav.dataset.page; location.hash = currentPage; searchTerm = ''; render(); document.querySelector('#sidebar').classList.remove('sidebar-open'); return; }
  const pageLink = e.target.closest('[data-page-link]'); if(pageLink){ currentPage=pageLink.dataset.pageLink; location.hash=currentPage; render(); return; }
  const filter = e.target.closest('[data-filter]'); if(filter){ studentFilter=filter.dataset.filter; renderStudents(); return; }
  const btn = e.target.closest('[data-action]'); if(!btn) return;
  const action = btn.dataset.action;
  if(action==='add-student') openStudentModal();
  else if(action==='close-modal' && (e.target===btn || btn.classList.contains('modal-close'))) document.querySelector('#modal-root').innerHTML='';
  else if(action==='menu') document.querySelector('#sidebar').classList.toggle('sidebar-open');
  else if(action==='report') toast('Your report is ready to export.');
  else if(action==='help') toast('Help center: support@dawnside.academy');
  else if(action==='notifications') toast('You’re all caught up on notifications.');
  else if(action==='profile') toast('Account menu opened.');
  else if(action==='period') toast('Date range options are coming soon.');
  else if(action==='filters') toast('You can filter students by status using the tabs.');
  else if(action==='student-menu'||action==='course-menu') toast('More actions coming soon.');
  else if(action==='new-course') toast('Course creation is coming soon.');
  else if(action==='compose') toast('New message composer is coming soon.');
  else if(action==='open-message') toast(`Opening conversation with ${btn.dataset.name}.`);
  else if(action==='coming-soon') toast('This feature is coming soon.');
  else if(action==='report') toast('Your report is ready to export.');
  if(action==='close-modal' && e.target.classList.contains('modal-backdrop')) document.querySelector('#modal-root').innerHTML='';
});
document.addEventListener('submit', e => {
  if(e.target.id !== 'student-form') return;
  e.preventDefault(); const data = new FormData(e.target); const name = data.get('name').trim(); const email = data.get('email').trim();
  students.unshift({name,email,course:data.get('course'),progress:0,status:'Active',initials:name.split(/\s+/).map(v=>v[0]).join('').slice(0,2).toUpperCase(),color:['peach','blue','pink','green','yellow'][students.length%5],joined:'Today'});
  studentFilter='All students'; searchTerm=''; document.querySelector('#modal-root').innerHTML=''; currentPage='students'; location.hash='students'; render(); toast(`${name} has been added to your students.`);
});
document.addEventListener('input', e => {
  if(e.target.id==='student-search'){searchTerm=e.target.value;const cursor=e.target.selectionStart;renderStudents();const input=document.querySelector('#student-search');input.focus();input.setSelectionRange(cursor,cursor);}
  if(e.target.id==='global-search' && e.target.value.trim()){ currentPage='students';searchTerm=e.target.value.trim();studentFilter='All students';location.hash='students';render();document.querySelector('#student-search')?.focus(); }
});
document.addEventListener('keydown', e => { if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.querySelector('#global-search').focus();} if(e.key==='Escape')document.querySelector('#modal-root').innerHTML=''; });
window.addEventListener('hashchange',()=>{currentPage=location.hash.slice(1)||'dashboard';render();});
render();
