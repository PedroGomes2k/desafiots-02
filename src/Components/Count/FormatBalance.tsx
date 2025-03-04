
export default function formatingBalance(num: number): string {

    const correting: string = `R$ ${num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    return correting

}