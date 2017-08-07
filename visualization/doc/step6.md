---
layout: page
title: Step 6. Using 3D models for network nodes
tutorial: Visualization
---

## Goals

However it doesn't directly affect the outcome of the simulation, it is 
more understandable if the appearance of nodes is similar as in real world.
The default icon for the pedestrians is a cellphone. In this step we replace 
the default icon with a 3D animated model.

NOTE/TODO: visualization by definition doesnt affect the outcome of the simulation.

By default, wirelessHosts are indicated by a cell phone icon.
However, a 3D animated model of a pedestrian may depict the moving wirelessHosts better
in a real world context. It also fits better in the 3D environment.
In this step, we replace the cell phone icon that represents hosts with a 3D model.

<!--
ad2:
The simulation is more understandable if the appearance of nodes is similar as in real world.
The default icon for the pedestrians is a cellphone. In this step we replace 
the default icon with an 3D animated model. It doesn't directly affect the 
outcome of the simulation.
-->
<!--
A szimuláció sokkal érthetőbb, ha a node-ok hasonlóan néznek ki, mint ahogy a valóságban.
A pedestrian-ok default ikonja egy mobil. Ebben a lépésben kicseréljük egy 
3D animált modellre. Ennek semmi közvetlen hatása nincs a szimuláció eredményére.
-->

## The model
<!--
<i>Pedestrian0</i> and <i>pedestrian1</i> are <tt>WirelessHost</tt> node type, so by default their icon is a cellphone.
We want to show, how to change network nodes' default icon.
In INET Framework it's possible to change device appearance to an external 3D osg model.
It's really simple.
We have to change only the network node's <tt>osgModel</tt> attribute.
We set that to <tt>boxman.osgb</tt>.
That's the file name of the 3D model.
In addition we can set the size and the rotation of the model.
The <tt>(0.06).scale</tt> means the model size is 6% of the original.
The three numbers are in for the rot keyword mean the rotation of the 3D model around x, y and z axis.

@dontinclude omnetpp.ini
@skipline [Config Visualization04]
@until ####
-->
## Results

<img src="step4_result1.gif">
<!--
In Module view mode there's no difference compared to the simulation before this.
But in 3D Scene view mode instead of phones we see walker boxmans.
-->

Sources: [omnetpp.ini](../omnetpp.ini), [VisualizationNetworks.ned](../VisualizationNetworks.ned)
