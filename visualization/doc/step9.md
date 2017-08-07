@page step9 Step 9 - Showing wifi association

@nav{step8,step10}

@section s9goals Goals

In infrastructure mode, wireless nodes have to be associated with an access point to be able to communicate.
The association may change over time, or at any given time there might be several access points for a
wireless node to associate with. It's useful to tell which node is associated with which access point just by looking at its icon.
In this step we enable displaying the association between wireless nodes and access points.

TODO/NOTE: its easier to tell which nodes are associated with which access points if its visualized. e.g. dont have to use the inspector window...

@section s9model The model
<!--
The pedestrians are in the access point's communication range, so they can associate with that.

In the ini file we need to set only the <tt>Ieee80211Visualizer</tt>'s parameters.
This visualizer will display us information about the association.
We can set which nodes and which interfaces are considered, like at <tt>InterfaceTableVisualizer</tt>.

Here is the appropriate configuration:

@dontinclude omnetpp.ini
@skipline [Config Visualization07]
@until ####
-->
@section s9results Results

<img src="step09_wifi_assoc_2d.gif">
<img src="step7_result2.gif">
<!--
In Module view mode we can monitor the association process, we see all messages between the nodes.
When a pedestrian send an <tt>Assoc</tt> message, the access point in its communication range receive that, and a signal sign appear above the access point.
In response to this <tt>Assoc</tt> message, the access point reply with an <tt>AssocResp-</tt> message.
If the association is successful it's <tt>AssocResp-OK</tt> and a signal sign appear above that pedestrian who wants to associate with the access point.

In 3D view mode as a result of the association process the signal sing appears above the appropriate network node.
-->

Sources: @ref omnetpp.ini, @ref VisualizationNetworks.ned
