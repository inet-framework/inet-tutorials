---
layout: page
title: Step 10. Configuring ad-hoc routing (AODV)
tutorial: Wireless
---

## Goals

In this step, we configure a routing protocol that adapts to the changing
network topology, and will arrange packets to be routed through `R2` and `R3`
as `R1` departs.

We'll use AODV (ad hoc on-demand distance vector routing). It is a
reactive routing protocol, which means its maintenance of the routing
tables is driven by demand. This is in contrast to proactive routing
protocols which keep routing tables up to date all the time (or at least
try to).

## The model

Let's configure ad-hoc routing with AODV. As AODV will manage the routing
tables, we don't need the statically added routes any more. We only need
`IPv4NetworkConfigurator` to assign the IP addresses, and turn all other
functions off.

More important, we change the hosts to be instances of `AODVRouter`.
`AODVRouter` is like  `WirelessHost`, but with an added `AODVRouting`
submodule. This change turns each node into an AODV router.

AODV stands for Ad hoc On-Demand Distance Vector. In AODV, routes are
established as they are needed. Once established, a route is maintained
as long as it is needed.

In AODV, the network is silent until a connection is needed. At that point
the network node that needs a connection broadcasts a request for connection.
Other AODV nodes forward this message, and record the node that they heard
it from, creating an explosion of temporary routes back to the needy node.
When a node receives such a message and already has a route to the desired
node, it sends a message backwards through a temporary route to the requesting
node. The needy node then begins using the route that has the least number
of hops through other nodes. Unused entries in the routing tables are recycled
after a time.

The message types defined by AODV are Route Request (RREQ), Route Reply (RREP),
and Route Error (RERRs). We expect to see these messages at the start of the
simulation (when an initial route needs to be established), and later when
the topology of the network changes due to the movement of nodes.

The configuration:

<p><pre class="snippet" src="../omnetpp.ini" from="\[Config Wireless10\]" until="#---"></pre></p>

## Results

Host R1 moves out of communication range or hosts A and B. The route that was
established through R1 is broken. Hosts R2 and R3 are at the right position to
relay host A's packets to host B, and the AODV protocol reconfigures the route
to go through R2 and R3. The UDP stream is re-established using these
intermediate hosts to relay host A's packets to host B. This can be seen in the
animation below.

<p><video autoplay loop controls onclick="this.paused ? this.play() : this.pause();" src="wireless-step10.mp4" width="655" height="575"></video></p>
<!--internal video recording, animation time = playback speed = 1, fadeOutMode animationTime, 1s -> 26 sec video, blue arrows only
if playback speed = 2 -> 13 sec video, blue and red arrows
not sure which one is better
-->

AODV detects when a route is no longer able to pass packets. When the link is
broken, there are no ACKs arriving at host A, so its AODV submodule triggers the
reconfiguration of the route. To detect possible new routes and establish one,
there is a burst of AODV transmissions between the hosts, and a new route is
established through hosts R2 and R3. This detection and reconfiguration takes
very little time. After the AODV packet burst, the arrows displaying it
quickly fade, and the UDP traffic continues.

The AODV route discovery messages can be seen in the following packet log:

<img class="screen" src="wireless-step10-packetlog.png">

The number of successfully received packets at host B has roughly doubled
compared to the previous step. This is because the flow of packets doesn't stop
when host R1 gets out of communication range of host A. Although the AODV
protocol adds some overhead, in this simulation it is not significant, the
number received packets still increases substantially.

**Number of packets received by host B: 956**

Sources: <a srcfile="wireless/omnetpp.ini" />, <a srcfile="wireless/WirelessB.ned" />

## Discussion

Use <a href="https://github.com/inet-framework/inet-tutorials/issues/1" target="_blank">this page</a>
in the GitHub issue tracker for commenting on this tutorial.