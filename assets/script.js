let itemsAdded = false;
let activeClass = "active";
let hiddenClass = "hidden";
function showMoreItems() {
  if (itemsAdded) return;

  let childList = document.querySelectorAll("#pay-type-items div");
  for (let child of childList) {
    child.classList.remove(hiddenClass);
  }
  document.getElementById("btnShowMore").style.display = "none";
  itemsAdded = true;
}
function setActive(event) {
  let childList = document.querySelectorAll("#pay-type-items div");
  childList.forEach((i) => i.classList.remove(activeClass));

  event.classList.add(activeClass);
}
function payStart() {
  const selectedItem = document.querySelector("#pay-type-items .active");
  let type = selectedItem.getAttribute("data-type");
  switch (type) {
    case "top":
      break;
    case "sadad":
      break;
    case "sep":
      break;
    default:
  }
}
function weightedRandom(options) {
  // محاسبه مجموع وزن‌ها
  const totalWeight = options.reduce((sum, option) => sum + option.weight, 0);

  // تولید یک عدد رندوم بین 0 و مجموع وزن‌ها
  const random = Math.random() * totalWeight;

  // انتخاب گزینه مناسب بر اساس وزن‌ها
  let cumulativeWeight = 0;
  for (const option of options) {
    cumulativeWeight += option.weight;
    if (random < cumulativeWeight) {
      return option.value;
    }
  }
}

const options = [
  { value: "top", weight: 6 },
  { value: "sep", weight: 3 },
  { value: "sadad", weight: 1 },
];
window.addEventListener("load", function () {
  let selectedOption = weightedRandom(options);

  const selected = document.querySelector(
    ".pay-type[data-type='" + selectedOption + "']"
  );
  console.log(selected, selectedOption);
  selected?.classList?.remove("hidden");
  selected?.classList?.add('active')
});
