const calculateBmi = (height: number, weight: number) : string => {
    
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

export default calculateBmi;