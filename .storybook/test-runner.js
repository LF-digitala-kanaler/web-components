import { waitForPageReady } from "@storybook/test-runner";
import { toMatchImageSnapshot } from "jest-image-snapshot";

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

const config = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async prepare({ page, browserContext, testRunnerConfig }) {
    // this line is customized!
    const targetURL = process.env.STORYBOOK_TEST_RUNNER_CI
      ? "http://127.0.0.1:6006"
      : "http://127.0.0.1:6006";
    const iframeURL = new URL("iframe.html", targetURL).toString();
    console.log(iframeURL);
    if (testRunnerConfig?.getHttpHeaders) {
      const headers = await testRunnerConfig.getHttpHeaders(iframeURL);
      await browserContext.setExtraHTTPHeaders(headers);
    }

    await page.goto(iframeURL, { waitUntil: "load" }).catch((err) => {
      if (err.message?.includes("ERR_CONNECTION_REFUSED")) {
        const errorMessage = `Could not access the Storybook instance at ${targetURL}. Are you sure it's running?\n\n${err.message}`;
        throw new Error(errorMessage);
      }

      throw err;
    });
  },
  async postVisit(page, context) {
    // use the test-runner utility to wait for fonts to load, etc.
    await waitForPageReady(page);

    // If you want to take screenshot of multiple browsers, use
    // page.context().browser().browserType().name() to get the browser name to prefix the file name
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    });
  },
};
export default config;
