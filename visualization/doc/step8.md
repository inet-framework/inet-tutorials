---
layout: page
title: Step 8. Showing IP adresses
tutorial: Visualization
---

## Goals

Understanding network traffic often requires identifying nodes based on their IP addresses.
In this step we show the IP addresses assigned by the network configurator. 

TODO:
It's often convenient to tell a node's IP address at a glance, without using the module inspector.
In this step we show the IP addresses assigned by the network configurator.

## The model
<!--
If we want to see the network nodes' IP addresses we have to set the parameters of the <tt>InterfaceTableVisualizer</tt>.
Here is the configuration:

@dontinclude omnetpp.ini
@skipline [Config Visualization06]
@until ####

With the <tt>nodeFilter</tt> parameter we can define the nodes list, that are considered.
By default that list is empty, so we must set it.
Then we can set an interface list.
That specifies which interfaces are considered at each node.
Besides of these parameters we can change the font color, the background color, and the opacity of the text.
These settings are optional, that may make the IP addresses clearly visible.

With <tt>InterfaceTableVisualizer</tt> we can display not only the IP address of a NIC, but the MAC address too.
To that we need to change the <tt>content</tt> parameter to <tt>macAddress</tt>.
-->
## Results

<img src="step08_ipaddress_2d.gif">
<img src="step6_result4.gif"  width="850">
<img src="step6_result3.png" width="850">
<!--
If we run the simulation, we can see a yellow bubble above each pedestrian with its wlan NIC IP address.

In 3D view mode the text is a little bit fainter.

If we set the content parameter to <tt>macAddress</tt>, we can see the given NIC MAC (layer 2) address.
-->

Sources: @ref omnetpp.ini, @ref VisualizationNetworks.ned
