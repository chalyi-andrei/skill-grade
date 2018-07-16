
fetch('/skills')
  .then(data => data.json())
  .then(data => setSkills(data))
  .catch(e => console.log(e.response));

function setSkills(data) {
  const container = document.getElementById('skills');
  const name = document.getElementById('name');
  const status = document.getElementById('status');
  let template = '';

  data.forEach(s => {
    template += ` 
    <div class="scill">
      <div class="name">${s.name}</div>
      <div class="status">${s.status}</div>
    </div>`;
  });

  setTimeout(() =>
    container.innerHTML = template,
    1000,
  );
} 

const form = document.getElementById('form');
const container = document.getElementById('skills');
const name = document.getElementById('name');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/addSkill', { 
      method: 'POST',
      body: JSON.stringify({name: name.value, status: status.value }),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(data => data.json())
      .then(data => setSkills(data))
})