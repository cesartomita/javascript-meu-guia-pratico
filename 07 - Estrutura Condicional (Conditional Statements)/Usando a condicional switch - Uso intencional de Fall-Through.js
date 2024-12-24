// O fall-through pode ser útil em alguns casos, como ao agrupar vários case com o mesmo resultado.

const fruta = "maçã";

switch (fruta) {
    case "maçã":
    case "pera":
    case "banana":
        console.log("Fruta encontrada.");
        break;
    default:
        console.log("Fruta não encontrada.");
        break;
};
