import { useState } from "react";
import { AttemptService } from "../infrastructure/services/attempt.service";
import { Attempt } from "../domain/attempt.entity";

export const useAttempts = () => {
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
