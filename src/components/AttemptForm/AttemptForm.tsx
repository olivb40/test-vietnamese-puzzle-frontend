import { useAttemptForm } from "./useAttemptForm";

export default function AttemptForm({
  onSubmit,
}: {
  onSubmit: (attempt: string) => void;
}) {
  const { attempt, error, setAttempt, validateAttempt } = useAttemptForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAttempt(attempt)) return;
    onSubmit(attempt);
    setAttempt("");
  };

  return (
    <div className="p-3">
      <form onSubmit={handleSubmit} className="flex gap-4 p-4 max-w-md mx-auto">
        <input
          type="text"
          value={attempt}
          onChange={(e) => setAttempt(e.target.value)}
          placeholder="Enter your attempt..."
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 w-full"
        />
        <button
          type="submit"
          className="bg-gray-600 cursor-pointer text-white py-2 px-4 rounded hover:bg-gray-500 transition-colors"
        >
          Submit
        </button>
      </form>
      {error && <p className="text-red-400 text-center">{error}</p>}
    </div>
  );
}
