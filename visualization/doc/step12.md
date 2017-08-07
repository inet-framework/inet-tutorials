---
layout: page
title: Step 12. Showing active physical links
tutorial: Visualization
---

## Goals

In this step we visualize active physical links in a VoIP communication.
These display which node receives VoIP packets successfully from the sender device at the physical layer. 
<!--
Ebben a lépésben megmutatjuk a VoIP kommunikáció aktív fizikai linkjeit.
Ezek azt mutatják meg, hogy mely eszköz fogad VoIP csomagot a küldő eszköztől. 
Ezzel a visualizer-rel ellenőrizzük, hogy van-e fizikai kapcsolat két eszköz között.
-->

<!--
In this step we want to show the active physical links of the VoIP communication.
Physical links appear, when a node receives VoIP message. With this visualizer
we can monitor which network node transmits VoIP message and which node receives that.
-->

## The model

<!--
The communication is given, we need to handle the visualizer only.
We can turn off some visualizer, that can confuse us.
Now we have to use the physicalLinkVisualizer. We need to filter
which packets are considered to determine active links, in this case we are curious about
VoIP messages. This visualizer display an arrow from the sender to the receiver.
We can change the color, the width and the style of the arrow, and we can adjust how quickly
inactive links fade away. With the fadeOutMode we can set the base
of the elapsed time.

Here is the configuration:

@dontinclude omnetpp.ini
@skipline [Config Visualization10]
@until ####
-->

## Results

<img src="step12_phys_link_3d.gif">
<img src="step12_phys_link_2d.gif">
<!--
The VoIP application starts at 1s. Then the pedestrian0 sends the first VoIP message. Because only
the accessPoint0 is in its communication range, only between them appears an arrow. But when the sender
is the accessPoint0, and the destination is the pedestrian1, an array turns up towards
the pedestrian0 too. This happens, because the pedestrian0 is in the accessPoint0's communication
range too, so its wlan NIC also can receive the VoIP packet.The array always points
to the receiver.
-->

Sources: @ref omnetpp.ini, @ref VisualizationNetworks.ned
