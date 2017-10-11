---
layout: page
title: Step 7. Displaying communication & interference range
tutorial: Visualization
---

## Goals
For successful communication, wireless nodes must be within each other's 
communication range. By default, communication range is not displayed, but INET 
offers a visualizer to show it. Visualizing communication range also can help 
to place network nodes to appropriate position on the playground. 
In this step, we display the communication and interference range of the nodes.

## The model
Here is the configuration of this step.
<pre class="snippet" src="../omnetpp.ini" from="\[Config Visualization07\]" until="#---"></pre>

The size of the communication and interference range is mainly depends on 
the transmitter power of the device.
We set the transmitter power of each device to *1mW*, because the default transmitter power 
is too big for this simulation. 
Communication and interference range are visualized by `MediumVisualizer`.
We enable the `visualizer` by setting `displayCommunicationRanges` and 
`displayInterferenceRanges` to true.

TODO: Visualization of velocity and orientation is disabled in this step...

## Results

<img class="screen" src="step7_result_2d.png"  onclick="imageFullSizeZoom(this);" style="cursor:zoom-in">

<!--
<img src="step3_result1.png">
<img src="step3_result2.png">
If we run the simulation in the 3D Scene view mode, we can see the three nodes and circles around them.
Each node is in the center of a circle, that circle is the node's communication range.

We configured the visualization of interference ranges too.
These are also on the map, but they're very big, so we have to zoom out or move to any direction to see these ranges.
The communication and interference ranges seen in the Module view mode too.

When we run the simulation, the pedestrians associate with the access point.
In Module view mode there's a bubble message when its happens.
-->
Sources: <a srcfile="visualization/omnetpp.ini" />, <a srcfile="visualization/VisualizationD.ned" />
