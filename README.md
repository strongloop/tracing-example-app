> You need a StrongLoop license to run this beta example. If you are
interested, please contact callback@strongloop.com.

# tracing-example-app

This is an example application for the StrongLoop Arc Tracing module.

- [Overview](#overview)
- [Setup](#setup)
- [Run](#run)

## Overview

The purpose of this example is demonstrate the tracing feature of StrongLoop
Arc. The application is a basic HTTP server that runs an [intensive computing
task when it receives a requests](index.js#L10-L17). This behavior is configured
deliberately to let us monitor the fluctuations of CPU/memory usage over time.

## Setup

```
$ git clone https://github.com/strongloop/tracing-example-app.git
$ cd tracing-example-app
$ npm install
```

## How to run the example

- `./start-demo`
- Sign in and validate your StrongLoop license
- Toggle the on/off switch to start tracing
- `./send-requests-repeatedly`
- View the graph output in the StrongLoop Arc Tracing module

---

Open up your console and run the [`start` script](start-demo):

```
./start-demo
```

> This script starts the application using Strong PM, sets the number of running
instances to 1, and starts StrongLoop Arc.

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
to make repeated cURL requests to the server:

```
./send-requests-repeatedly
```

Look at the tracing data again and you should see some fluctuations this time
around. When you're finished with the example, you can stop everything running
the included [stop demo script](stop-demo):

```
./stop-demo
```

For more information on tracing, see the [official documentation](http://docs.strongloop.com/display/SLC/Tracing).

---

[Other LoopBack Examples](https://github.com/strongloop/loopback-example)
