
export default function dateActual() {
    const date = new Date();

    let day:number|string = date.getDate();
    let month:number|string = date.getMonth() + 1;
    const year = date.getFullYear();

    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    const dateComplete = `${day} / ${month} / ${year}`;

    return dateComplete
}