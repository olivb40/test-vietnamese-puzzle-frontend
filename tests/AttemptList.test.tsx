// AttemptList.test.tsx
import { render, screen } from "@testing-library/react";
import { AttemptList } from "../src/components/AttemptList";
import { Attempt } from "../src/domain/attempt.entity";

describe("AttemptList Component", () => {
  test('renders "No attempts found" message when attempts array is empty', () => {
    render(<AttemptList attempts={[]} />);

    // Check if the no attempts message is displayed
    expect(screen.getByText(/no attempts found/i)).toBeInTheDocument();
  });

  test("renders table rows when multiple attempts are provided", () => {
    const attempts: Attempt[] = [
      { id: 1, attemptInput: "123456789", isCorrect: true },
      { id: 2, attemptInput: "987654321", isCorrect: false },
    ];

    render(<AttemptList attempts={attempts} />);

    // Check for table headers
    expect(screen.getByText(/value/i)).toBeInTheDocument();
    expect(screen.getByText(/correct/i)).toBeInTheDocument();

    // Check each attempt value is rendered
    expect(screen.getByText("123456789")).toBeInTheDocument();
    expect(screen.getByText("987654321")).toBeInTheDocument();

    // Check the correctness values are rendered correctly
    expect(screen.getByText("Yes")).toBeInTheDocument();
    expect(screen.getByText("No")).toBeInTheDocument();
  });
});
