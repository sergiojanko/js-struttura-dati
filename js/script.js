const deck = [
    {
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
    }},
    {
    name: "Blo Colo",
    launchCost: ["5","T","R"],
    manaCost: 8,
    type: "Creatura",
    subType: "Giant",
    expansion: {
        reprintId: 8, 
        name: "Espansione", 
        rarity: "Gold",
        collectionNr: 2,
    },
    flavorText: {
        quote: "Pluto",
        author: "Gigi",
    },
    abilities: [
        {
            launchCost: ["T", "T"],
            description: "Lorem ipsum...",
        },
        {
            launchCost: ["R", "T", "T"],
            description: "Lorem ipsum...",
        },
    ],
    illustrator: "Greg Smith",
    strength: 8,
    constitution: 8,
    illustration: {
        backgroundColor: "red",
        border: "black",
        image: "source.png",
    }},
    {
    name: "Blolo Cololo",
    launchCost: ["4","R","R"],
    manaCost: 8,
    type: "Creatura",
    subType: "Giant",
    expansion: {
        reprintId: 8, 
        name: "Espansione", 
        rarity: "Silver",
        collectionNr: 2,
    },
    flavorText: {
        quote: "Pluto",
        author: "Gigi",
    },
    abilities: [
        {
            launchCost: ["T", "T"],
            description: "Lorem ipsum...",
        },
        {
            launchCost: ["R", "T", "T"],
            description: "Lorem ipsum...",
        },
    ],
    illustrator: "Greg Smith",
    strength: 8,
    constitution: 8,
    illustration: {
        backgroundColor: "red",
        border: "black",
        image: "source.png",
    }},
];
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
const createCardTemplate = (card) => {
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

    return `
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
}

const renderDeck = (deck, targetElement) => {
    let deckTemplate = ``;
    for (let i = 0; i < deck.length; i++) {
        deckTemplate += createCardTemplate(deck[i])
    };
    targetElement.innerHTML = deckTemplate;
};

const cardSection = document.getElementById("cards");




renderDeck(deck,cardSection);


