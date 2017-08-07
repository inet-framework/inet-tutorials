---
layout: page
title: Step 7. Displaying recent movement
tutorial: Visualization
---

## Goals

When wireless nodes roam in a network, it's often difficult to follow their movement. 
In this step we visualize the recent movement trajectory of network nodes.

TODO:
When wireless nodes move around the playground, it can be easier to track them
by displaying their recent movement. In this step, we visualize nodes' movement trails.

## The model

<img src="step7_without_movement_trails.gif">
<!--
The network nodes movement handled by the <tt>Mobility</tt> submodule.
To visualize that, we need to use <tt>MobilityVisualizer</tt>.

Here is the configuration:

@dontinclude omnetpp.ini
@skipline [Config Visualization05]
@until ####

We have to adjust the nodes mobility settings. <i>Pedestrian0</i> and <i>Pedestrian1</i> movement is calculated using "MassMobility".
This is a random mobility model for a mobile host with a mass.
We set their initial position, and a border, because we don't want to let them go out from the <i>accessPoint0</i>'s communication range.
We have more ways to set the nodes initial position.
We can set that in meter or we can add that in degree.
The pedestrians' movement based on three parameters.
The <tt>changeInterval</tt> is the frequency of changing speed and angle, the <tt>changeAngleBy</tt> change the direction of the movement, and the <tt>speed</tt> means the movement speed.

After that we need to add some visualizer parameters.
We display a trail, that shows the passed route, and we visualize an arrow, that represents the velocity of the pedestrians.
-->
## Results

<img src="step07_moving_2d.gif">
<img src="step5_result3.gif" width="850">
<!--
It is advisable to run the simulation in Fast mode, because the nodes move very slowly if viewed in Normal mode.

It can be seen in the animation below <i>pedestrian0</i> and <i>pedestrian1</i> roam in the park between invisible borders that we adjust to them.

Here's that in Module view mode:


And here's that in 3D Scene view mode:
-->

Sources: [omnetpp.ini](../omnetpp.ini), [VisualizationNetworks.ned](../VisualizationNetworks.ned)
