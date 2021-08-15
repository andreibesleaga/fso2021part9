
interface ExerciseResult { 
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}


const calculateExercises = ( hoursdaily: number, hoursperday: number[] ) : ExerciseResult => {
    
    if( hoursdaily===0 ) throw new Error('get to exercise, cannot be 0 hours daily!');

    const average = (hoursperday: number[]) : number => {
        const count =  hoursperday.reduce((a, b) => a + b) / hoursperday.length;
        return count;
    };

    const training = (hoursperday: number[]) : number => {
        return hoursperday.filter( a => a !== 0).length;
    };

    const results = {
        periodLength: hoursperday.length,
        trainingDays: Number(training),
        success: false,
        rating: 1,
        ratingDescription: 'could be better',
        target: hoursdaily,
        average: Number(average)
    };

    return results;

};


const hoursdaily = Number(process.argv[2]);
let hoursperday = new Array();
process.argv.forEach(function (val, index, _array) {
    if( index !== 0 ) {
        hoursperday.push(val);
    }
});


try {
    console.log(calculateExercises(1, [1,2,3,0,1,2,0]));
    if(hoursdaily && hoursperday.length>0) {
        console.log(calculateExercises(hoursdaily, hoursperday));
    }
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}