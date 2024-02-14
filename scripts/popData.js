// Is called after sort functions, populates data
function popData(namePlacement, trackPage, counter, onDisplay, perPage, useData) {
    namePlacement.innerHTML = "";

    if (trackPage === 1) {
        useData = useData[0];
    } else if (trackPage === 2) {
        useData = useData[1];
    } else if (trackPage === 3 && perPage <= 40) {
        useData = useData[2];
    } else if (trackPage === 4 && perPage <= 30) {
        useData = useData[3];
    } else if (trackPage === 5 && perPage <= 20) {
        useData = useData[4];
    } else if (trackPage === 6 && perPage <= 10) {
        useData = useData[5];
    } else if (trackPage === 7 && perPage <= 10) {
        useData = useData[6];
    } else if (trackPage === 8 && perPage <= 10) {
        useData = useData[7];
    } else if (trackPage === 9 && perPage <= 10) {
        useData = useData[8];
    } else if (trackPage === 10 && perPage <= 10) {
        useData = useData[9];
    };

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

export {popData}