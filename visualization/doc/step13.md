---
layout: page
title: Step 13. Showing data link activity
tutorial: Visualization
---

## Goals
Even though we can see physical link activity, sometimes we want to see information 
about communication at data link layer level. INET offers a visualizer that can 
visualize network traffic at data link layer level. 
In this step, we display data link activity.

## The model
The configuration in the ini file is the following.
<pre class="snippet" src="../omnetpp.ini" from="\[Config Visualization13\]" until="# turning off physical link activity"></pre>

The configuration is similar to the configuration of physical link activity visualization, 
because `PhysicalLinkVisualizer` and `DataLinkVisualizer` have the same 
base (`LinkVisualizerBase`) and their most parameters are the same.
`DataLinkVisualizer` is enabled by setting `displayLinks` to *true*. 
The `lineColor` and `labelColor` parameters are set to *orange* so that 
the activity arrows are easy to recognize just by looking at the simulation.
We adjust the `fadeOutMode` and the `fadeOutTime` parameters so that 
the activity arrows do not fade out completely before the next ping messages are sent.

## Results

<!--
visualizing data link activity video

Visuailzing data link activity and physical link activity video
-->

Sources: <a srcfile="visualization/omnetpp.ini" />, <a srcfile="visualization/VisualizationD.ned" />
