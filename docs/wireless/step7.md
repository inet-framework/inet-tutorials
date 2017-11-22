---
layout: page
title: Step 7. Turning on ACKs in CSMA
tutorial: Wireless
---

## Goals

In this step, we try to make link layer communication more reliable by
adding acknowledgements to the MAC protocol.


## The model

We turn on acknowledgements by setting the `useAcks` parameter of
`CsmaCaMac` to `true`. This change will make the operation of the MAC
module both more interesting and more complicated.

On the receiver side, the change is quite simple: when the MAC correctly
receives a data frame addressed to it, it responds with an ACK frame after
a fixed-length gap (SIFS). If the originator of the data frame does not
receive the ACK correctly within due time, it will initiate a
retransmission. The contention window (from which the random backoff period is
drawn) will be doubled for each retransmission until it reaches the maximum
(and then it will stay constant for further retransmissions). After a given
number of unsuccessful retries, the MAC will give up and discard the data
frame, and will take the next data frame from the queue. The next frame
will start with a clean slate (i.e. the contention window and the retry
count will be reset).

This operation roughly corresponds to the basic IEEE 802.11b MAC ad-hoc mode
operation.

Note that when ACKs (in contrast to data frames) are lost, retransmissions
will introduce duplicates in the packet stream the MAC sends up to to the
higher layer protocols in the receiver host. This could be eliminated by
adding sequence numbers to frames and maintaining per-sender sequence
numbers in each receiver, but the `CsmaCaMac` module does not contain such
a duplicate detection algorithm in order to keep its code simple and
accessible.

Another detail worth mentioning is that when a frame exceeds the maximum
number of retries and is discarded, the MAC emits a <i>link break</i>
signal. This signal may be interpreted by routing protocols such as AODV as
a sign that a route has become broken, and a new one needs to be found.

<p><pre class="snippet" src="../omnetpp.ini" from="\[Config Wireless07\]" until="#---"></pre></p>

## Results

With ACKs enabled, each successfully received packet is acknowledged. The animation
below depicts a packet transmission from host R1, and the corresponding ACK
from host B.

<p><video autoplay loop controls onclick="this.paused ? this.play() : this.pause();" src="wireless-step7-1.mp4" width="655" height="575"></video></p>
<!--internal video recording, playback speed 0.65, from #767-->

The UDPData + ACK sequences can be seen in the sequence chart below:

<img class="screen" src="wireless-step7-seq-2.png" width="900px">

In the following chart, the UDPData packet sequence numbers that are received by
host B's UDPApp, are plotted against time. This chart contains the statistics of
the previous step (ACK off, blue) and of the current step (ACK on, red).

<img class="screen" src="wireless-step7-seqno.png">

When ACKs are turned on, each successfully received UDPData packet has to be
ackowledged before the next one can be sent. Lost packets are retransmitted
until an ACK arrives, impementing a kind of reliable transport. Because of this,
the sequence numbers are sequential. In the case of ACKs turned off, lost
packets are not retransmitted, which results in gaps in the sequence numbers.
The blue curve is steeper, because the sequence numbers grow more rapidly. This
is in contrast to the red curve, where the sequence numbers grow only by one.

The next two charts display the difference between the subsequently received
UDPData packet sequence numbers. The first one (blue) is for the previous step.
The difference is mostly 1, which means the packets are received sequentially.
However, often there are gaps in the sequence numbers, signifying lost packets.
The second one (red) is for the current step,  where the difference is always 1,
as there are no lost packets.

<img class="screen" src="wireless-step7-seqdiff6.png" width="900px">
<img class="screen" src="wireless-step7-seqdiff7.png" width="900px">

**Number of packets received by host B: 1393**

Sources: <a srcfile="wireless/omnetpp.ini" />, <a srcfile="wireless/WirelessB.ned" />

## Discussion

Use <a href="https://github.com/inet-framework/inet-tutorials/issues/1" target="_blank">this page</a>
in the GitHub issue tracker for commenting on this tutorial.