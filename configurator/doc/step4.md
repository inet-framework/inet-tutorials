---
layout: page
title: Step 4 - Fully automatic static routing table configuration
tutorial: Configurator
---

## Goals

Just as with IP addresses, in many cases the configurator sets up routes in a network properly without any user input.
This step demonstrates the default configuration for routing.

## The model

This step uses the same network as the previous steps, <i>ConfiguratorA</i>.

### Configuration

The configuration for this step in omnetpp.ini is the following:

@dontinclude omnetpp.uncommented.ini
@skip Step4
@until ####

A ping app in <i>host1</i> is configured to send ping packets to <i>host7</i>, which is on the other side of the network. Ping packets will be used throughout the tutorial to illustrate how packets are routed.

The <i>RoutingTableCanvasVisualizer</i> module (present in the network as a submodule of <i>IntegratedCanvasVisualizer</i>) can be used to visualize routes in the network.
Routes are visualized with arrows. In general, an arrow indicates an entry in the source host's routing table. It points
to the host that is the next hop or gateway for that routing table entry. The visualization is activated by setting the <i>RoutingTableVisualizer</i>'s <i>displayRoutingTables</i> parameter to <i>true</i>.
The set of routes to be visualized are selected with the visualizer's <i>destinationFilter</i> parameter.
All routes leading towards that set of destinationa are indicated by arrows.
The default setting is <tt>"*"</tt>, which means routes towards all destinations are visualized. The <tt>"*"</tt> setting visualizes all routes
going from every node to every other node, which can make the screen cluttered.
In this step the <i>destinationFilter</i> is set to visualize all routes heading towards <i>host7</i>. TODO: rewrite?

V2

The <i>RoutingTableCanvasVisualizer</i> module (present in the network as a submodule of <i>IntegratedCanvasVisualizer</i>) can be used to visualize routes in the network. Routes are visualized as arrows,
where an arrow represents a routing table entry of the source host. An arrow originates from the source host,
and points at the next hop of the routing entry. The set of routing tables to be visualized are selected with the visualizer's <i>nodeFilter</i> parameter, and the set of destinations is specified by the <i>destinationFilter</i> parameter. The visualizer displays the best matching routes for each destination as arrows, from each selected node's routing table. By default, routes from all nodes to all destinations are visualized. This can sometimes make the screen cluttered.

V3

The <i>RoutingTableCanvasVisualizer</i> module (present in the network as a submodule of <i>IntegratedCanvasVisualizer</i>) can be used to visualize routes in the network. The visualizer indicates how packets are routed with solid arrows that point from a source node to the next hop node, basically representing a routing table entry. By default, the best matching routing table entries towards all destinations from all nodes are visualized.

V4

The <i>RoutingTableCanvasVisualizer</i> module (present in the network as a submodule of <i>IntegratedCanvasVisualizer</i>) can be used to visualize routes in the network. The visualizer indicates how packets are routed with solid arrows that point from a source node to the next hop node, basically representing a routing table entry.
The visualizer displays the best matching (longest prefix) routing table entries towards each destination, from each node's routing table. By default, the set of routing tables and destinatons are all nodes, this selection can be narrowed with the visualizer's <i>nodeFilter</i> and <i>destinationFilter</i> parameters, respectively.

V5

The visualizer basically annotates network links with labeled arrows that connect source nodes to next hop nodes. The module visualizes those routing table entries that participate in the routing of a given set of destination addresses, by default the addresses of all interfaces of all nodes in the network. That is, it selects the best (longest prefix) matching routes for all destination addresses from each routing table, and shows them as arrows that point to the next hop. Note that one arrow might need to represent several routing entries, for example when distinct prefixes are routed towards the same next hop.

Routing table entries are represented visually by solid arrows. An arrow going from a source node represents a routing table entry in the source node's routing table.

V6

In INET, routes can be visualized by the <i>RoutingTableCanvasVisualizer</i> module, included in the network as a submodule of <i>IntegratedCanvasVisualizer</i>. The visualizer indicates how packets would be routed as solid arrows. An arrow represents a routing table entry in the source node's routing table, and points to the next hop address. 

The visualizer visualizes the routing table entries that best match a set of destination addresses. 

Common: The arrows are annotated with details of the routing table entry, such as destination address, next hop address and interface name. Also, an arrow might represent multiple routes. Routes towards host7 are visualized.

V7

In INET, routes can be visualized using the <i>RoutingTableVisualizer</i> module, which is included in the network as a submodule of <i>IntegratedCanvasVisualizer</i>. <i>RoutingTableVisualizer</i> displays IPv4 routes are solid arrows. An arrow represents a routing table entry of the source node, and points from said node to the next hop node of the routing table entry. Those routing table entries are displayed, that best match a set of destination addresses. They are visualized from a set of source nodes.

The visualization can be activated by setting the visualizer's <i>displayRoutingTables</i>
parameter to <i>true</i>. By default, the set of source and destination nodes are all nodes in the network. This selection can be narrowed with the visualizer's <i>nodeFilter</i> and <i>destinationFilter</i> parameter.

Here, the destinationfilter is set to host7 so routes from all hosts towards host7 are visualized.

The IP address assignment is fully automatic, and the resulting addresses should be the same as in Step 1.

### Configurator routing parameters

The configurator's parameters concerning static routing are the following:

- <i>addStaticRoutes = default(true)</i>: Add static routes to the routing table of all nodes in the network, 
with routes leading to all destination interfaces.
- <i>addDefaultRoutes = default(true)</i>: Add a default route if all routes from a node go through the same gateway.
This is often the case with hosts, which usually connect to a network via a single interface. This parameter
is not used if <i>addStaticRoutes = false</i>.
- <i>addSubnetRoutes = default(true)</i>: Optimize routing tables by adding routes towards subnets instead of individial interfaces. 
This is only used where applicable, and not used if <i>addStaticRoutes = false</i>.
- <i>optimizeRoutes = default(true)</i>: Optimize routing tables by merging entries where possible. Not used if <i>addStaticRoutes = false</i>.

The configuration for this step didn't set any of these parameters, thus the default values will take effect.
Additionally, the <i>dumpTopology</i>, <i>dumpLinks</i> and <i>dumpRoutes</i> parameters are set to true in the <i>General</i> configuration.
These instruct the configurator to print to the module output the topology of the network, the recognized network links, and the routing tables of all nodes, respectively. Topology describes which nodes are connected to which nodes. Hosts that can directly reach each other (i.e. the next hop is the destination), 
are considered to be on the same link.

@dontinclude omnetpp.uncommented.ini
@skip General
@until ####

The <i>General</i> configuration also sets GlobalARP to keep the packet exchanges simpler. GlobalARP fills the ARP tables of all nodes in advance,
so when the simulation begins no ARP exchanges are necessary. The <i>**.routingTable.netmaskRoutes = ""</i> keeps the routing table modules from
adding netmask routes to the routing tables. Netmask routes mean that nodes with the same netmask but different IP should reach each other directly.
These routes are also added by the configurator, so netmaskRoutes is turned off to avoid duplicate routes.

## Results

The visualized routes are displayed on the following image:

<img class="screen" src="step4routes.png" width="850px">

Routes from all nodes to <i>host7</i> are visualized. Note that arrows don't go through switches,
because they are not the next hop. When routes are concerned, they are transparent L2 devices.

The routing tables are the following (routes visualized on the image above are highlighted):

<p>
<div class="include fit">
<pre class="monospace" style="background-color: transparent; border: 0px; margin-bottom: 0px">
Node ConfiguratorB.host0 (hosts 1-2 similar)
-- Routing table --
Destination      Netmask          Gateway          Iface           Metric
10.0.0.0         255.255.255.248  *                eth0 (10.0.0.1) 0
<span class="marker">*                *                10.0.0.4         eth0 (10.0.0.1) 0</span>

Node ConfiguratorB.host3 (hosts 4-5 similar)
-- Routing table --
Destination      Netmask          Gateway          Iface           Metric
10.0.0.8         255.255.255.248  *                eth0 (10.0.0.9) 0
<span class="marker">*                *                10.0.0.10        eth0 (10.0.0.9) 0</span>

Node ConfiguratorB.host6 (hosts 7-8 similar)
-- Routing table --
Destination      Netmask          Gateway          Iface            Metric
<span class="marker">10.0.0.32        255.255.255.248  *                eth0 (10.0.0.34) 0</span>
<i></i>*                *                10.0.0.33        eth0 (10.0.0.34) 0

Node ConfiguratorB.router0
-- Routing table --
Destination      Netmask          Gateway          Iface            Metric
10.0.0.18        255.255.255.255  *                eth1 (10.0.0.17) 0
10.0.0.22        255.255.255.255  *                eth2 (10.0.0.21) 0
10.0.0.25        255.255.255.255  10.0.0.22        eth2 (10.0.0.21) 0
10.0.0.0         255.255.255.248  *                eth0 (10.0.0.4)  0
<span class="marker">10.0.0.32        255.255.255.248  10.0.0.22        eth2 (10.0.0.21) 0</span>
10.0.0.0         255.255.255.224  10.0.0.18        eth1 (10.0.0.17) 0

Node ConfiguratorB.router1
-- Routing table --
Destination      Netmask          Gateway          Iface            Metric
10.0.0.17        255.255.255.255  *                eth0 (10.0.0.18) 0
10.0.0.22        255.255.255.255  10.0.0.25        eth2 (10.0.0.26) 0
10.0.0.25        255.255.255.255  *                eth2 (10.0.0.26) 0
10.0.0.8         255.255.255.248  *                eth1 (10.0.0.10) 0
<span class="marker">10.0.0.32        255.255.255.248  10.0.0.25        eth2 (10.0.0.26) 0</span>
10.0.0.0         255.255.255.224  10.0.0.17        eth0 (10.0.0.18) 0

Node ConfiguratorB.router2
-- Routing table --
Destination      Netmask          Gateway          Iface            Metric
10.0.0.18        255.255.255.255  10.0.0.26        eth0 (10.0.0.25) 0
10.0.0.21        255.255.255.255  *                eth2 (10.0.0.22) 0
10.0.0.26        255.255.255.255  *                eth0 (10.0.0.25) 0
10.0.0.8         255.255.255.248  10.0.0.26        eth0 (10.0.0.25) 0
<span class="marker">10.0.0.32        255.255.255.248  *                eth1 (10.0.0.33) 0</span>
10.0.0.0         255.255.255.224  10.0.0.21        eth2 (10.0.0.22) 0
</pre>
</div>
</p>

The * for the gateway means that the gateway is the same as the destination. Hosts have a routing table entry to reach other nodes on the same subnet directly. They also have a default route with the router as
the gateway for packets sent to outside-of-subnet addresses. Routers have three rules in their routing tables for reaching the other routers,
specifically, those interfaces of the other routers that are not facing the hosts.

Below is an animation of <i>host1</i> pinging <i>host7</i>.

<img src="step4_new_4.gif" width="850px">
<!--TODO delete-->

<p><video autoplay loop controls onclick="this.paused ? this.play() : this.pause();" src="Step4_2_cropped.mp4" width="850" height="560"></video></p>
<!--internal video recording playback speed 1.38 animation speed none
zoom level 0.77 crop: 30 70 150 80-->