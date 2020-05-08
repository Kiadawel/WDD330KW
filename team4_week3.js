// TEAM PROJECTS (Modified to be visible with HTML)
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Blake, William'
    ];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    function listInv1500s(){
    const invList = inventors.filter(inventor => {
        return inventor.year >= 1500 && inventor.year <= 1599;
    })
    //console.log(invList);

    let output = document.getElementById('inv1500s');
    output.innerHTML = '';

    for(const inv in invList) {
        output.innerHTML += `${invList[inv].first} ${invList[inv].last}, ${invList[inv].year}<br />`;
    }
    }
    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    function listFirstLast(){
    const fullNamesArr = inventors.map( inventor => {
        return `${inventor.first} ${inventor.last}`;
    });
    //console.log(fullNamesArr);
    let output = document.getElementById('firstlast');
    output.innerHTML = fullNamesArr.join(', ');
    }
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    function listBirthDate(){
    const sortAge = inventors.sort( (a,b) => { return a.year - b.year;});
    //console.log(sortAge)

    let output = document.getElementById('birthdate');
    output.innerHTML = '';

    for(const inv in sortAge) {
        output.innerHTML += `${sortAge[inv].first} ${sortAge[inv].last}, ${sortAge[inv].year}<br />`;
    }
    }
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    function sumAges(){
    const yearsLived = inventors.reduce( (a,b) => { return a + (b.passed - b.year);}, 0);
    //console.log(yearsLived);
    document.getElementById('sumages').innerHTML = `The inventors lived for a combined total of ${yearsLived} years!`;     
    }

    // 5. Sort the inventors by years lived
    function sortByAge(){
    const sortByYears = inventors.sort((a,b) => {return (a.passed - a.year) - (b.passed - b.year)});
    console.log(sortByYears);
    let output = document.getElementById('sortbyage');
    output.innerHTML = '';

    for(const inv in sortByYears) {
        output.innerHTML += `${sortByYears[inv].first} ${sortByYears[inv].last}, ${(sortByYears[inv].passed - sortByYears[inv].year)}<br />`;
    }
    }

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    function sortByLast(){
    const alpha = people.sort();
    //console.log(alpha);

    document.getElementById('sortbylast').innerHTML = alpha.join('<br />');
    }

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck'
    ];

    function dataReduce(){
    let output = document.getElementById('datareduce');
    output.innerHTML = '';

    const sumType = data.reduce( (count, item) => {
        if (!count[item]) {
            count[item] = 0;
        }
        count[item]++;
        return count;
    }, {});

    for(let [key,value] of Object.entries(sumType)){
        output.innerHTML += `The entry "${key}" appeared ${value} times. <br />`;
    }
    //console.log(sumType);
    }

// ## Array Cardio Day 2

const peopleTwo = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
    ];

    const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // Array.prototype.every() // is everyone 19 or older?
function someEvery(){
    const overAge = (person) => person.year >= 2001;
    let output = document.getElementById('someevery');
    output.innerHTML = `Some people in the group are over 19: ${peopleTwo.some(overAge)} <br />
            All people in the group are over 19: ${peopleTwo.every(overAge)}`;
}

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
function findYou(){
    const commentID = document.getElementById('comm_ids').value;
    const comment = comments.find(comm => comm.id == commentID);
    document.getElementById('findyou').innerHTML = (comment.text);
}

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

function findAndDelete(){
    const commentID = 823423;
    const indexMatches = (commID) => commID.id === commentID;
    let commShow = comments.findIndex(indexMatches);
    delete comments[commShow];
    console.log(comments);
}