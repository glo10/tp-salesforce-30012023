// Definitions

const openForm = `
<form action="">
  <input type="text" name="lastName" class="form-control" placeholder="Nom">
  <input type="text" name="firstName" class="form-control" placeholder="Prénom">
  <input type="email" name="email" class="form-control" placeholder="Adresse email">
  <span>Autoriser le découvert</span>
  <label for="yes">Oui</label>
  <input type="radio" name="overdraft" id="yes" value="Oui">
  <label for="no">Non</label>
  <input type="radio" name="overdraft" id="no" value="Non">
  <input type="number" name="overdraftAmount" class="form-control" placeholder="Montant du découvert" min="200" max="2000">
  <input type="number" name="deposit" class="form-control" placeholder="Montant premier versement">
  <select class="form-control">
    <option selected value="">Choisir la carte</option>
    <option value="silver">Silver</option>
    <option value="black">Black</option>
    <option value="gold">Gold</option>
  </select>
  <input type="submit" value="Valider">
</form>`

const withdrawForm = `
<form>
  <input type="number" name="sold" class="form-control" placeholder="Votre solde">
  <input type="number" name="overdraft" class="form-control" placeholder="Montant du découvert autorisé">
  <input type="number" name="withdraw" class="form-control" placeholder="Montant du retrait">
  <input type="submit" value="Valider">
</form>
`

const feeForm = `
<form>
  <input type="number" name="overdraft" class="form-control" placeholder="Montant du découvert utilisé">
  <input type="number" name="fee" class="form-control" placeholder="Nombre de jour d'utilisation du découvert">
  <input type="submit" value="Valider">
</form>
`

function scroll() {
  window.addEventListener("scroll", () => {
    const hdr = document.querySelector("header")
    hdr.style.opacity = 1
    hdr.style.top = '2px'
  })
}

function search() {
  const search = document.querySelector("input[type=search]")
  let originWdth = getComputedStyle(search).getPropertyValue("width")
  const originBgc = getComputedStyle(search).getPropertyValue("background-color")
  originWdth = originWdth.substring(0, originWdth.length - 2)
  const newWdth = parseInt(originWdth) * 1.5
  const placeholder = search.getAttribute("placeholder")
  search.addEventListener("focus", function () {
    this.style.backgroundColor = "#261c1a09"
    this.style.width = `${newWdth}px`
    this.removeAttribute("placeholder")
  })

  search.addEventListener("blur", function () {
    this.style.backgroundColor = originBgc
    this.style.width = `${originWdth}px`
    this.setAttribute("placeholder", placeholder)
  })
}

function zoom() {
  const articles = document.querySelectorAll("article")
  articles.forEach((article) => {
    article.addEventListener("mouseenter", function () {
      const lg = this.children.length
      const img = this.children[lg - 2]
      img.style.opacity = 0.5
      img.style.transform = "scale(1.25)"
    })
    article.addEventListener("mouseleave", function () {
      const lg = this.children.length
      const img = this.children[lg - 2]
      img.style.opacity = 1
      img.style.transform = "scale(1)"
    })
  })
}

function modal(forms) {
  const modal = document.querySelector("#modal")
  const modalDiv = modal.querySelector('.modal-content>div')
  const btns = document.querySelectorAll(".btn-modal")
  const close = document.querySelector(".close")
  btns.forEach(function (btn) {
    btn.addEventListener('click', function() {
      let indexform = btn.getAttribute('data-form-index')
      modal.querySelector('h3').innerText = this.firstChild.textContent
      modal.style.display = "block"
      modalDiv.innerHTML = ''
      modalDiv.innerHTML = forms[indexform]
    })
  })
  close.addEventListener('click', function () {
    modal.style.display = "none"
  })
}

// Exécution

modal([openForm, withdrawForm, feeForm])
zoom()
scroll()
search()
