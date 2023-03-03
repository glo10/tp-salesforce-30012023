
export const openForm = `
<form action="#">
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

export const withdrawForm = `
<form>
  <input type="number" name="sold" class="form-control" placeholder="Votre solde">
  <input type="number" name="overdraft" class="form-control" placeholder="Montant du découvert autorisé">
  <input type="number" name="withdraw" class="form-control" placeholder="Montant du retrait">
  <input type="submit" value="Valider">
</form>
`

export const feeForm = `
<form>
  <input type="number" name="overdraft" class="form-control" placeholder="Montant du découvert utilisé">
  <input type="number" name="fee" class="form-control" placeholder="Nombre de jour d'utilisation du découvert">
  <input type="submit" value="Valider">
</form>
`