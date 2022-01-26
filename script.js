async function getUser() {
  const a = document.querySelector(".add-user-name").value;
  document.getElementById("country1").innerHTML = "";
  document.getElementById("pro1").innerHTML = "";
  document.getElementById("country2").innerHTML = "";
  document.getElementById("pro2").innerHTML = "";
  let users;
  try {
    const data = await fetch(`https://api.nationalize.io/?name=${a}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    users = await data.json();
    let s = users.country;
    if (s.length > 1) {
      document.getElementById("country1").innerHTML =
        users.country[0].country_id;
      document.getElementById("pro1").innerHTML = users.country[0].probability;
      document.getElementById("country2").innerHTML =
        users.country[1].country_id;
      document.getElementById("pro2").innerHTML = users.country[1].probability;
    } else {
      alert("For these particular name Data is not available");
    }
    document.querySelector(".add-user-name").value = "";
  } catch (error) {
    console.log(error);
  }
}
