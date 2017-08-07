---
layout: page
title: Step 5. Displaying communication/interference range
tutorial: Visualization
---

## Goals

Wireless communication is only possible if devices are within each other's communication range.
In this step we visualize communication and interference ranges. This can help in the placement of network nodes.

<!--
Ebben a lépésben a wireless node-ok communication range-eit fogjuk megjeleníteni. 
A wireless hálózatok működéséhez szükséges, hogy az eszközök egymás communication 
range-ében legyenek. A node-ok elhelyezésekor erre figyelnünk kell, a range-ek 
vizualizálása segíti ezt.
-->

## The model
<!--
In this step we display the communication and interfaces range of wireless nodes in the network.

Later we want to see communication between these network nodes, so we have to place them in each other's communication range.
In this step we want to visualize these areas to place devices .

TODO: Now we extend our model with two pedestrians, and an Access Point.


This is our extended network file:

@dontinclude VisualizationNetworks.ned
@skip network VisualizationB
@until ####

To achieve our goal, we need to add two <tt>WirelessHost</tt>s, and an <tt>AccessPoint</tt> to the network.
To communicate with each other, we need an <tt>IPv4NetworkConfigurator</tt> and an <tt>Ieee80211ScalarRadioMedium</tt> submodule.
The configurator prepares the network nodes to the communication, the radioMedium manages the media.

In the <tt>omnetpp.ini</tt> file, we adjust the transmission power of the network nodes.
We have to do that, because by using the default transmission power parameter, the ranges will be too big.
We set the transmission power of the <i>accessPoint0</i> bigger, than the <i>pedestrian0</i> and <i>pedestrian1</i> transmission power.
It's possible to modify the color of the ranges with the <tt>communicationRangeColor</tt> and <tt>interferenceRangeColor</tt> parameters.
Now we leave them on the default value: the communication range is blue and the interference range color is grey.
Below, there is the appropriate part of the ini file:

@dontinclude omnetpp.ini
@skipline [Config Visualization03]
@until ####
-->
## Results

<img src="step3_result1.png">
<img src="step3_result2.png">
<!--
If we run the simulation in the 3D Scene view mode, we can see the three nodes and circles around them.
Each node is in the center of a circle, that circle is the node's communication range.

We configured the visualization of interference ranges too.
These are also on the map, but they're very big, so we have to zoom out or move to any direction to see these ranges.
The communication and interference ranges seen in the Module view mode too.

When we run the simulation, the pedestrians associate with the access point.
In Module view mode there's a bubble message when its happens.
-->
Sources: [omnetpp.ini](../omnetpp.ini), [VisualizationNetworks.ned](../VisualizationNetworks.ned)
