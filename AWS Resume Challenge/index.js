const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    const response = await fetch("https://tzo2bcqwir4c2npop4feixa5di0fuiqc.lambda-url.us-east-1.on.aws/");
    const data = await response.json();
    counter.innerHTML = `Views: ${data}`;
  } catch (error) {
    console.error("Error fetching counter:", error);
    counter.innerHTML = "Views: Error";
  }
}

updateCounter();
