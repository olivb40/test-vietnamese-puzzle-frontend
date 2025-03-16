import { ErrorReponse } from "../infrastructure/share/error-reponse.interface";
import { Attempt } from "./attempt.entity";
import { SolutionResponse } from "./solution.ov";

export interface IAttemptService {
  postAttempt(attemptInput: string): Promise<Attempt | ErrorReponse>;
  getAttempts(): Promise<Attempt[]>;
  getAttempt(id: number): Promise<Attempt>;
  updateAttempt(id: number, attempt: Partial<Attempt>): Promise<Attempt>;
  deleteAttempt(id: number): Promise<void>;
  deleteAllAttempts(): Promise<void>;
  generateSolutions(): Promise<SolutionResponse | ErrorReponse>;
}
