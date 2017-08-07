@page step14 Step 14 - Displaying statistic

@nav{step13,step15}

@section s14goals Goals

We need precise data to monitor working of simulation. These can
be obtained from statistics. In this step we make statistic about VoIP playout delay,
this shows information about VoIP communication.

We can indicate certain statistics about nodes and transmissionsin real time, while the simulation is running.

We can indicate the last value of a statistic for certain nodes as the simulation is running.
This is useful because we can observe how statistics change in real time, not just when analyzing results.
In this step we display the statistic about VoIP playout delay.

@note When a router receives a Real-Time Protocol (RTP) audio stream for Voice over IP (VoIP),
it must compensate for the jitter that is encountered. The mechanism that handles this function
is the playout delay buffer. The playout delay buffer must buffer these packets and then play
them out in a steady stream to the digital signal processors (DSPs) to be converted back
to an analog audio stream. The playout delay buffer is also sometimes referred to as the de-jitter buffer.

<!--
A hálózat működésének javításához/monitorozásához pontos adatokra van szükség.
Ezeket statisztikákból tudjuk kinyerni. Ebben a lépésben a playout delayről készítünk
statisztikát, amiből információt kapunk a VoIP kommunikációról.
-->

@section s14model The model

<!--
Communication is still the same. Pedestrian0 sends VoIP stream to pedestrian1 through accessPoint0.
We need to configure only the statisticVisualizer, because we set the adaptive playout true,
when we adjust the VoIP application in step 8. StatisticVisualizer keeps track of the last value of a statistic
for multiple network nodes. <br>
We can look, what kind of signals contain the VoIP application, accurately the SimpleVoIPReceiver,
because the SimpleVoIPSender doesn't contain any signal, so we have to set the
pedestrian1's udp application to the source path. Now we select the playout delay.
It has a signal name and a statistic name. The statisticVisualizer needs these data.
Optional we can set a prefix, that display a string as the prefix of the value. We can add other unit
to the statistic, it is also optional. Because the milliseconds represents better the delay, rather than
the seconds, we add that. We can change the text color, the background and the opacity. They are optional
settings too.

The configuration:
@dontinclude omnetpp.ini
@skipline [Config Visualization12]
@until ####
-->

@section s14results Results

<img src="step14_statistic_3d.gif">
<!--
When we start the simulation here's what happens:

After 1 second the VoIP application starts. After each talk spurt SimpleVoIPReceiver recalculate the playout
because of the adaptive playout setting. After that, the visualizer display the statistic above the pedestrian1
with that font and background color, that we set.
-->

Sources: @ref omnetpp.ini, @ref VisualizationNetworks.ned
