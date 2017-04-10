var c = document.querySelectorAll('td .PAGROUPBOXLABELLEVEL1.PSLEFTCORNER');
var larry = document.createElement('div');
for(var i = 0; i < c.length; i++){
  var parts = c[i].innerText.trim().split(' ');
  var dep = parts[0];
  var course = parts[1];
  var title = c[i].innerText.trim().split('-')[1].trim();
  var a = document.createElement('a');
  var li = document.createElement('li');
  a.innerText = c[i].innerText.trim();
  a.href = "https://dars.sys.utah.edu/selfservice/plannedcourse/preview.html?department=" + dep + "&number=" + course;
  li.appendChild(a);
  larry.appendChild(li);
}
document.body.appendChild(larry);
