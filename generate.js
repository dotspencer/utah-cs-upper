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
    const text = c.innerText.trim();
    const [dep, course] = text.split(' ');

    if (parseInt(course) >= 6000) return;

    const title = text.split('-')[1].trim();
    const a = document.createElement('a');
    const li = document.createElement('li');
    a.innerText = text;
    a.href = "https://dars.sys.utah.edu/selfservice/plannedcourse/preview.html?department=" + dep + "%20%20%20&number=" + course;
    a.setAttribute('target', 'view');
    li.appendChild(a);
    output.push(li.outerHTML);
  });

  copy(output.join('\n'));
  console.log('copied to clipboard');
})();
