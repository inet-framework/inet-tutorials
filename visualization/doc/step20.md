@page step20 Step 20 - Showing packet drops

@nav{step19,step21}

@section s20goals Goals

In packet switching networks sometimes packets may fail to reach their destination.
WIP

In this step we visualize packet drops. Packet drops occure when one or more 
packets of data travelling across a computer network fail to reach their destination.
<! this is a lost packet, not a dropped one> 
Packet drops are typically caused by network congestion but it can be caused by 
a number of other factors such as radio signals that are too weak due to distance, 
natural or artifical obstacles in the environment or faulty networking hardware. 
Visualizing packet drops helps to put wireless access points to the right place.

<! can we simulate faulty networking hardware?>

We can visualize when network nodes drop packets, with a packet dropping animation.
It can be convenient to see at a glance that packets are being dropped at certain nodes in the network.

<!--
A hálózatokban előfordulhat hogy a csomagok eldobódnak.

Ebben a lépésben a packet dropot vizualizáljuk.
A packet drop akkor történik, amikor egy vagy több csomag nem ér oda a célhoz. 
Általában hálózati torlódás okozza, de gyenge rádiójel vagy hibás hw is okozhatja. 
Ha természeti vagy mesterséges akadályok vannak a környezetben, akkor segítheti a
wireless AP-k megfelelő helyre telepítését, ha látjuk, hogy hol történik csomag vesztés.
-->

@section s20model The model

@section s20results Results

Sources: @ref omnetpp.ini, @ref VisualizationNetworks.ned
