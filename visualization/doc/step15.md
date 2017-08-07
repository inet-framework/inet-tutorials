@page step15 Step 15 - Showing configured routing tables

TODO: Showing configured routes

TODO: Add RIP to this step ?

@nav{step14,step16}

@section s15goals Goals

We can visualize IP routes as set up by the configurator.
We can see how routes are set up without examining routing tables, just by looking at the network.
In this step we show routes from all nodes leading towards <tt>videoStreamServer</tt>.

NOTE/TODO: seems trivial

<!--
Csomagkapcsolt hálózatokban a routing határozza meg a csomagtovábbítást, azaz az IP címmel ellátott
csomagok átvitelét a forrás irányából a cél irányába, köztes node-okon keresztül. 
A routing process általában a routing tábla alapján továbbítja a célok felé a csomagokat.
A routing tábla az egyes route-okról tartalmaz információt. 
-->

<!--
After so many steps we extend our network. We add a pedestrian, who watch a video stream in the park.
To this we need a Server to another network. To find ways between video stream server and the
pedestrian, who want to watch video stream, we need a router.<br>
We want to see how can the devices reach the server. To this, in this step we will show routing table entries.
-->

@section s15model The model

<!--
The video streamed by the videoStreamserver, that connects to the router0 through switch0.
We need the switch, because later we want to add more nodes to that subnetwork.

Here is the ned file, that contains the changes:
@dontinclude VisualizationNetworks.ned
@skip network VisualizationC
@until ####

We need to place the new network nodes on the map. To this we use the usual mobility parameters.
Then we adjust the video stream server and client application. On the server side we have to
set the length of the video packets and the full stream, the port to listen on, and the
interval between sending packets.<br>
On the client side we need to add a local port, and the server port and address. Optionally we
can set when the application starts.<br>
The video stream application works as follows:
the client send a request to the given port of the server. Then the server starts the
stream to the client's address. The client's serverPort parameter and the server's localPort parameter
must match.

After setting up communication, we need to configure the visualizer. We have to add
the module path where the visualizer subscribes for routing table signals, and the
route destination(s) in the destinationFilter parameter. In this case we want to
see the routes towards the videoStreamServer. In addition we can change the default
 line style, width and color to make the routes more visible.

The configuration:
@dontinclude omnetpp.ini
@skipline [Config Visualization13]
@until ####
-->

@section s15results Results

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

Sources: @ref omnetpp.ini, @ref VisualizationNetworks.ned
