(()=>{
  /*
 * Edit: Link for index page found in dars report.
 * Generate and view report and click on approved class links below some sections.
 *
 * Use in console of search result page of schedule planner
 * ("Search for a Class" link in CIS)
 */

  const classes = document.querySelectorAll('td .PAGROUPBOXLABELLEVEL1');
  const output = [];

  classes.forEach(c => {
    const fullName = c.innerText.trim();
    const [dep, course] = fullName.split(' ');

    if (parseInt(course) >= 6000) return;

    const parent = c.parentNode.parentNode.parentNode;
    const infoCells = parent.querySelectorAll('tr[onclick] td');
    const times = infoCells[2].innerText;
    const professor = infoCells[4].innerText.replace(/[\n]/g, ' ').toLowerCase();

    const li = document.createElement('li');
    const a = document.createElement('a');

    a.innerHTML = [
      `<div class="name">${fullName}</div>`,
      '<div class="bottom">',
      `<div class="times">${times}</div>`,
      `<div class="professor">${professor}</div>`,
      '</div>',
    ].join('');
    a.href = "https://dars.sys.utah.edu/selfservice/plannedcourse/preview.html?department=" + dep + "%20%20%20&number=" + course;
    a.setAttribute('target', 'view');

    li.appendChild(a);

    output.push(li.outerHTML);
  });

  copy(output.join('\n'));
  console.log('copied to clipboard');
})();
