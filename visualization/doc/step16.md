---
layout: page
title: Step 16. Displaying 802.11 channel access state
tutorial: Visualization
---

## Goals

In this step we display how wireless nodes gain access to the channel using
CSMA/CA access method. Visualizing this, we get a clear picture of the state 
of nodes.

In this step, we turn on visualization to indicate nodes' CSMA/CA channel access state,
i.e. if they are currently idle, owning the channel and transmitting, or in the backoff period.
This helps to get a clear picture of how nodes are accessing a channel just by looking at them on the playground.

<!--
Ebben a lépésben azt mutatjuk meg, hogy hogyan történik a vezeték nélküli
csatorna lefoglalása a node-ok részéről. Ennek a vizualizálásával 
pontos képet kaphatunk arról, hogy melyik node foglalja a csatornát, 
melyik várakozik, hogy adhasson és melyik az, amelyik csak veszi az adást.

Az eszközök CSMA/CA közeghozzáférési módot alkalmaznak, 
aminek az a célja, hogy node-ok ne küldjenek egyszerre csomagokat, ezzel 
ütközést okozva a hálózatban.
A node először "belehallgat" a csatornába és ha úgy érzékeli, hogy éppen 
nincs adás, akkor elkezdi küldeni a saját üzenetét. Ha éppen ad valamelyik 
eszköz a csatornán, akkor véletlenszerű időtartam után
-->
<!--
CSMA/CA in computer networking, is a network multiple access method
in which carrier sensing is used, but nodes attempt to avoid collisions
by transmitting only when the channel is sensed to be <i>"idle"</i>. That operates in
data link layer (Layer 2).

Network nodes can be in different channel access states like <i>idle</i>,
<i>owning</i>, <i>ifs+back off</i>, that show, who transmit on the channel
and who listen. We want to display that in this step.
-->

## The model

<!--
Firstly we hide some visualizers, because they are distracting.
The communication is the same as in the previous step, we have to configure only the visualizer.
To display the channel access states, we use infoVisualizer. <br>
Here is the configuration:
@dontinclude omnetpp.ini
@skipline [Config Visualization14]
@until ####

The module parameter specifies the submodules of network nodes, and the content
determines what is displayed on network nodes. In addition we can adjust the
background color, the font color, and the opacity. These are optional settings.
-->

## Results

<img src="step16_channel_access_2d.gif">
<!--
Here's what happens, when the simulation is running:
[gif simulation is running]

We see, the nodes wait until the channel is sensed to be idle. If the medium is clear,
instead of immediately transmitting network nodes are waiting a predefined amount of time.
This waiting period is called the interframe spacing (IFS).
It depends on the priority of the packet.
In addition to having a different IFS, a station will add a "random backoff"
to its waiting period, to reduce the collision probability.
After that the the network node starts transmitting the data, and it's owning the channel.
-->

Sources: <a srcfile="../omnetpp.ini" />, [VisualizationNetworks.ned](../VisualizationNetworks.ned)
