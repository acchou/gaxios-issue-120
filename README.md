# gaxios-issue-120

Demonstration of gaxios [issue 120](https://github.com/googleapis/gaxios/issues/120)

## Build

    $ npm install
    $ npx tsc

## Run

    $ node index

## Output

```
Retrying AbortError: The user aborted a request.
Retrying AbortError: The user aborted a request.
Retrying AbortError: The user aborted a request.
Retrying AbortError: The user aborted a request.
...
```

## Expected output

I would expect that the default retry handler would detect user aborts and not attempt to retry the request in case of abort.

To fix this issue the user can manually replace the `shouldRetry` function in the retry configuration. But this requires duplicating much of the logic in the original, and in general it seems broken to not handle cancellation correctly by default.
