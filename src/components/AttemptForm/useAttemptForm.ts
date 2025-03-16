import { useState } from "react";
import { SolutionResponse } from "../../domain/solution.ov";
import { AttemptService } from "../../infrastructure/services/attempt.service";

export const useAttemptForm = () => {
  const [attemptInput, setAttemptInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [solutionResponse, setSolutionResponse] =
    useState<SolutionResponse | null>(null);

  const attemptService = new AttemptService();

  const upsertAttempt = async (): Promise<void> => {
    resetFormResponses();

    if (!validateAttempt(attemptInput)) return;

    const response = await attemptService.postAttempt(attemptInput);

    if (typeof response === "object" && "error" in response) {
      setError(response.error);
    }

    setAttemptInput("");
  };

  const generateSolutions = async (): Promise<void> => {
    resetFormResponses();
    setAttemptInput("");

    const response = await attemptService.generateSolutions();

    if (typeof response === "object" && "error" in response) {
      setError(response.error);
    }

    setSolutionResponse(response as SolutionResponse);
  };

  const deleteAllAttempts = async (): Promise<void> => {
    resetFormResponses();
    setAttemptInput("");

    await attemptService.deleteAllAttempts();
  };

  const validateAttempt = (input: string): boolean => {
    // Check if the input has exactly 9 characters
    if (input.length !== 9) {
      setError("The attempt must have exactly 9 characters.");
      return false;
    }

    // Check if the input contains only digits 1 to 9
    if (!/^[1-9]+$/.test(input)) {
      setError("The attempt must contain only digits 1 to 9.");
      return false;
    }

    // Check that all digits are unique using a Set
    const uniqueDigits = new Set(input.split(""));
    if (uniqueDigits.size !== 9) {
      setError("All digits must be unique.");
      return false;
    }

    return true;
  };

  const resetFormResponses = () => {
    setError(null);
    setSolutionResponse(null);
  };

  return {
    isLoading,
    attemptInput,
    error,
    solutionResponse,
    setAttemptInput,
    setIsLoading,
    setError,
    validateAttempt,
    upsertAttempt,
    generateSolutions,
    deleteAllAttempts,
  };
};
