const cards = document.getElementById("cards");
const searchInput = document.getElementById("searchInput");
let db = [];
const RenderCard = (data) => {
  cards.innerHTML = "";
  data.map((item) => {
    const html = `
    <div
            class=" bg-dark-me-400 p-2 rounded-md shadow flex flex-col h-[25rem] gap-2 justify-between"
          >
            <img src="${item.flags.png}" alt="" class="w-full h-32" />
            <div>
            <h3 class="text-dark-me-100 font-semibold text-2xl my-6">${item.name.common}</h3>
            <div class="flex gap-10">
              <h4 class="text-dark-me-100">Country Code:</h4>
              <p class="text-dark-me-100">${item.idd.root}${item.idd.suffixes[0]}</p>
            </div>
            <div class="flex gap-10">
              <h4 class="text-dark-me-100">Neighbor:</h4>
              <p class="text-dark-me-100 w-4 break-me">${item.borders}</p>
            </div>
            <div class="flex gap-10">
              <h4 class="text-dark-me-100">Capital:</h4>
              <p class="text-dark-me-100">${item.capital[0]}</p>
            </div>
            </div>
            
            <button class="bg-dark-me-200 rounded-3xl p-2 text-dark-me-100">
              More ...
            </button>
          </div>`;
    cards.innerHTML += html;
  });
};

const Data = async function () {
  const resource = await fetch(`https://restcountries.com/v3.1/all`);
  const getJson = await resource.json();
  RenderCard(getJson);
  return getJson;
  searchInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
  });
};
Data();

const mamad = Data.then(()=>{
    
})
