---
layout: page
title: Step 6. Counting to Infinity (Two-node loop instability)
tutorial: RIP
---

## Goals

TODO: The link breaks, and in the RIP updates the hop count gets gradually larger -> counting to infinity
it reaches 16 (unusable) but it takes lots of minutes

## The model

TODO: how this can be prevented (SplitHorizon, etc)

TODO: the network and the config

## Results

TODO: video

Rip convergence takes 220 seconds (from link break at 50s to no routes to host3 at 270s).
Note the incrementally increasing hop count (indicated on the route in parentheses), i.e. counting to infinity

<p><video autoplay loop controls onclick="this.paused ? this.play() : this.pause();" src="step6_1.mp4"></video></p>
<!--internal video recording, zoom 0.77, playback speed 1, no animation speed-->

Rip start, link break, counting to infinity, ping packets:

<p><video autoplay loop controls onclick="this.paused ? this.play() : this.pause();" src="step6_2.mp4"></video></p>

Ping packets go back and forth between the two routers, indicating the presence of the routing loop.
The ping packet times out after 8 hops, and then it's dropped.

TODO: what happens

TODO: screenshots of routing tables / RIP packets
