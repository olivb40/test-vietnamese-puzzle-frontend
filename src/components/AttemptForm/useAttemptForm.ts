import { useState } from "react";

export const useAttemptForm = () => {
  const [attempt, setAttempt] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validateAttempt = (input: string): boolean => {
    setError(null);

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

  return { attempt, error, setAttempt, validateAttempt };
};
