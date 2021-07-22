const card = {
    name: "Bloodfire Colossus",
    launchCost: ["6","R","R"],
    manaCost: 8,
    type: "Creatura",
    subType: "Giant",
    expansion: {
        reprintId: 9, 
        name: "Espansione", 
        rarity: "Gold",
        collectionNr: 12,
    },
    flavorText: {
        quote: "Lorem",
        author: "Gigi",
    },
    abilities: [
        {
            launchCost: ["R", "T"],
            description: "Lorem ipsum...",
        },
        {
            launchCost: ["R", "T", "W"],
            description: "Lorem ipsum...",
        },
    ],
    illustrator: "Greg Smith",
    strength: 13,
    constitution: 13,
    illustration: {
        backgroundColor: "red",
        border: "black",
        image: "source.png",
    },
};


const cardSection = document.getElementById("cards");

let subType = card.subType ? card.subType : ``;

let abilities = `Non ci sono abilità`;

if (card.abilities.length) {
    abilities = `<ul>`
    for (let i = 0; i < card.abilities.length; i++){
        const currentAbility = card.abilities[i];
        abilities += `<li>Descrizione: ${currentAbility.description}</li>`;
        abilities += `<li>Costo di Lancio: ${currentAbility.launchCost.join(" ")}</li>`;
    }
    abilities += "</ul>"
}

let cardTemplate = `
<ul class="card">
    <li>Nome: ${card.name}</li>
    <li>Costo di lancio: ${card.launchCost.join(" ")}</li>
    <li>Costo Mana: ${card.manaCost}</li>
    <li>Tipo: ${card.type} - ${subType}</li>
    <li>Espansione:
        <ul>
            <li>Ristampa: ${card.expansion.reprintId}</li>
            <li>Nome: ${card.expansion.name}</li>
            <li>Rarità: ${card.expansion.rarity}</li>
            <li>Nr. Collezione: ${card.expansion.collectionNr}</li>
        </ul>
    </li>
    <li>Testo di colore: ${card.flavorText.quote} - ${card.flavorText.author}</li>
    <li>Abilità: ${abilities}</li>
    <li>Forza: ${card.strength}</li>
    <li>Costituzione: ${card.constitution}</li>
    <li>Artista: ${card.illustrator}</li>
    <li>Colore Bordo: ${card.illustration.border}</li>
    <li>Colore Sfondo: ${card.illustration.backgroundColor}</li>
    <li><img src=" ${card.illustration.image}" alt="Immagine"></li>

</ul>
`;

cardSection.innerHTML = cardTemplate;
