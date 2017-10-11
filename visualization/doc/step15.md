---
layout: page
title: Step 15. Showing routing table entries
tutorial: Visualization
---

## Goals
Routing information is scattered among nodes and can be accessed 
in individual routing tables of the nodes. Visualizing routing table entries graphically 
clearly shows how a packet would be routed, without looking into individual routing tables.
In this step, we enable visualization of routing table entries.

## The model

### Network topology
The configuration for this step uses the `VisualizationE` network, defined in <a srcfile="visualization/VisualizationE.ned"/>.

We add the following nodes to the network:
- one `Router` (`router0`),
- one `EtherSwitch` (`switch0`),
- one `WirelessHost` (`pedestrianVideo`)
- and two `Standardhost`s (`videoStreamServer` and `server1`).

Wireless hosts connect to `router0` via `accessPoint0`, `videoStreamServer` 
and `server1` connect to `router0` via `switch0`. 
The nodes are placed on the playground as follows.
<pre class="snippet" src="../omnetpp.ini" from="# initializing pedestrianVideo position" until="# videoStreamServer application settings"></pre>

The following image shows how the network looks like.
<img class="screen" src="step15_model_network.png">

### Video stream application
We add a video stream application to the configuration. The client is `pedestrianVideo`, 
the server is `videoStreamServer`. They communicate at UDP port 4000. In addition, sending interval, 
packet length and the video size are also defined in the `omnetpp.ini` file.
<pre class="snippet" src="../omnetpp.ini" from="# videoStreamServer application settings" until="# showing routing table entries towards videoStreamServer"></pre>

### Visualizer

Routing entries are visualized by `RoutingTableVisualizer` (included in the network 
as part of `IntegratedVisualizer`). The visualizer can be enabled by setting 
`displayRoutingTables` to *true*. The `videoStreamServer` node is selected as destination by setting 
`destinationFilter` to *\*videoStreamServer\**. We want to display the route which is 
between *\*pedestrianVideo\** and *\*videoStreamServer\**. To this end, we set 
the visualizer's `nodeFilter` parameter to 
*pedestrianVideo or videoStreamServer or switch\* or router\**.
(The route can lead through any switch or router so they need to be added to `nodeFilter`.)

## Results

<!--
When we start the simulation we can see that, the routingTableVisualizer draw arrows
to represent the routes. This is because by default netmask routes, default routes
and static routes added to routing table. Later we change that.<br>
[img: routes]

After 1 second the VoIP application starts and VoIP data links appear,
because dataLinkVisualizer is on. After 5 seconds the videoPedestrian sends
request to the videoStreamServer and the application starts.
In the Module view mode we can follow the progress. The client send the request,
and in response the server starts the video stream.
[gif: video stream start]
-->

Sources: <a srcfile="visualization/omnetpp.ini" />, <a srcfile="visualization/VisualizationE.ned" />
