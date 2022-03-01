const numbers = [10, 4, 100, -5, 54, 2];
{
    let s = 0;
    for (let i = 0; i < numbers.length; i++)
        s += numbers[i] ** 3;
    console.log(s);
}
{
    let s = 0;
    for (let number of numbers)
        s += number ** 3;
    console.log(s);
}
{
    let s = 0;
    numbers.forEach(number => {
        s += number ** 3;
    });
    console.log(s);
}
{
    let s = numbers.reduce((first, second) => first += second ** 3);
    console.log(s);
}