/* eslint-disable @typescript-eslint/no-unused-vars */
import { Attempt } from "../../domain/attempt.entity";
import { IAttemptService } from "../../domain/attempt.service.interface";
import { AbstractService } from "../share/service.abstract";
import { ServiceNames } from "../share/service.constant";

const fakeAttempts: Attempt[] = [
  {
    id: 1,
    value: "123456789",
    isCorrect: true,
  },
  {
    id: 2,
    value: "987654321",
    isCorrect: false,
  },
];

export class AttemptServiceMock
  extends AbstractService
  implements IAttemptService
{
  constructor() {
    super(ServiceNames.ATTEMPS);
  }

  async postAttempt(_attempt: string): Promise<Attempt> {
    return Promise.resolve(fakeAttempts[0]);
  }

  async getAttempts(): Promise<Attempt[]> {
    return Promise.resolve(fakeAttempts);
  }

  async getAttempt(_id: number): Promise<Attempt> {
    return Promise.resolve(fakeAttempts[0]);
  }

  async updateAttempt(
    _id: number,
    _attempt: Partial<Attempt>
  ): Promise<Attempt> {
    return Promise.resolve(fakeAttempts[0]);
  }

  async deleteAttempt(_id: number): Promise<void> {
    return;
  }

  async deleteAllAttempts(): Promise<void> {
    return;
  }
}
