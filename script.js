const calculateBtn = document.getElementById('calculate-btn');
const bmiResult = document.getElementById('bmi-result');

calculateBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const gender = document.getElementById('gender').value;
  const age = parseInt(document.getElementById('age').value);
  const height = parseFloat(document.getElementById('height').value);
  const heightUnit = document.getElementById('height-unit').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const weightUnit = document.getElementById('weight-unit').value;

  let heightInMeters;
  let weightInKg;

  if (heightUnit === 'cm') {
    heightInMeters = height / 100;
  } else if (heightUnit === 'm') {
    heightInMeters = height;
  } else if (heightUnit === 'feet') {
    heightInMeters = height * 0.3048;
  } else if (heightUnit === 'inches') {
    heightInMeters = height * 0.0254;
  }

  if (weightUnit === 'kg') {
    weightInKg = weight;
  } else if (weightUnit === 'lbs') {
    weightInKg = weight / 2.20462;
  }

  const bmi = weightInKg / (heightInMeters ** 2);

  let bmiCategory;
  if (bmi < 18.5) {
    bmiCategory = 'underweight';
  } else if (bmi < 25) {
    bmiCategory = 'normal';
  } else if (bmi < 30) {
    bmiCategory = 'overweight';
  } else {
    bmiCategory = 'obese';
  }

  bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
  bmiResult.className = `bmi-result ${bmiCategory}`;
});