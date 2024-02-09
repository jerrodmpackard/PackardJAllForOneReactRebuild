const sayHelloCall = async (userName) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/SayHello/SayHello/${userName}`);
    const data = await promise.text();
    return data;
}

const sumTwoNumbersCall = async (number1, number2) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/SumTwoNumbers/SumTwoNumbers/${number1}/${number2}`);
    const data = await promise.text();
    return data;
}

const askingQuestionsCall = async (userName, wakeUpTime) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/AskingQuestions/AskingQuestions/${userName}/${wakeUpTime}`);
    const data = await promise.text();
    return data;
}

const greaterOrLessCall = async (number1, number2) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/GreaterOrLess/GreaterOrLess/${number1}/${number2}`);
    const data = await promise.text();
    return data;
}

const madLibsCall = async (heroName, planetName, speciesName, pluralNoun, singularNoun1, singularNoun2, verb1, verb2, adj1, adj2) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/MadLibs/MadLibs/${heroName}/${planetName}/${speciesName}/${pluralNoun}/${singularNoun1}/${singularNoun2}/${verb1}/${verb2}/${adj1}/${adj2}`);
    const data = await promise.text();
    return data;
}

const oddOrEvenCall = async (number1) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/OddOrEven/OddOrEven/${number1}`);
    const data = await promise.text();
    return data;
}

const reverseWordsCall = async (something) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/ReverseWords/ReverseWords/${something}`);
    const data = await promise.text();
    return data;
}

const reverseNumbersCall = async (number1) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/ReverseNumbers/ReverseNumbers/${number1}`);
    const data = await promise.text();
    return data;
}

const magic8BallCall = async (question) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/Magic8Ball/Magic8Ball/${question}`);
    const data = await promise.text();
    return data;
}

const fastFoodCall = async () => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/RestaurantPicker/RestaurantPicker/pizza`);
    const data = await promise.text();
    return data;
}

const pizzaCall = async () => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/RestaurantPicker/RestaurantPicker/pizza`);
    const data = await promise.text();
    return data;
}

const restaurantCall = async () => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/RestaurantPicker/RestaurantPicker/restaurant`);
    const data = await promise.text();
    return data;
}

export { sayHelloCall, sumTwoNumbersCall, askingQuestionsCall, greaterOrLessCall, madLibsCall, oddOrEvenCall, reverseWordsCall, reverseNumbersCall, magic8BallCall, fastFoodCall, pizzaCall, restaurantCall }