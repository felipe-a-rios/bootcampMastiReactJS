import { render, act, cleanup } from "@testing-library/react";
import CountDownTimer from "../Timer";

describe("CountDownTimer", () => {
  afterEach(cleanup);

  it("shows the right time", () => {
    const { getByText } = render(
      <CountDownTimer hours={47} minutes={57} seconds={52} />
    );
    const timerDisplay = getByText("00:01:00");

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(timerDisplay).toHaveTextContent("00:00:59");
  });

  it("restarts the time when it reaches zero.", () => {
    const { getByText } = render(
      <CountDownTimer hours={47} minutes={57} seconds={52} />
    );
    const timerDisplay = getByText("00:00:02");

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(timerDisplay).toHaveTextContent("00:00:02");
  });
});
