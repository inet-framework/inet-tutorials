---
layout: page
title: Step 14. Introducing antenna gain
tutorial: Wireless
---

## Goals

In the previous steps, we have assumed an isotropic antenna for the radio,
with a gain of 1 (0dB). Here we want to enhance the simulation by taking
antenna gain into account.

## The model

For simplicity, we configure the hosts to use `ConstantGainAntenna`.
`ConstantGainAntenna` is an abstraction: it models an antenna that has a
constant gain in the directions relevant for the simulation, regardless of
how such antenna could be implemented in real life. For example, if all
nodes of a simulated wireless network are on the same plane,
`ConstantGainAntenna` could correspond to an omnidirectional antenna such
as a vertical dipole. (INET contains support for directional antennas as
well.)

<p><pre class="snippet" src="../omnetpp.ini" from="\[Config Wireless14\]" until="#---"></pre></p>

## Results

With the added antenna gain, the transmissions are powerful enough to require
only two hops to get to host B every time, as opposed to the previous step,
where it sometimes required three. Therefore, at the beginning of the
simulation, host R1 can reach host B directly.  Also, host R1 goes out of host
A's communication range only at the very end of the simulation. When this
happens, host A's transmission is routed through host R2, which is again just
two hops.

<p><video autoplay loop controls onclick="this.paused ? this.play() : this.pause();" src="wireless-step14-1.mp4" width="655" height="575"></video></p>
<!--internal video recording, playback speed animation speed 1-->

**Number of packets received by host B: 1045**

## Discussion

Use <a href="https://github.com/inet-framework/inet-tutorials/issues/1" target="_blank">this page</a>
in the GitHub issue tracker for commenting on this tutorial.