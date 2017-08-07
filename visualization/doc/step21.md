@page step21 Step 21 - Displaying transport connections

@nav{step20,step22}

@section s21goals Goals

In this step we show transport connections. To establish a link, TCP uses 
three-way handshake. It's open until one of the participants initiate closing the 
connection. By displaying these, it will be easy to understand which hosts are the 
participants of a transport connection.

In this step we show how to visualize transport layer connections, such as TCP.
The transport connection visualizer indicates the two end-points of a connection.

<!--
Ebben a lépésben a nyitott hálózati kapcsolatokat jelenítjük meg.
A TCP kapcsolatok háromfázisú kézfogással épülnek ki. Ezután amíg az egyik fél 
nem kezdeményezi a kapcsolat lezárását, addig nyitva marad. A megjelenítésükkel 
könnyen átlátható lesz, hogy melyik nyitott kapcsolatnak melyik node-ok a résztvevői.
-->

@section s21model The model

@section s21results Results

Sources: @ref omnetpp.ini, @ref VisualizationNetworks.ned
