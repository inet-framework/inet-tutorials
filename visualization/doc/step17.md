---
layout: page
title: Step 17. Showing active network routes
tutorial: Visualization
---

## Goals

In this step we enable displaying active network routes for the videostream. 
With this visualizer, we can verify whether the videostream packets arrived at the 
destination's UDP client application. In network nodes, applications handle the 
UDP based traffic, for example video stream. <! this sentence seems trivial>
When an incoming video stream packet is passed up from the destination's network layer, the
network route becomes active between the source and the destination node.<! this sentence should belong in the model section> 

<!--
Ebben a lépésben az aktív hálózati útvonalakat jelenítjük meg.
Az eszközökben alkalmazások kezelik a TCP, illetve UDP alapú forgalmat, mint
pl a videoStream-et vagy a VoIP-ot. Amikor a video vagy VoIP csomag elhagyja 
a fogadó eszközben a hálózati réteget, a két eszköz között aktívvá válik 
a hálózati útvonal. Ezzel a visualizer-rel megnézhetjük, hogy a csomag 
eljut-e a célállomás megfelelő alkalmazásához.
-->

## The model

<!--
Firstly we have to edit the configurator. We make an xml file (in this case configurationD.xml),
to set the static ip addresses. Static addresses are the routers' interfaces and
the videoStreamServer's IP address.

@dontinclude configurationD.xml
@skip config
@until /config

The routers assign addresses to wireless nodes via DHCP.
To that we have to turn on the hasDHCP parameter. Then we adjust the
other settings of that service. We have to set which interface assign the addresses.
In our simulation it's the "eth0" on both router. MaxNumClients parameter adjusts
maximum number of clients (IPs) allowed to be leased (in our simulation we set to 10)
and numReservedAddresses define number of addresses to skip
at the start of the network's address range. To gateway we add that interface's IP address,
that run the DHCP service. Finally we have to add the lease time.
We can adjust the start time, but usually we want that, DHCP service run the
beginning, so we leave it on 0s.

If we want RIP routing protocol work, we have to set true the routers' hasRIP parameter,
and set to false the configurator.optimizeRoutes parameter.

The configuration:
@dontinclude omnetpp.ini
@skipline [Config Visualization15]
@until ####
-->

## Results

<img src="step17_networkroute_3d.gif">

Sources: <a srcfile="../omnetpp.ini" />, [VisualizationNetworks.ned](../VisualizationNetworks.ned)
