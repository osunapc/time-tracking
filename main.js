
async function fetchData() {
    const response = await fetch('./data.json');
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
};
const data = await fetchData();
//fetch("./data.json")
//	.then((response) => response.json())
//	.then((jsonData) => {
//		let data = jsonData});
let bgcolors = [
 'hsl(15, 100%, 70%)',
'hsl(195, 74%, 62%)',
'hsl(348, 100%, 68%)',
 'hsl(145, 58%, 55%)',
'hsl(264, 64%, 52%)',
 'hsl(43, 84%, 65%)',
]
	console.log(data); 

	let dailyarray = data.map(item => item.timeframes.daily);
	let weeklyarray = data.map(item => item.timeframes.weekly); 
	let monthlyarray = data.map(item => item.timeframes.monthly); 

	console.log(weeklyarray);

const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

const cardsDetalles = document.querySelector(".cards-detalles");

drawelement(dailyarray);

daily.addEventListener("click", () => {
	drawelement(dailyarray);
});

weekly.addEventListener("click", () => {
	drawelement(weeklyarray);
});

monthly.addEventListener("click", () => {
	drawelement(monthlyarray);
});

function drawelement(array){
	cardsDetalles.innerHTML = '';
  array.forEach((element, index) => {
		console.log(element);
		
		let title = data[index].title;
		let titlemin = title.toLocaleLowerCase()

        if (titlemin == "self care") {
			titlemin = "self-care";
				}
				

		cardsDetalles.innerHTML += `
        <section class="detalles">
					<div class="color" style='background-color:${bgcolors[index]}'>
						<img class="color-img" src="/images/icon-${titlemin}.svg" alt="" />
					</div>

					<div class="card">
						<header class="card-header">
							<p class="header-text">${title}</p>
							<img src="./images/icon-ellipsis.svg" alt="3 puntos" />
						</header>
						<footer class="hors">
							<p class="hor-footer">${element.current}hrs</p>
							<p class="previous-footer">Previous - ${element.previous}hrs</p>
						</footer>
					</div>
				</section>
        `;
	});   
}