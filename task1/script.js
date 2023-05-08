function Convert() {
  let input = document.querySelector(".input").value;
  let output = document.querySelector(".output");
  let inputUnit = document.querySelector("#from").value;
  let outputUnit = document.querySelector("#to").value;

  if (input === "") {
    alert("enter a value");
  } else {
    let outputValue = 0;
    if (inputUnit === "Celcius") {
      if (outputUnit === "Kelvin") {
        outputValue = Number.parseInt(input) + 273.15;
      } else if (outputUnit === "Faranheit") {
        outputValue = (Number.parseInt(input) * 9) / 5 + 32;
      } else {
        outputValue = input;
      }
    } else if (inputUnit === "Kelvin") {
      if (outputUnit === "Celcius") {
        outputValue = Number.parseInt(input) - 273.15;
      } else if (outputUnit === "Faranheit") {
        outputValue = (Number.parseInt(input) - 273.15) * (9 / 5) + 32;
      } else {
        outputValue = input;
      }
    } else {
      if (outputUnit === "Celcius") {
        outputValue = (Number.parseInt(input) - 32) * (5 / 9);
      } else if (outputUnit === "Kelvin") {
        outputValue = (Number.parseInt(input) - 32) * (5 / 9) + 273.15;
      } else {
        outputValue = input;
      }
    }
    output.value = Number(outputValue).toFixed(2); // to take the value upto two digit
  }
}
