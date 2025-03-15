import { Attempt } from "../../domain/attempt.entity";
import { IAttemptService } from "../../domain/attempt.service.interface";
import { AbstractService } from "../share/service.abstract";
import { ServiceNames } from "../share/service.constant";

export class AttemptService extends AbstractService implements IAttemptService {
  constructor() {
    super(ServiceNames.ATTEMPS);
  }

  /**
   * Creates a new attempt.
   * @param attempt - The attempt string to be submitted.
   * @returns Promise resolving to the created Attempt.
   */
  async postAttempt(value: string): Promise<Attempt> {
    return this.post<{ value: string }, Attempt>("", { value });
  }

  /**
   * Retrieves all attempts.
   * @returns Promise resolving to an array of Attempt objects.
   */
  async getAttempts(): Promise<Attempt[]> {
    return this.get<Attempt[]>("");
  }

  /**
   * Retrieves a specific attempt by id.
   * @param id - The id of the attempt.
   * @returns Promise resolving to the Attempt object.
   */
  async getAttempt(id: number): Promise<Attempt> {
    return this.get<Attempt>(`/${id}`);
  }

  /**
   * Updates an existing attempt.
   * @param id - The id of the attempt.
   * @param attempt - The updated attempt.
   * @returns Promise resolving to the updated Attempt object.
   */
  async updateAttempt(id: number, attempt: Partial<Attempt>): Promise<Attempt> {
    return this.put<Partial<Attempt>, Attempt>(`/${id}`, attempt);
  }

  /**
   * Deletes a specific attempt by id.
   * @param id - The id of the attempt.
   * @returns Promise resolving to void.
   */
  async deleteAttempt(id: number): Promise<void> {
    await this.deleteNoContent(`/${id}`);
  }

  /**
   * Deletes all attempts.
   * @returns Promise resolving to void.
   */
  async deleteAllAttempts(): Promise<void> {
    await this.deleteNoContent("");
  }
}
