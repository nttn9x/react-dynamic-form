import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "@thor/pages/login/login.container";
import { describe, expect, test, vitest } from "vitest";

describe("Login Page", () => {
  test("render without crash", async () => {
    render(<Login />);
  });

  test("does not submit the form", async () => {
    render(<Login />);

    const submitBtn = await screen.getByTestId("submitBtn");

    await userEvent.click(submitBtn);

    const usernameLabel = await screen.getByTestId("username-error");
    const passwordLabel = await screen.getByTestId("password-error");

    expect(usernameLabel).toBeDefined();
    expect(passwordLabel).toBeDefined();
    expect(submitBtn).toBeDefined();
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

    const handleOnSubmitMock = vitest.fn();
    screen.getByTestId("form").onsubmit = handleOnSubmitMock;
    await fireEvent.click(submitBtn);

    expect(handleOnSubmitMock).toBeCalledTimes(1);
  });
});
