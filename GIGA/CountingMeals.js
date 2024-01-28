// Define a function that counts meal 
function mealCounting(developers) {
    // Initialize an object with all possible meal options set to 0
    const countingMeals = {
        'standard': 0,
        'vegetarian': 0,
        'vegan': 0,
        'diabetic': 0,
        'gluten-intolerant': 0
    };

    // Iterate over each developer in the given array
    developers.forEach(developer => {
        // Increment the count for the developer's meal choice
        countingMeals[developer.meal]++;
    });

    // Remove meal options with a count of 0
    Object.keys(countingMeals).forEach(meal => {
        if (countingMeals[meal] === 0) {
            delete countingMeals[meal];
        }
    });

    // Return the object containing the counts of each meal option
    return countingMeals;
}


// Define an array of developer objects
const list1 = [
    { 'firstName': 'Noah', 'lastName': 'M.', 'country': 'Switzerland', 'continent': 'Europe', 'age': 19, 'language': 'C', 'meal': 'vegetarian' },
    { 'firstName': 'Anna', 'lastName': 'R.', 'country': 'Liechtenstein', 'continent': 'Europe', 'age': 52, 'language': 'JavaScript', 'meal': 'standard' },
    { 'firstName': 'Ramona', 'lastName': 'R.', 'country': 'Paraguay', 'continent': 'Americas', 'age': 29, 'language': 'Ruby', 'meal': 'vegan' },
    { 'firstName': 'George', 'lastName': 'B.', 'country': 'England', 'continent': 'Europe', 'age': 81, 'language': 'C', 'meal': 'vegetarian' }
];

// Calling function with the list of developers and to store the result
const result = mealCounting(list1);

// Console Statement for the output
console.log(result);
