//variables nd datatypes
let numbers = [];//array to store numbers(empty initially)

const numberInput = document.getElementById('numberInput');
const addButton = document.getElementById('addButton');//button to add a number
const removeButton = document.getElementById('removeButton');//button to remove last number
const sumButton = document.getElementById('sumButton');//Button to calculate sum
const arrayContent= document.getElementById('arrayContent');//array display area
const results= document.getElementById('results');//results display area


//dom manipulation
//add number to array
addButton.addEventListener('click', () => {
    const value = parseInt(numberInput.value, 10);//convert i/p to number(variables)

    if (!isNaN(value)) {//check if the i/p is valid(datatypes)
        numbers.push(value);//add to array(array method)
        arrayContent.textContent = `Array:[${numbers.join(',')}]`;
        results.textContent = 'Number added successfully!';
        results.style.color = "#28a745";//sucess color
        numberInput.value = '';//clear i/p field
    } else {
       results.textContent = "Please enter a valid number.";
       results.style.color = "red";//red color.
    }
});

//remove last number
removeButton.addEventListener('click', () => {
    if (numbers.length > 0) {
        numbers.pop();//remove the lsast numger.
        arrayContent.textContent = `Array:[${numbers.join(', ')}]`;//update array display
        results.textContent = 'Last number removed.';
        results.style.color = '#28a745';//sucess color

    } else {
        results.textContent = 'The array is already empty!';
        results.style.color = 'red';//error color
    }
});

//calculate the sum of array 

sumButton.addEventListener('click', () => {
    if (numbers.length > 0) {
        const sum = numbers.reduce((acc, curr) => acc + curr);// Calculate sum
        results.textContent=`Sum of Array:${sum}`;//display sum
        results.style.color='#28a745'//success color
    }else{
        results.textContent='The array is empty.Add numbers first!';
        results.style.color ='red';//error color
    }

    
});