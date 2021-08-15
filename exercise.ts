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

export default calculateExercises;