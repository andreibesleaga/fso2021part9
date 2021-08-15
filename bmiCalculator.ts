type Result = string;

const calculateBmi = (height: number, weight: number) : Result => {
    
    if( height===0 || weight === 0) throw new Error('Weight or height cannot be 0!');

    height = height / 100;
    const bmi = weight / (height*height);

    let result = "Weight:" + weight + ", Height:" + height + " BMI: " + bmi + " - ";

    if ( bmi > 30 ) {
        result += 'Obese';
    } else if ( bmi > 25 ) {
        result += 'Overweight';
    } else if ( bmi > 18.5) {
        result += 'Normal healthy weight';
    } else if ( bmi < 18.5) {
        result += 'Underweight';
    }
    return result;

};

const argHeight : number = Number(process.argv[2]);
const argWeight: number = Number(process.argv[3]);

try {
    console.log(calculateBmi(180, 74));
    if(argHeight && argWeight) {
        console.log(calculateBmi(argHeight, argWeight));
    }
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}