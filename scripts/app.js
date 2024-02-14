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
function popData(useData) {
    namePlacement.innerHTML = "";

    useData.forEach(person => {
        if (counter < onDisplay) {
            let holderDiv = document.createElement("div");
            holderDiv.className = "my-2 grid grid-cols-5";

            let Fname = document.createElement('p');
            Fname.className = "col-span-1 mx-1 p-1 text-xl";
            Fname.innerText = person.FirstName;
            let Lname = document.createElement('p');
            Lname.className = "col-span-1 mx-1 p-1 text-xl";
            Lname.innerText = person.LastName;
            let Age = document.createElement('p');
            Age.className = "col-span-1 mx-1 p-1 text-xl";
            Age.innerText = person.Age;
            let Height = document.createElement('p');
            Height.className = "col-span-1 mx-1 p-1 text-xl";
            Height.innerText = person.Height;
            let IDidIDid = document.createElement('p');
            IDidIDid.className = "col-span-1 mx-1 p-1 text-xl";
            IDidIDid.innerText = person.Id;

            holderDiv.appendChild(Fname);
            holderDiv.appendChild(Lname);
            holderDiv.appendChild(Age);
            holderDiv.appendChild(Height);
            holderDiv.appendChild(IDidIDid);
            namePlacement.appendChild(holderDiv);

            counter++;
        };
    });
    counter = counter - perPage;
};

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

reverseDirection.addEventListener('click', function () {
    if (isReversed === false) {
        isReversed = true;
    } else {
        isReversed = false;
    };
    fetchData();
});

firstNameI.addEventListener('click', function () {
    isFn = true;
    isLn = false;
    isAge = false;
    isHeight = false;
    isID = false;
    fetchData();
});
lastNameI.addEventListener('click', function () {
    isFn = false;
    isLn = true;
    isAge = false;
    isHeight = false;
    isID = false;
    fetchData();
});
ageI.addEventListener('click', function () {
    isFn = false;
    isLn = false;
    isAge = true;
    isHeight = false;
    isID = false;
    fetchData();
});
heightI.addEventListener('click', function () {
    isFn = false;
    isLn = false;
    isAge = false;
    isHeight = true;
    isID = false;
    fetchData();
});
idI.addEventListener('click', function () {
    isFn = false;
    isLn = false;
    isAge = false;
    isHeight = false;
    isID = true;
    fetchData();
});

function sortFN() {
    let sortThisArray = [];
    let newData = [];

    globalData.forEach(person => {
        sortThisArray.push(person.FirstName);
    });

    if (isReversed === false) {
        sortThisArray.sort().forEach(firstName => {
            globalData.forEach(person => {
                if (person.FirstName === firstName) {
                    newData.push(person);
                };
            });
        });
    } else {
        sortThisArray.sort().reverse().forEach(firstName => {
            globalData.forEach(person => {
                if (person.FirstName === firstName) {
                    newData.push(person);
                };
            });
        });
    };

    typeSort.innerText = "First Name"
    popData(newData);
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
                if (person.LastName === lastName) {
                    newData.push(person);
                };
            });
        });
    } else {
        sortThisArray.sort().reverse().forEach(lastName => {
            globalData.forEach(person => {
                if (person.LastName === lastName) {
                    newData.push(person);
                };
            });
        });
    };

    typeSort.innerText = "Last Name"
    popData(newData);
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
                if (person.Age === age) {
                    newData.push(person);
                };
            });
        });
    } else {
        sortThisArray.sort().reverse().forEach(age => {
            globalData.forEach(person => {
                if (person.Age === age) {
                    newData.push(person);
                };
            });
        });
    };

    typeSort.innerText = "Age"
    popData(newData);
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
                if (Height[0] === height) {
                    newData.push(person);
                };
            });
        });
    } else {
        sortThisArray.sort(function (a, b) { return a - b }).reverse().forEach(height => {
            globalData.forEach(person => {
                let Height = person.Height;
                Height = Height.split(" inches");
                if (Height[0] === height) {
                    newData.push(person);
                };
            });
        });
    };

    typeSort.innerText = "Height"
    popData(newData);
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
    popData(newData);
};

fetchData();