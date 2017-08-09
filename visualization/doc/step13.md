---
layout: page
title: Step 13. Showing active data links
tutorial: Visualization
---

## Goals

In this step we visualize the VoIP communication's data link layer connections. By visualizing 
active data links, we can verify that the VoIP packets arrived correctly at the destination node.

<!--
Ebben a lépésben a VoIP kommunikáció data linkjeit mutatjuk meg. A data linkek 
vizualizálásával ellenőrizzük, hogy a VoIP csomag hibátlanul megérkezett-e a receiverhez.
-->

## The model

<!--
The configuration is similar as the physical link visualizer's settings.
We can adjust the same parameters, such as lineColor, lineWidth, lineStyle,
the only difference is, we set the dataLinkVisualizer submodule now.

@note This is because all link visualizer have a common parent class.

Configuration:
@dontinclude omnetpp.ini
@skipline [Config Visualization11]
@until ####
-->

## Results

<img src="step13_data_link_2d.gif">
<img src="step13_data_link_3d.gif">
<!--
We hide the physicalLinkVisualizer, because it's confusing. When the VoIP
communications starts, and a packet reach the destination an arrow appears
from the sender, towards the receiver. It fades away the same way as physical
links.
-->

Sources: <a srcfile="../omnetpp.ini" />, [VisualizationNetworks.ned](../VisualizationNetworks.ned)
