function processArray(numbers) 
{
    // Create a new array to store the processed results
     const processedNUmbers =[];

     // Loop through each number in the original array 
     for (const number of numbers) {
        // Check if the number is even
        if (number % 2 === 0) {
            // Square the even number
            processedNUmbers.push(number * number);
        }
        else {
            // Triple the odd number
            processedNUmbers.push(number * 3);
        }
     }
     return processedNUmbers;
}


//The function takes two arrays as arguements
function formatArrayStrings(strigs, processedNUmbers){

    // Checking if the string length is equal to the length of processedNumbers
    if(strigs.length !== processedNUmbers.length){
    // Throwing an error if the arrays are not of the same length
    throw new Error ("Arrays must have the same length");
    }
    // Check if the array is empty or contains duplicates and remove duplicates
    for( let num =0; i< strigs.length; i ++){
        const string = strigs[i];

        // Check if the string contains a number that matches the string length
        if(number % 2 == 0){
            strigs[i] = string.ToUpperCase();
        }else{
            strigs[i] = string.ToLowerCase();
        }
    }
}