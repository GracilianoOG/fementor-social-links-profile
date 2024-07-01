import '../css/style.css'

document.querySelector('#app').innerHTML = `
  <main class="wrapper">
    <article class="card">
      <img class="card__avatar" src="../assets/images/avatar-jessica.jpeg" alt="Portrait of a confident black woman with a stylish afro hairstyle, making direct eye contact with the camera." />
      <h1 class="card__title">Jessica Randall</h1>
      <h2 class="card__location">London, United Kingdom</h2>
      <p class="card__description">"Front-end developer and avid reader."</p>

      <a class="card__social" href="#">GitHub</a>
      <a class="card__social" href="#">Frontend Mentor</a>
      <a class="card__social" href="#">LinkedIn</a>
      <a class="card__social" href="#">Twitter</a>
      <a class="card__social" href="#">Instagram</a>
    </article>
  </main>
`