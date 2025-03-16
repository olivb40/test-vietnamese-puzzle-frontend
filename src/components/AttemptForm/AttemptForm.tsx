import { useAttemptForm } from "./useAttemptForm";

export default function AttemptForm({
  onSubmit,
}: {
  onSubmit: () => Promise<void>;
}) {
  const {
    isLoading,
    attemptInput,
    error,
    solutionResponse,
    upsertAttempt,
    generateSolutions,
    deleteAllAttempts,
    setAttemptInput,
    setIsLoading,
    setError,
  } = useAttemptForm();

  const handleAction = async (
    e: React.FormEvent,
    action: () => Promise<void>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    await action();
    setIsLoading(false);
    onSubmit();
  };

  return (
    <div className="p-3">
      <form
        onSubmit={(e) => handleAction(e, upsertAttempt)}
        className="flex gap-4 p-4"
      >
        <input
          type="text"
          value={attemptInput}
          onBlur={() => setError(null)}
          onChange={(e) => setAttemptInput(e.target.value)}
          placeholder="Enter your attempt..."
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 w-full"
        />
        <button
          type="submit"
          className="bg-gray-600 cursor-pointer text-white py-2 px-4 rounded hover:bg-gray-500 transition-colors"
          disabled={isLoading}
          title="Submit attempt"
        >
          Submit
        </button>
        <button
          disabled={isLoading}
          onClick={(e) => handleAction(e, deleteAllAttempts)}
          className="bg-gray-200 cursor-pointer text-white py-2 px-4 rounded hover:bg-gray-200 transition-colors"
          title="Delete all attempts"
        >
          🧹
        </button>
        <button
          disabled={isLoading}
          onClick={(e) => handleAction(e, generateSolutions)}
          className="bg-gray-200 cursor-pointer text-white py-2 px-4 rounded hover:bg-gray-200 transition-colors"
          title="Generate solutions"
        >
          💡
        </button>
      </form>
      {error && (
        <div className="text-center bg-red-100 p-4 rounded">
          <p className="text-red-400 text-center">{error}</p>
        </div>
      )}

      {isLoading && (
        <div className="text-center bg-gray-100 p-4 rounded">
          <p>Loading...</p>
        </div>
      )}

      {solutionResponse && (
        <div className="text-center bg-gray-100 p-4 rounded">
          <p className="italic mb-1">
            Solution: {solutionResponse.firstSolution}
          </p>
          <p>Duration: {solutionResponse.durationMs}ms</p>
        </div>
      )}
    </div>
  );
}
