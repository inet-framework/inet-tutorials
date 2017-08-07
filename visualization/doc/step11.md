---
layout: page
title: Step 11. Showing propagating signals
tutorial: Visualization
---

## Goals

We can visualize radio signals as they propagate through the medium.
It can provide information about how transmissions happen in time, and can help in detecting overlapping signals and collisions.

<!--
Sokszor fontos, hogy lássuk a vezeték nélküli jeleket, mert így monitorozhatjuk 
a hálózat forgalmát. Ebben a lépésben a jelek terjedését vizualizáljuk.
-->

## The model
<!--
The communication works, we can see who is the sender and the receiver, but we don't see the signal.
In this step we want to display the signal propagation.

in the previous step we configured the communication already, so now we only have to show that.
To this we need to turn on the mediumVisualizer's displaySignals parameter,
and set a propagation interval. It's possible to set the signal shape.
We have three options: ring, sphere and both.
If we set the shape ring the signals propagate on the ground in 2 dimension.
The Module view mode can display signals only this way.
The sphere is a 3D displaying mode, the signals propagate as a sphere under and over the ground.
If we set both, we can see a ring on the ground, and a sphere in the air. This is the default option.

@dontinclude omnetpp.ini
@skipline [Config Visualization09]
@until ####
-->
## Results

<img src="step9_result1.gif">
<img src="step9_result2.gif">
<img src="step9_result3.gif">
<img src="step9_result4.gif">
<!--
When we start the simulation in Module view mode, we can see how the signals propagate. We can see each signal has a beginning and an end.
Next to the ring, there is a label, that shows the message type.

There's an animation of a VoIP message, that goes from the pedestrian0 to the pedestrian1 through the accessPoint0:

And there's a similar message in 3D view mode, with both option:

Ring signal propagation:

Sphere signal propagation:

-->
Sources: @ref omnetpp.ini, @ref VisualizationNetworks.ned
