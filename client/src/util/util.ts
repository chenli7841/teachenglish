export function sequence(from: number, to: number, step: number): number[] {
    const seq = [];
    for (let i = from; i <= to; i = i + step) {
        seq.push(i);
    }
    return seq;
}