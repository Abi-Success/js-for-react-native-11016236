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