---
layout: page
title: Step 1. Static routing
tutorial: RIP
---

## Goals

In this step, RIP is not used, all IPv4 routes are assigned statically by the `Ipv4NetworkConfigurator` module.

## The model

The configuration uses the following network, defined in <a srcfile="rip/Network.ned"/>:

<img class="screen" src="step1network.png" style="max-width: 90%">

TODO: the network contains three LANs, connected to a network of routers via ethernet switches

TODO: In the simulation, a host from one subnet will ping a host in another subnet. The ping packets will be routed via the routers, which use static routes assigned by `Ipv4NetworkConfigurator`.

The configuration in <a srcfile="rip/omnetpp.ini"/> is the following:

<p><pre class="include" src="omnetpp.ini" from="Step1" until="----"></pre></p>

## Results

The following image shows the routes towards `host0` as red arrows, and towards `host6` as blue arrows:

<img class="screen" src="step1routes.png" onclick="imageFullSizeZoom(this);" style="cursor:zoom-in">

Here is a video of `host0` pinging `host6`:

<p><video autoplay loop controls onclick="this.paused ? this.play() : this.pause();" src="step1_2.mp4"></video></p>
<!--internal video recording, animation speed none, playback speed 2.138, zoom 0.77-->
