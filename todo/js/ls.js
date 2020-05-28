 /******************************
* LocalStorage Helper Functions /
********************************/
export function readFromLS(key) {
    console.log('readFromLS invoked');
    //pull the stored objects from LS and parse into an array 
    let localArray = JSON.parse(localStorage.getItem(key));
    return localArray;
} 

export function writeToLS(key, data) {
    console.log('writeToLS invoked');
    //pull the stored objects from LS and parse into an array 
    let fullArray = readFromLS(key);
    //turn the LS object into an array if it's null
    if(fullArray == null) { fullArray = [] };
    //push the new object to the array
    fullArray.push(data);
    //save the updated array to localstorage
    localStorage.setItem(key, JSON.stringify(fullArray));

    console.log(fullArray);
}

export function updateLS(key,data){
    localStorage.setItem(key,JSON.stringify(data));
}