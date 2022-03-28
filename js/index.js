const adviceId = document.getElementById("adviceId");
const advice = document.getElementById("advice");
const newAdvice = document.getElementById("circle");

const showAdvices = async () => {
  try {
    const data = await fetch("https://api.adviceslip.com/advice");
    const response = await data.json();

    adviceId.innerHTML = `ADVICE #${response.slip.id}`;
    advice.innerHTML = `"${response.slip.advice}"`;
  } catch (err) {
    adviceId.innerHTML = "Error";
    advice.innerHTML = "Failed to load advice. Please try again";
    console.log(err.message);
  }
};

showAdvices();

newAdvice.addEventListener("click", showAdvices);
