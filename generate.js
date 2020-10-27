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
    const parts = c.innerText.trim().split(' - ');
    const [dep, course] = parts[0].split(' ');
    const name = parts[1];

    if (parseInt(course) >= 6000) return;
    const url = "https://dars.sys.utah.edu/selfservice/plannedcourse/preview.html?department=" + dep + "%20%20%20&number=" + course;

    const parent = c.parentNode.parentNode.parentNode;
    const infoCells = parent.querySelectorAll('tr[onclick] td');
    const professor = infoCells[4].innerText.replace(/[\n]/g, ' ').toLowerCase();
    const rawTime = infoCells[2].innerText;
    const hours = (rawTime.match(/\w (\d.*$)/) || [])[1] || '';

    const li = document.createElement('li');
    li.innerHTML = [
      `<div class="name">${dep} ${course} - ${name} <a href="${url}" target="view">info</a></div>`,
      '<div class="bottom">',
        `<div class="professor">${professor}</div>`,
        `<div class="times">`,
          `<span class="day ${rawTime.includes('Mo') ? 'yes' : ''}">Mo</span>`,
          `<span class="day ${rawTime.includes('Tu') ? 'yes' : ''}">Tu</span>`,
          `<span class="day ${rawTime.includes('We') ? 'yes' : ''}">We</span>`,
          `<span class="day ${rawTime.includes('Th') ? 'yes' : ''}">Th</span>`,
          `<span class="day ${rawTime.includes('Fr') ? 'yes' : ''}">Fr</span>`,
          `<span class="hours">${hours}</span>`,
        '</div>',
      '</div>',
    ].join('');

    output.push(li.outerHTML);
  });

  copy(output.join('\n'));
  console.log('copied to clipboard');
})();
