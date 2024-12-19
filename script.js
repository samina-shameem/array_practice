//variables nd datatypes
let numbers=[];//array to store numbers(empty initially)

const numberInput=document.getElementById('numberInput');
const addButton=document.getElementById('addButton');//button to add a number
const removeButton=document.getElementById('removeButton');//button to remove last number
const sumButton=document.getElementById('sumButton');//Button to calculate sum
const output=document.getElementById('output');//o/p display area


//dom manipulation
//add number to array
addButton.addEventListener('click',() =>{
    const value= parseInt(numberInput.value,10);//convert i/p to number(variables)

    if(!isNaN(value)){//check if the i/p is valid(datatypes)
        numbers.push(value);//add to array(array method)
        output.textContent=`Array:[${numbers.join(',')}]`;
        output.style.color="#28a745";//reset o/p color to green
        numberInput.value='';//clear i/p field
        }else{
            output.textContent="Please enter a valid number.";
            output.style.color="red";
        }
});

//calculate the sum of array elements

sumButton.addEventListener('click',() => {
    let sum=0;// initilize sum (variables)

    for(let i=0; i < numbers.length; i++){//loop through array (operators: <, +=)
        sum += numbers[i];

    }

    output.textContent=`Array:[${numbers.join(',')}] | Sum:${sum}`;//display sum (dom manipulation)
    output.style.color ="#28a745";
});