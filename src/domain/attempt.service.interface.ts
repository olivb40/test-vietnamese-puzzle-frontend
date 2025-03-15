import { Attempt } from "./attempt.entity";

export interface IAttemptService {
  postAttempt(value: string): Promise<Attempt>;
  getAttempts(): Promise<Attempt[]>;
  getAttempt(id: number): Promise<Attempt>;
  updateAttempt(id: number, attempt: Partial<Attempt>): Promise<Attempt>;
  deleteAttempt(id: number): Promise<void>;
  deleteAllAttempts(): Promise<void>;
}
