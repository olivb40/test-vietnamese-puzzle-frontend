export class GenerateSolutionUseCase {
  private duration: number = 0;
  private startTime: number = 0;

  public generateSolution(): string | null {
    this.startTimer();

    // Generate all possible permutations
    const allPermutations = this.getPermutations([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // Find the first possible solution
    for (const perm of allPermutations) {
      if (this.evaluateExpression(perm)) {
        this.stopTimer();
        return perm.join("");
      }
    }

    this.stopTimer();

    return null;
  }

  public getDuration(): number {
    return this.duration;
  }

  private startTimer() {
    this.duration = 0;
    this.startTime = Date.now();
  }

  private stopTimer() {
    this.duration = Date.now() - this.startTime;
  }

  private getPermutations = (arr: number[]): number[][] => {
    if (arr.length === 1) return [arr];
    const permutations: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      const remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
      for (const perm of this.getPermutations(remainingNums)) {
        permutations.push([currentNum, ...perm]);
      }
    }
    return permutations;
  };

  private evaluateExpression = (values: number[]): boolean => {
    const [A, B, C, D, E, F, G, H, I] = values;

    // Check to avoid dividing by zero
    if (C === 0 || G === 0) return false;

    const result =
      A + 13 * (B / C) + D + E + 12 * F - G - 11 + (H * I) / G - 10;
    return result === 66;
  };
}
