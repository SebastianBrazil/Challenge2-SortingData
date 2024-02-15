import { popData } from "./popData.js";

let firstNameI = document.getElementById("firstNameI");
let lastNameI = document.getElementById("lastNameI");
let ageI = document.getElementById("ageI");
let heightI = document.getElementById("heightI");
let idI = document.getElementById("idI");

let page10 = document.getElementById("page10");
let page20 = document.getElementById("page20");
let page30 = document.getElementById("page30");
let page40 = document.getElementById("page40");
let page50 = document.getElementById("page50");

let namePlacement = document.getElementById("namePlacement");
let typeSort = document.getElementById("typeSort");
let amountPage = document.getElementById("amountPage");
let prevPage = document.getElementById("prevPage");
let nextPage = document.getElementById("nextPage");
let onPage = document.getElementById("onPage");
let reverseDirection = document.getElementById("reverseDirection");

let globalData = [];
let isFn = true;
let isLn = false;
let isAge = false;
let isHeight = false;
let isID = false;
let isReversed = false;

let trackPage = 1;
let perPage = 10;

let onDisplay = 10;
let counter = 0;

// The main function, calls fetch
const fetchData = async () => {
    const promise = await fetch('../data/data.json');
    const data = await promise.json();
    globalData = data.People;

    if (isFn) {
        sortFN();
    } else if (isLn) {
        sortLN();
    } else if (isAge) {
        sortAge();
    } else if (isHeight) {
        sortHeight();
    } else if (isID) {
        sortID();
    };
};

// Page amount eventlisteners keep track of how many elements should be displayed per page
page10.addEventListener('click', function () {
    trackPage = 1;
    onPage.innerText = trackPage;
    perPage = 10;
    onDisplay = 10;
    counter = 0;
    amountPage.innerText = "10";
    fetchData();
});
page20.addEventListener('click', function () {
    trackPage = 1;
    onPage.innerText = trackPage;
    perPage = 20;
    onDisplay = 20;
    counter = 0;
    amountPage.innerText = "20";
    fetchData();
});
page30.addEventListener('click', function () {
    trackPage = 1;
    onPage.innerText = trackPage;
    perPage = 30;
    onDisplay = 30;
    counter = 0;
    amountPage.innerText = "30";
    fetchData();
});
page40.addEventListener('click', function () {
    trackPage = 1;
    onPage.innerText = trackPage;
    perPage = 40;
    onDisplay = 40;
    counter = 0;
    amountPage.innerText = "40";
    fetchData();
});
page50.addEventListener('click', function () {
    trackPage = 1;
    onPage.innerText = trackPage;
    perPage = 50;
    onDisplay = 50;
    counter = 0;
    amountPage.innerText = "50";
    fetchData();
});

// Page move eventListeners keep track of what page the user is on
prevPage.addEventListener('click', function () {
    if (trackPage !== 1) {
        trackPage--;
        counter = counter - perPage;
        onDisplay = onDisplay - perPage
        onPage.innerText = trackPage;

        fetchData();
    };
});
nextPage.addEventListener('click', function () {
    if (perPage === 10 && trackPage !== 10 || perPage === 20 && trackPage !== 5 || perPage === 30 && trackPage !== 4 || perPage === 40 && trackPage !== 3 || perPage === 50 && trackPage !== 2) {
        trackPage++;
        counter = counter + perPage;
        onDisplay = onDisplay + perPage;
        onPage.innerText = trackPage;

        fetchData();
    };
});

// Reverse eventListener swaps the direction of the displayed data
reverseDirection.addEventListener('click', function () {
    if (isReversed === false) {
        isReversed = true;
    } else {
        isReversed = false;
    };
    trackPage = 1;
    onPage.innerText = trackPage;
    fetchData();
});

// I eventListeners swap the prerequisites for displaying data
firstNameI.addEventListener('click', function () {
    isFn = true;
    isLn = false;
    isAge = false;
    isHeight = false;
    isID = false;
    isReversed = false;
    trackPage = 1;
    onPage.innerText = trackPage;
    fetchData();
});
lastNameI.addEventListener('click', function () {
    isFn = false;
    isLn = true;
    isAge = false;
    isHeight = false;
    isID = false;
    isReversed = false;
    trackPage = 1;
    onPage.innerText = trackPage;
    fetchData();
});
ageI.addEventListener('click', function () {
    isFn = false;
    isLn = false;
    isAge = true;
    isHeight = false;
    isID = false;
    isReversed = false;
    trackPage = 1;
    onPage.innerText = trackPage;
    fetchData();
});
heightI.addEventListener('click', function () {
    isFn = false;
    isLn = false;
    isAge = false;
    isHeight = true;
    isID = false;
    isReversed = false;
    trackPage = 1;
    onPage.innerText = trackPage;
    fetchData();
});
idI.addEventListener('click', function () {
    isFn = false;
    isLn = false;
    isAge = false;
    isHeight = false;
    isID = true;
    isReversed = false;
    trackPage = 1;
    onPage.innerText = trackPage;
    fetchData();
});

// this function splits the sorted data into subarrays, which alloys for array switching when changing pages
function paginate(newData) {
    let realNewData = [];
    if (perPage === 50) {
        let holderArr = newData;
        let dataArr1 = holderArr.splice(0, 50);
        let dataArr2 = holderArr.splice(0, 50);
        realNewData = [dataArr1, dataArr2];
    } else if (perPage === 40) {
        let holderArr = newData;
        let dataArr1 = holderArr.splice(0, 40);
        let dataArr2 = holderArr.splice(0, 40);
        let dataArr3 = holderArr.splice(0, 20);
        realNewData = [dataArr1, dataArr2, dataArr3];
    } else if (perPage === 30) {
        let holderArr = newData;
        let dataArr1 = holderArr.splice(0, 30);
        let dataArr2 = holderArr.splice(0, 30);
        let dataArr3 = holderArr.splice(0, 30);
        let dataArr4 = holderArr.splice(0, 10);
        realNewData = [dataArr1, dataArr2, dataArr3, dataArr4];
    } else if (perPage === 20) {
        let holderArr = newData;
        let dataArr1 = holderArr.splice(0, 20);
        let dataArr2 = holderArr.splice(0, 20);
        let dataArr3 = holderArr.splice(0, 20);
        let dataArr4 = holderArr.splice(0, 20);
        let dataArr5 = holderArr.splice(0, 20);
        realNewData = [dataArr1, dataArr2, dataArr3, dataArr4, dataArr5];
    } else {
        let holderArr = newData;
        let dataArr1 = holderArr.splice(0, 10);
        let dataArr2 = holderArr.splice(0, 10);
        let dataArr3 = holderArr.splice(0, 10);
        let dataArr4 = holderArr.splice(0, 10);
        let dataArr5 = holderArr.splice(0, 10);
        let dataArr6 = holderArr.splice(0, 10);
        let dataArr7 = holderArr.splice(0, 10);
        let dataArr8 = holderArr.splice(0, 10);
        let dataArr9 = holderArr.splice(0, 10);
        let dataArr10 = holderArr.splice(0, 10);
        realNewData = [dataArr1, dataArr2, dataArr3, dataArr4, dataArr5, dataArr6, dataArr7, dataArr8, dataArr9, dataArr10];
    };

    // calls imported function that populates all data
    popData(namePlacement, trackPage, counter, onDisplay, perPage, realNewData);
}

// these sort functions sort the globalData array into the prerequisite requirements.
function sortFN() {
    let sortThisArray = [];
    let newData = [];

    globalData.forEach(person => {
        sortThisArray.push(person.FirstName);
    });

    if (isReversed === false) {
        sortThisArray.sort().forEach(firstName => {
            globalData.forEach(person => {
                if (person.FirstName === firstName && newData.every(fullPerson => fullPerson.Id !== person.Id)) {
                    newData.push(person);
                };
            });
        });
    } else {
        sortThisArray.sort().reverse().forEach(firstName => {
            globalData.forEach(person => {
                if (person.FirstName === firstName && newData.every(fullPerson => fullPerson.Id !== person.Id)) {
                    newData.push(person);
                };
            });
        });
    };

    typeSort.innerText = "First Name"
    paginate(newData);
};
function sortLN() {
    let sortThisArray = [];
    let newData = [];

    globalData.forEach(person => {
        sortThisArray.push(person.LastName);
    });

    if (isReversed === false) {
        sortThisArray.sort().forEach(lastName => {
            globalData.forEach(person => {
                if (person.LastName === lastName && newData.every(fullPerson => fullPerson.Id !== person.Id)) {
                    newData.push(person);
                };
            });
        });
    } else {
        sortThisArray.sort().reverse().forEach(lastName => {
            globalData.forEach(person => {
                if (person.LastName === lastName && newData.every(fullPerson => fullPerson.Id !== person.Id)) {
                    newData.push(person);
                };
            });
        });
    };

    typeSort.innerText = "Last Name"
    paginate(newData);
};
function sortAge() {
    let sortThisArray = [];
    let newData = [];

    globalData.forEach(person => {
        sortThisArray.push(person.Age);
    });

    if (isReversed === false) {
        sortThisArray.sort().forEach(age => {
            globalData.forEach(person => {
                if (person.Age === age && newData.every(fullPerson => fullPerson.Id !== person.Id)) {
                    newData.push(person);
                };
            });
        });
    } else {
        sortThisArray.sort().reverse().forEach(age => {
            globalData.forEach(person => {
                if (person.Age === age && newData.every(fullPerson => fullPerson.Id !== person.Id)) {
                    newData.push(person);
                };
            });
        });
    };

    typeSort.innerText = "Age"
    paginate(newData);
};
function sortHeight() {
    let sortThisArray = [];
    let newData = [];

    globalData.forEach(person => {
        sortThisArray.push(person.Height);
    });

    sortThisArray = [...sortThisArray].map(string => {
        string = string.split(" inches");
        return string[0];
    });

    if (isReversed === false) {
        sortThisArray.sort(function (a, b) { return a - b }).forEach(height => {
            globalData.forEach(person => {
                let Height = person.Height;
                Height = Height.split(" inches");
                if (Height[0] === height && newData.every(fullPerson => fullPerson.Id !== person.Id)) {
                    newData.push(person);
                };
            });
        });
    } else {
        sortThisArray.sort(function (a, b) { return a - b }).reverse().forEach(height => {
            globalData.forEach(person => {
                let Height = person.Height;
                Height = Height.split(" inches");
                if (Height[0] === height && newData.every(fullPerson => fullPerson.Id !== person.Id)) {
                    newData.push(person);
                };
            });
        });
    };

    typeSort.innerText = "Height"
    paginate(newData);
};
function sortID() {
    let sortThisArray = [];
    let newData = [];

    globalData.forEach(person => {
        sortThisArray.push(person.Id);
    });

    if (isReversed === false) {
        sortThisArray.sort(function (a, b) { return a - b }).forEach(id => {
            globalData.forEach(person => {
                if (person.Id === id) {
                    newData.push(person);
                };
            });
        });
    } else {
        sortThisArray.sort(function (a, b) { return a - b }).reverse().forEach(id => {
            globalData.forEach(person => {
                if (person.Id === id) {
                    newData.push(person);
                };
            });
        });
    };

    typeSort.innerText = "ID"
    paginate(newData);
};

// Initializes fetchData
fetchData();