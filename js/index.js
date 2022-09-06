const adviceId = document.getElementById("adviceId");
const advice = document.getElementById("advice");
const newAdvice = document.getElementById("circle");
const loading = document.getElementById("loading");
loading.classList.remove("loading");

const showAdvices = async () => {
  loading.classList.add("loading");
  try {
    const data = await fetch("https://api.adviceslip.com/advice");
    const response = await data.json();

    adviceId.innerHTML = `ADVICE #${response.slip.id}`;
    advice.innerHTML = `"${response.slip.advice}"`;
    loading.style.display = "none";
  } catch (err) {
    adviceId.innerHTML = "Error";
    advice.innerHTML = "Failed to load advice. Please try again";
    console.log(err.message);
  }
};
showAdvices();

newAdvice.addEventListener("click", showAdvices);
