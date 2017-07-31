---
layout: page
title: Step 3 - Automatically assigning IP addresses to a subnet from a given range
tutorial: Configurator
---

## Goals

Complex networks often contain several subnetworks, and the user may want to assign specific IP address ranges for them.
This can make it easier to tell them apart when looking at the IP addresses.
This step demonstrates how to assign a range of IP addresses to subnets.

## The model

This step uses the <i>ConfiguratorA</i> network, as in the previous two steps.
One switch and the connected hosts as a group will be on the same subnet, and there are three such groups in the network.


The configuration is the following:

<p><pre class="snippet" src="../omnetpp.uncommented.ini" from="Step3" until="####"></pre></p>

This time the XML configuration is supplied in an external file (step3.xml), using the xmldoc function:

@include step3.xml

<pre src="../step3.xml" from="<config>" until="</config>"></pre>

- The first three lines assign IP addresses with different network prefixes to hosts in the three different subnets.

- The `towards` selector can be used to easily select the interfaces that are connected towards a certain host (or set of hosts using wildcards).
The next 3 entries specify that each router's interface that connects to the subnet should belong in that subnet.

- The last entry sets the network prefix of interfaces of all routers to be 10.1.x.x. 
The routers' interfaces facing the subnets were assigned addresses by the previous rules, so this rule only effects the interfaces facing the other
routers. These seven rules assign addresses to all interfaces in the network, thus a default rule is not required.

The same effect can be achieved in more than one way. Here is an alternative XML configuration (step3alt1.xml) that results in the same address assignment:

@include step3alt1.xml

The `among` selector selects the interfaces of the specified hosts towards the specified hosts (the statement `among="X Y Z"` is the same as
`hosts="X Y Z" towards="X Y Z"`).

Another alternative XML configuration is the following:

@include step3alt2.xml

This assigns an address to one host in each of the three subnets. It assigns addresses to the interfaces of the routers facing the other routers, and includes a copy of the default
configuration. Because `assignDisjunctSubnetAddresses=true`, the configurator puts the unspecified hosts, and the subnet facing
router interfaces into the same subnet as the specified host.

## Results

The assigned addresses are shown on the following image.

<img class="screen" src="step3address.png" width="850px">

The addresses are assigned as intended.
This is useful because it is easy to recognize which group a node belongs to just by looking at its address (e.g. in the logs.)
