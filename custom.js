const quotes = [{
    quote: '"Ce que l\on conçoit bien s\énnonce clairement et les mots pour le dire arrive aisément."',
    writer: '-Nicolas Boileau'
}, {
    quote: '"Je ne connais pas l\art d\être clair pour celui qui ne veut pas clair."',
    writer: '-Rousseau'
}, {
    quote: '"le bout de bois a beau s\éjourné dans l\eau mais ne sera jamais crocodile."',
    writer: '-Ousmane Sembéne'
}, {
    quote: '" Tout beau flatteur vit au dépend de celui qui l\écoute."',
    writer: '-Fontaine'
}, {
    quote: '" Je veux avant de mourir remonter vers mes belles années, expliquer mon inexplicable cœur.."',
    writer: '- François-René de Chateaubriand '
}, {
    quote: '" S’imaginer que les menus détails de sa propre vie valent la peine d’être fixés, c’est donner la preuve d’une bien mesquine vanité.."',
    writer: '-Ernest Renan'
}, {
    quote: '" C’est ici de mon portrait qu’il s’agit et non pas d’un livre."',
    writer: '-Jean-Jacques Rousseau'
}, {
    quote: '" Impossible de faire la lumière sur sa vie sans éclairer, ici ou là, celle des autres."',
    writer: '-Simone de Beauvoir'
}, {
    quote: '"L’autobiographie, qui paraît au premier abord le plus sincère de tous les genres, en est peut-être le plus faux.."',
    writer: '-Albert Thibaudet'
}, {
    quote: '"Le paradis, à n’en pas douter, n’est qu’une immense bibliothèque"',
    writer: '-Bachelard'
}, {
    quote: '" Un livre a ceci de particulier qu’il peut être interprété comme on veut."',
    writer: '-Kierkegaard'
},]



let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})