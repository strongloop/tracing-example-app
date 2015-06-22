> You will need a StrongLoop license to run this beta demo. If you are
interested, please contact callback@strongloop.com.

# tracing-example-app

This is an example application for the StrongLoop Arc Tracing module.

- [Overview](#overview)
- [How to run the example](#how-to-run-the-example)
- [Summary of steps performed](#summary-of-steps-performed)

## Overview

The purpose of this example is demonstrate the tracing feature of StrongLoop
Arc. We will analyze a simple HTTP server and monitor it's CPU/memory usage over
time. When the server receives a request, an intensive computing task is
executed to cause a deliberate CPU/memory spike. While this is happening, we
will be using Strong Arc to to view the fluctuations in the tracing graph data.


## How to run the example

Open up your console and run the [`start` script](start):

```
./start
```

> The [`start` script](start) starts the application using Strong PM, sets the
number of running instances to 1, and starts arc with the tracing feature.

You will see the "StrongLoop Arc Sign In" page.

Sign in (you will need to register first if you haven't already done so) and
click on process manager.

Add a PM host with the following info:

- Strong PM: `localhost`
- Port: `8701`

You should see a dropdown menu arrow on the right side of the Strong PM cell,
click it and choose `push license` to validate your StrongLoop license.

Go back to the main menu and choose tracing.

To start tracing, toggle the on/off switch to the on position. You should see
some graphs load, but the data won't fluctuate because the server we started
earlier is not busy handling requests.

Create some variation in the graphs by running the [`./send-request` script](send-request)
to make repeated curl requests to the server:

```
./send-request
```

Look at the tracing data again and you should see some fluctuations this time
around. For more information on tracing, see the [official documentation](http://docs.strongloop.com/display/SLC/Tracing).

## Summary of steps performed

- `./start`
- Sign in and validate your StrongLoop license
- Toggle on/off switch to start tracing
- `./send-request`
- View the fluctuations in the tracing data

---

[Other LoopBack Examples](https://github.com/strongloop/loopback-example)
