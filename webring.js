(async () => {
    const webring = await (await fetch("https://webring.otomir23.me/31/data")).json();
    document.querySelector("#next").href = webring.next.url;
    document.querySelector("#next").innerText = webring.next.name;
    document.querySelector("#previous").href = webring.prev.url;
    document.querySelector("#previous").innerText = webring.prev.name;
})();