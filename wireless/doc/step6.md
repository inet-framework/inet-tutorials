---
layout: page
title: Step 6. Using CSMA to better utilize the medium
tutorial: Wireless
---

## Goals

In this step, we try to increase the utilization of the communication
channel by choosing a medium access control (MAC) protocol that is better
suited for wireless communication.

In the previous step, nodes transmitted on the channel immediately when
they had something to send, without first listening for ongoing
transmissions. This resulted in a lot of collisions and lost packets.
We improve the communication by using the CSMA protocol, which is based
on the "sense before transmit" (or "listen before talk") principle.

CSMA (carrier sense multiple access) is a probabilistic MAC protocol in
which a node verifies the absence of other traffic before transmitting on
the shared transmission medium. CSMA has several variants, we'll use
CSMA/CA (where CA stands for collision avoidance). In this protocol, a node
that has data to send first waits for the channel to become idle, and then
it also waits for random backoff period. If the channel was still idle
during the backoff, the node can actually start transmitting. Otherwise the
procedure starts over, possibly with an updated range for the backoff
period. We expect that the use of CSMA will improve throughput, as there
will be less collisions, and the medium will be utilized better.

## The model

To use CSMA, we need to replace `IdealWirelessNic` in the hosts with
`WirelessNic`. `WirelessNic` is a generic NIC with both the radio and
the MAC module left open, so we specify `IdealRadio` for its `radioType`
parameter, and `CsmaCaMac` for `macType`.

The `CsmaCaMac` module implements CSMA/CA with optional acknowledgements
and a retry mechanism. It has a number of parameters for tweaking its
operation. With the appropriate parameters, it can approximate basic
802.11b ad-hoc mode operation. Parameters include:

- acknowledgements on/off
- bit rate (this is used for both data and ACK frames)
- protocol overhead: MAC header length, ACK frame length
- backoff parameters: minimum/maximum contention window (in slots),
  slot time, maximum retry count
- timing: interval to wait before transmitting ACK frame (SIFS) and before data
  frames in addition to the backoff slots (DIFS)

For now, we do not use an acknowledgement (sending of ACK packets) so we can see
purely the effect of "listen before talk" and waiting a random backoff
period before each transmission (this is the default behavior for the MAC).
In the absence of ACKs, the MAC has to assume that all its transmissions are successful,
so no frame is ever retransmitted.

<p><pre class="snippet" src="../omnetpp.ini" from="\[Config Wireless06\]" until="#---"></pre></p>

## Results

The effect of CSMA can be seen in the animation below. The first two packets are sent by host A,
and after waiting for a backoff period, host R1 retransmits both packets. This time,
host B receives them correctly, because only host R1 is transmitting.

<p><video autoplay loop controls onclick="this.paused ? this.play() : this.pause();" src="wireless-step6-1.mp4" width="655" height="575"></video></p>
<!--internal video recording, playback speed 0.72 -->

The following sequence chart displays that after receiving the UDPData-2 packet,
host R1 transmits it after the backoff period timer has expired.

<img class="screen" src="wireless-step6-seq-3.png" width="900px">

It is already apparent by watching the simulation that there are much fewer
collisions this time. The numbers also confirm that CSMA has worked: nearly
eight times as many packets are received by host B than in the previous step.

**Number of packets received by host B: 1374**

Sources: <a srcfile="wireless/omnetpp.ini" />, <a srcfile="wireless/WirelessB.ned" />

## Discussion

Use <a href="https://github.com/inet-framework/inet-tutorials/issues/1" target="_blank">this page</a>
in the GitHub issue tracker for commenting on this tutorial.