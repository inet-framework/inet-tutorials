---
layout: page
title: Step 10. Displaying transmissions and receptions
tutorial: Visualization
---

## Goals

It can be useful to have a visual clue about which nodes are currently transmitting or receiving a signal.
In this step we visualize nodes' transmission and reception states.

<!--
---
-->

## The model
<!--
After the successful association process we can start the VoIP application between the pedestrians, so we need to add one udp application to them.
The pedestrian0 will be the sender and the pedestrian1 will be the receiver.
They communicate with udp over port 5000. 
The application starts at 1 second.
We leave all other options at their default values at the sender side.
At the receiver side we need to set the port to 5000, and we turn on the adaptive playout setting.
It will be used later.

We need to turn on some mediumVisualizer parameters.
We set true the displayTransmissions and the displayReceptions options.
We have to set an image to these options to display them.

Configuration:

@dontinclude omnetpp.ini
@skipline [Config Visualization08]
@until ####
-->
## Results

<img src="step8_result1.gif">
<!--
If we start the simulation, we can see clearly, who is the transmitter, and who are the receivers.
The signs appear, when a signal arrives or leaves the wlan NIC.
-->

Sources: [omnetpp.ini](../omnetpp.ini), [VisualizationNetworks.ned](../VisualizationNetworks.ned)
