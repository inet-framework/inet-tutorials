---
layout: page
title: Step 8. Configuring a mixed wired/wireless network
tutorial: Configurator
---

## Goals

This step demonstrates routing table configuration in a mixed wired/wireless network.
This step consists of two parts:

- **Part A**: Determining members of wireless networks with the `<wireless>` element
- **Part B**: Determining members of wireless networks by SSID

## Part A: Using the \<wireless\> element

The configurator assumes that interfaces of wireless nodes in the same wireless
network can reach each other directly. It can determine which nodes belong
to a wireless network in two ways:

- It looks at the `default_ssid` parameter in nodes' agent submodule.
  Nodes with the same SSID are assumed to be in the same wireless network.
- Members of wireless networks can be specified by the `<wireless>` element
  in the XML configuration. In the `<wireless>` element, the `hosts` and
  `interfaces` selector attributes can be used to specify members.

Note that nodes need to use the same radio medium module to be in the same wireless network.

### Configuration

This step uses the `ConfiguratorC` network defined in <a srcfile="configurator/ConfiguratorC.ned"/>.
The network is displayed on the following image.

<img class="screen" src="step8network.png" width="850px">

The `ConfiguratorC` network extends `ConfiguratorB` by adding two wireless LANs,
`area1lan3` and `area3lan3`. The additional LANs consist of an `AccessPoint`
and three `WirelessHosts`.

The default SSID settings of all wireless nodes is `"SSID"`. By default,
the configurator would put them in the same wireless network, and assume that
they can all reach each other directly. This would be reflected in the routes,
hosts in `area1lan3` would reach hosts in `area3lan3` directly.
This is obviously wrong, because they are out of range of each other.
The two LANs need to be in two different wireless networks.

Here is the configuration for this step in omnetpp.ini:

<p><pre class="snippet" src="../omnetpp.uncommented.ini" from="Step8" until="####"></pre></p>

A wireless host in area 1 is configured to ping a wireless host in area 3,
which helps in visualizing routes.

There is a setting in the `General` configuration pertaining to wireless networks:
the control bit rate of all wireless nodes is set to 54 Mbps for faster ACK transmissions.

<p><pre class="snippet" src="../omnetpp.uncommented.ini" from="General" until="####"></pre></p>

The XML configuration in step8a.xml is the following:

<p><pre class="snippet" src="../step8a.xml"></pre></p>

The XML configuration uses the same hierarchical addressing scheme as in Step 7.
The two wireless LANs are specified to be in separate wireless networks.
Note that the wireless interfaces of the access points also belong to the wireless networks.

### Results

The addresses and routes are indicated on the following image. Routes leading towards
hosts `area3lan3` are visualized.

<img class="screen" src="step8a_2.png" width="850px" onclick="imageFullSizeZoom(this);" style="cursor:zoom-in">

Wireless hosts connect to the router through the access points.
The access points are L2 devices, similar to switches, so they are transparent for
the routing table visualizer arrows. Wireless hosts get associated with their
corresponding access points before they can communicate with the rest of the network.

On the following video, `area1lan3host2` pings `area3lan3host2`.
Transmissions are sent to all wireless nodes, but only those in communication range
can receive them correctly (i.e. nodes in the same LAN).

<p><video autoplay loop controls onclick="this.paused ? this.play() : this.pause();" src="Step8A_1_cropped.mp4" width="850px" height="280"></video></p>
<!--internal video recording playback speed 2 animation speed none crop 210 360 50 30-->

This is how the routes would look like if the XML configuration didn't contain
the `<wireless>` elements:

<img class="screen" src="step8fullmesh_2.png" width="850px" onclick="imageFullSizeZoom(this);" style="cursor:zoom-in">

There are no routes visualized between the `backbonerouter` and `area3router`,
because routes towards `area3lan3` go via `area1router`. `Area3lan3` can be reached
from the `backbonerouter` in two ways:

- `area1router` &#8594; `area1AP` &#8594; `area3lan3` (`area1AP` reaches `area3lan3` directly
  since they are assumed to be in the same wireless network)
- `area3router` &#8594; `area3AP` &#8594; `area3lan3`

In both ways, `area3lan3` is two hops away from the `backbonerouter`.
Routes are configured according to hop count, and the configurator chose the first way.

## Part B - Using SSID

In this part, the SSID is used to put the two wireless LANs in two different wireless networks.

### Configuration

The configuration for this part extends Part A. The configuration in omnetpp.ini is the following:

<p><pre class="snippet" src="../omnetpp.uncommented.ini" from="Step8B" until="####"></pre></p>

The XML configuration in step8b.xml (displayed below) is the same as the XML configuration for Part A, except there are no `<wireless>` elements that defined wireless networks.
They are not needed because different SSIDs are configured for the members of the two wireless LANs.

<p><pre class="snippet" src="../step8b.xml"></pre></p>

### Results

The results are the same as in the previous part. The two wireless LANs are
considered to be different wireless networks.

Sources: <a srcfile="configurator/omnetpp.ini"/>, <a srcfile="configurator/ConfiguratorC.ned"/>

## Discussion

Use <a href="https://github.com/inet-framework/inet-tutorials/issues/2" target="_blank">this page</a>
in the GitHub issue tracker for commenting on this tutorial.
