const $London = document.querySelector(".London");
const $Moscow = document.querySelector(".Moscow");
const $Bishkek = document.querySelector(".Bishkek");
const $box = document.querySelector(".box");

$London.addEventListener("click", (e) => {
  e.preventDefault();

  $London.classList.add("active");
  $Moscow.classList.remove("active");
  $Bishkek.classList.remove("active");
  $box.innerHTML = `
    <div class ="ph">
        <p>London of the capital of Great Britain</p>
    </div>
`;
});

$Moscow.addEventListener("click", (e) => {
  e.preventDefault();
  $Moscow.classList.add("active");
  $London.classList.remove("active");
  $Bishkek.classList.remove("active");
  $box.innerHTML = `
      <div class ="ph">
          <p>Moscow is the capital of Russia</p>
      </div>
  `;
});

$Bishkek.addEventListener("click", (e) => {
  e.preventDefault();

  $Bishkek.classList.add("active");
  $Moscow.classList.remove("active");
  $London.classList.remove("active");
  $box.innerHTML = `
      <div class ="ph">
          <p>Bishkek is the capital of Kyrgyzstan</p>
      </div>
  `;
});
