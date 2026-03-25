import { cleanup } from "@testing-library/react";
import { server } from "../mocks/server";

// ─── MSW ──────────────────────────────────────────────────────────────────────
// Start the server before all tests, reset overrides between tests, and close
// after the suite. Tests that stub `fetch` via `vi.stubGlobal` are unaffected
// because the stub takes precedence over MSW's interceptors.
// @ts-ignore
beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
// @ts-ignore
afterEach(() => server.resetHandlers());
// @ts-ignore
afterAll(() => server.close());

// ─── DOM cleanup ──────────────────────────────────────────────────────────────
// @ts-ignore
afterEach(() => {
  cleanup();
});