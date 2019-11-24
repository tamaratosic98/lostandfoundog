
function function1() {
  const myForm = document.querySelector('#forma');
  const nameInput = document.querySelector('#firstName');
  const lastNameInput = document.querySelector('#lastName');
  const phoneNumberInput = document.querySelector('#phoneNumber');
  const locationInput = document.querySelector('#location');
  const shortDescInput = document.querySelector('#shortDesc');
  const dogsAgeInput = document.querySelector('#dogsAge');
  const dogsNameInput = document.querySelector('#dogsName');
  const dogsGenderInput = document.querySelector('#dogsGender');
  const breedInput = document.querySelector('#breed');
  const msg = document.querySelector('.msg');
  myForm.addEventListener('submit', onSubmit);
  function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || phoneNumberInput.value === '' || locationInput.value === '') {
      msg.classList.add('error');
      msg.innerHTML = '*Molimo vas popunite sva neophodna polja*  pored naziva imaju zvezdicu';

    } else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${nameInput.value}:${lastNameInput.value}`));
    }
  }
  var lost = document.getElementById("lost");
  var found = document.getElementById("found");
  if (lost.checked == true) {
    alert('Izabrali ste prijavu izgubljenog psa, kliknite ponovo na PRIJAVI da potrvrdite.');
  }
  else if (found.checked == true) {
    alert('Izabrali ste prijavu pronadjenog psa, kliknite ponovo na PRIJAVI da potvrdite.');
  }
  else {
    alert('Niste izabrali tip prijave, da li je pas izgubljen ili pronadjen!');
  }
  if (nameInput.value != '' && phoneNumberInput.value != '' && locationInput.value != '' && (found.checked == true || lost.checked == true)) {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
      modal.style.display = "block";
      captionText.innerHTML = `<h3>Uspešno ste prijavili psa sa sledecim informacijama:</h3><br> Vaše ime:
         ${nameInput.value}<br> Vaše prezime: ${lastNameInput.value}<br> Vaš broj telefona: ${phoneNumberInput.value}<br>
         Lokacija na kojoj je vidjen: ${locationInput.value}<br> Ime psa: ${dogsNameInput.value}<br> Rasa psa: ${breedInput.value}<br>
         Pol psa: ${dogsGenderInput.value}<br> Starost psa: ${dogsAgeInput.value}<br> Kratki opis: ${shortDescInput.value}<br>
         `;
    }
    span.onclick = function () {
      modal.style.display = "none";
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}