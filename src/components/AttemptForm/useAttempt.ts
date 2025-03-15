import { useState } from "react";
import { Attempt } from "../../domain/attempt.entity";
import { AttemptServiceMock } from "../../infrastructure/test/attempt.service.mock";

export const useAttempt = () => {
  const attemptService = new AttemptServiceMock();

  const [attempts, setAttempts] = useState<Attempt[]>([]);

  const fetchAttempts = async (): Promise<void> => {
    const attempts = await attemptService.getAttempts();
    setAttempts(attempts);
  };

  const upsertAttempt = async (value: string): Promise<Attempt> => {
    const attempt = await attemptService.postAttempt(value);
    return attempt;
  };

  return { attempts, fetchAttempts, upsertAttempt };
};
