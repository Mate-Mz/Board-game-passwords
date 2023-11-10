const passwords = ["ნოოანფჯლაი", "8 13 21 34", "e8", "რენტგენი", "0"];

document.getElementById("submit").addEventListener("click", function() {
  let inputs = [];
  inputs.push(document.getElementById("password1").value.trim());
  inputs.push(document.getElementById("password2").value.trim());
  inputs.push(document.getElementById("password3").value.trim());
  inputs.push(document.getElementById("password4").value.trim());
  inputs.push(document.getElementById("password5").value.trim());

  if (inputs.every(input => passwords.includes(input))) {
    document.getElementById("message").innerHTML = "სწორია";
  } else {
    document.getElementById("message").innerHTML = "ზოგი პაროლი არასწორია";
  }
});