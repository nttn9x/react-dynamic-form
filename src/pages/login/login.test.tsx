import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect, vitest } from "vitest";
import { Login } from "./login.container";

describe("Login Page", () => {
  test("render without crash", async () => {
    render(<Login />);
  });

  test("does not submit the form", async () => {
    render(<Login />);

    const submitBtn = screen.getByTestId("submitBtn");
    fireEvent.click(submitBtn);

    const handleOnSubmitMock = vitest.fn();
    screen.getByTestId("form").onsubmit = handleOnSubmitMock;

    waitFor(() => {
      expect(handleOnSubmitMock).not.toHaveBeenCalled();
    });
  });

  test("submit the form without errors", async () => {
    render(<Login />);

    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");
    const submitBtn = screen.getByTestId("submitBtn");

    waitFor(() => {
      expect(usernameInput).toBeDefined();
      expect(passwordInput).toBeDefined();
    });

    fireEvent.change(usernameInput, { target: { value: "Nguyen" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });

    waitFor(() => {
      expect(usernameInput).toBeDefined();
      expect(passwordInput).toBeDefined();
    });

    fireEvent.click(submitBtn);

    const handleOnSubmitMock = vitest.fn();
    screen.getByTestId("form").onsubmit = handleOnSubmitMock;

    waitFor(() => {
      expect(handleOnSubmitMock).toHaveBeenCalled();
    });
  });
});
