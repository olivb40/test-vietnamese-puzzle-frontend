import { useEffect } from "react";
import { AttemptForm } from "../components/AttemptForm";
import { AttemptList } from "../components/AttemptList";
import { useAttempts } from "./useAttempts";

const App = () => {
  const { attempts, fetchAttempts } = useAttempts();

  useEffect(() => {
    fetchAttempts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full md:w-1/2 mx-auto p-8">
      <h1 className="font-bold text-xl text-center">Vietnamese puzzle</h1>
      <div className="text-center bg-gray-100 p-4 mb-4 rounded">
        <p className="italic mb-1">
          66 = A + 13 * (B / C) + D + E + 12 * F - G - 11 + (H * I) / G - 10
        </p>
        <p>
          Where A, B, C, D, E, F, G, H, I are <strong>unique</strong> integers
          between <strong>1 and 9</strong>.
        </p>
      </div>

      <AttemptForm onSubmit={() => fetchAttempts()} />

      <AttemptList attempts={attempts} />
    </div>
  );
};

export default App;
