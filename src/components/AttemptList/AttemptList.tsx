import { Attempt } from "../../domain/attempt.entity";

interface AttemptListProps {
  attempts: Attempt[];
}

export default function AttemptList(props: AttemptListProps) {
  const { attempts } = props;

  if (attempts.length === 0) {
    return (
      <div className="flex justify-center p-4">
        <p className="text-xl">🔎 No attempts found</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <table className="min-w-full divide-y divide-gray-200 shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            {/* Table header for "Value" */}
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Value
            </th>
            {/* Table header for "Correct" */}
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Correct
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {attempts.map((attempt) => (
            <tr key={attempt.id}>
              {/* Display the attempt value */}
              <td className="px-6 py-4 whitespace-nowrap">{attempt.value}</td>
              {/* Display whether the attempt is correct */}
              <td className="px-6 py-4 whitespace-nowrap">
                {attempt.isCorrect ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
