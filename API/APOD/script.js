async function getDataFromNasa() {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=d36huVswPSig0c0LTJH37giaLhknCsFb1Kl16E8b"
  );
  const data = await response.json();
  const url = data.url;
  const title = data.title;
  const explanation = data.explanation;

  document.getElementById("title").innerHTML = title;
  document.getElementById("explanation").innerHTML = explanation;
  document.getElementById("astrobild").src = url;
}

getDataFromNasa();