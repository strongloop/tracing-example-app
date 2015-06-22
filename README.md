> You will need a StrongLoop license to run this beta demo. If you are
interested, please contact callback@strongloop.com.

# tracing-example-app

Example application for the StrongLoop Arc Tracing module.

## How to run the example

Open up your console and run the [`start` script](start):

```
./start
```

> The [`start` script](start) starts the process manager, sets the number
of running instances to 1, and starts arc with the tracing feature.

You will see the "StrongLoop Arc Sign In" page.

Sign in (you will need to register first if you haven't already done so) and
click on process manager.

Add a PM host with the following info:

- Strong PM: `localhost`
- Port: `8701`

You should see a dropdown menu arrow on the right side of the Strong PM cell,
click it and choose `push license` to validate your StrongLoop license.

Then go back to the main menu and choose tracing. To start tracing, toggle the
on/off switch to the on position. You should see some graphs load, but not much
will be happening as the server we started isn't doing much.

Create some variation in the graphs by running the [`./send-request` script](send-request)
to make repeated curl requests to the server:

```
./send-request
```

That's it. For more information on tracing, see the [official documentation](http://docs.strongloop.com/display/SLC/Tracing).

---

[Other LoopBack Examples](https://github.com/strongloop/loopback-example)
