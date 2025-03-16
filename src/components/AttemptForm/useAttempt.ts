import { useState } from "react";
import { Attempt } from "../../domain/attempt.entity";
import { AttemptService } from "../../infrastructure/services/attempt.service";

export const useAttempt = () => {
  const attemptService = new AttemptService();

  const [attempts, setAttempts] = useState<Attempt[]>([]);

  const fetchAttempts = async (): Promise<void> => {
    const attempts = await attemptService.getAttempts();
    setAttempts(attempts);
  };

  return {
    attempts,
    fetchAttempts,
  };
};
