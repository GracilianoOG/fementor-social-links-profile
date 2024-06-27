import '../css/style.css'

document.querySelector('#app').innerHTML = `
  <div class="card">
    <h1 class="card__title">Jessica Randall</h1>
    <h2 class="card__location">London, United Kingdom</h2>
    <p class="card__description">"Front-end developer and avid reader."</p>

    <div class="card__socials">
      <a class="card__social" href="#">GitHub</a>
      <a class="card__social" href="#">Frontend Mentor</a>
      <a class="card__social" href="#">LinkedIn</a>
      <a class="card__social" href="#">Twitter</a>
      <a class="card__social" href="#">Instagram</a>
    </div>
  </div>
`