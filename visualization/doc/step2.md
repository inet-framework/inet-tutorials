@page step2 Step 2 - Showing Boston downtown

@nav{step1,step3}

@section s2goals Goals
In network simulation it's often desirable to have a real world context. Although displaying a map
doesn't directly affect the outcome of the simulation, nevertheless it can still facilitate understanding.
In this step we display a street map of downtown Boston.

@section s2model The model
<!--
Here is the NED file of the network:
@dontinclude VisualizationNetworks.ned
@skip network VisualizationA
@until ####

This is a very simple model, contains an <tt>IntegratedVisualizer</tt> and an <tt>OsgGeographicCoordinateSystem</tt> submodule. The visualizer is responsible all of phenomenon, that we can see on the playground.
We can change their parameters in the <tt>omnetpp.ini</tt> file.
The ini file contains the parameters of these submodules.

@dontinclude omnetpp.ini
@skipline [Config Visualization01]
@until ####

In this part of the file, there are some coordinate system and the scene visualizer parameters. 
<i>Coordinatesystem</i> parameters set the longitude, latitude and altitude coordinate of the playground origin and the heading of it.
<tt>SceneVisualizer</tt> parameters set the visualizer type. 
We add a map to the simulation with the <tt>mapFile</tt> parameter. 
Besides these options we turn off the playground shading and configure the opacity and the color of the playground. 
We need to make the playground transparent, because it's over the map, and later if we place a node, we can't see the map under of the area from the origin to the node. 
With the <tt>axisLength</tt> parameter we can change the axis' size on the map.
-->
@section s2results Results

<img src="step2_map_without_axis.png" width="850">
<!--
When we start the simulation we can see what we expected. 
There's the map of Boston downtown with axis.

Using the mouse, we can move and rotate the camera. 
If we hold down the left mouse button, we can navigate on the map. 
Holding down the mouse wheel or both mouse button at the same time we can rotate the camera, and if we scroll up and down we can zoom out and in. 
If we click with the right mouse button, we can change between camera modes.
In the top right corner of the playground, we can change between 3D Scene view mode and Module view.
-->

Sources: @ref omnetpp.ini, @ref VisualizationNetworks.ned
