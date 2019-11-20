import { AbortController } from "abort-controller";
import { GaxiosOptions, GaxiosError, request } from "gaxios";

function onRetryAttempt(err: GaxiosError) {
    console.log(`Retrying ${err}`);
}

async function main() {
    const source = new AbortController();
    const config: GaxiosOptions = {
        method: "GET",
        url: "https://google.com",
        signal: source.signal,
        retryConfig: { onRetryAttempt, retry: 10, noResponseRetries: 10 }
    };
    const req = request(config);
    source.abort();
    await req;
}

main();
