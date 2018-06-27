---
layout: page
title: Step 4. RIP Timeout timer and garbage-collection timer
tutorial: RIP
---

## Goals

TODO: Demonstrating the timeout-timer and the garbage collection timer

## The model

TODO: about the timout-timer and garbage collection timer...
      mark routes as expired after 180s inactivity by default, delete them after 120s (but still advertise until deleted)

TODO: the network and the config

## Results

TODO: video

<p><video autoplay loop controls onclick="this.paused ? this.play() : this.pause();" src="step4.mp4"></video></p>

Here are two images of the RIP table of `router1`.

The link breaks at 50s, so `router1` doesn't receive any updates on the route to the 10.0.0.24/29 network from `router2`. As indicated on the following image, the last update to the route was at 30s, thats when the timeout timer was started.

<img class="screen" src="step4_3.png">

The timeout timer expires at 210s, the route is set to metric 16, and the flush timer is started.

<img class="screen" src="step4_4.png">

The flush timer expires at 330s, and the route is removed from the RIP table.

TODO: what happens

TODO: screenshots or routing tables / RIP packets
