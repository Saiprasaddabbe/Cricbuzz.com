document.querySelector("#all").addEventListener("click", change);
  function change() {
    document.querySelector("#all").innerHTML = `<span>${"Close"}</span><span class="material-symbols-outlined">
arrow_drop_up
</span>`;
    //<-------------BUTTONS--------------------------->
    let all = document.createElement("button");
    all.innerText = "ALL";
    let liveNow = document.createElement("button");
    liveNow.innerText = "Live Now";
    let today = document.createElement("button");
    today.innerText = "Today";
    let buttons = document.createElement("div");
    buttons.append(all, liveNow, today);
    buttons.setAttribute("class", "btn");
    //<INTERNATIONAL-----------DOMESTIC----------WOMENS-------------->
    let international = document.createElement("div");
    international.innerText = "INTERNATIONAL";
    international.setAttribute("class", "heading");

    let domestic = document.createElement("div");
    domestic.innerText = "DOMESTIC";

    let womens = document.createElement("div");
    womens.innerText = "WOMENS";

    let dropDown = document.createElement("div");

    dropDown.append(buttons, international, domestic, womens);
    document.querySelector("#Drop").append(dropDown);

  }