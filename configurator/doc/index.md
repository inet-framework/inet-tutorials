---
layout: page
title: IPv4Configurator Tutorial
tutorial: Configurator
hidden: true
---

This tutorial will show how to use the `IPv4NetworkConfigurator` module to configure IP addresses and routing tables in wired and wireless IPv4 networks in the INET framework.
The tutorial is organized into multiple steps, each corresponding to a simulation model. The steps demonstrate how to accomplish certain
tasks with the `IPv4NetworkConfigurator`.

This is an advanced tutorial, and assumes that the reader is familiar with creating and running simulations in OMNeT++ and INET. If that wasn't the case,
the <a href="https://omnetpp.org/doc/omnetpp/tictoc-tutorial/"
target="_blank">TicToc Tutorial</a> is a good starting point to get familiar with OMNeT++. The <a
href="../../../doc/walkthrough/tutorial.html" target="_blank">INET Walkthrough</a> is an introduction to INET and how to work with protocols.
The <a href="../../wireless/doc" target="_blank">Wireless Tutorial</a> is another advanced tutorial, and deals with wireless features of the INET framework. There is a comprehensive description of `IPv4NetworkConfigurator's` features in the <a href="https://omnetpp.org/doc/inet/api-current/neddoc/index.html?p=inet.networklayer.configurator.ipv4.IPv4NetworkConfigurator.html" target="_blank"><tt>IPv4NetworkConfigurator</tt> NED documentation</a>
in the INET reference.

For additional information, the following documentation should be useful:

- <a href="https://omnetpp.org/doc/omnetpp/manual/usman.html" target="_blank">OMNeT++ User Manual</a>
- <a href="https://omnetpp.org/doc/omnetpp/api/index.html" target="_blank">OMNeT++ API Reference</a>
- <a href="https://omnetpp.org/doc/inet/api-current/inet-manual-draft.pdf" target="_blank">INET Manual draft</a>
- <a href="https://omnetpp.org/doc/inet/api-current/neddoc/index.html" target="_blank">INET Reference</a>

All simulation models are defined in the omnetpp.ini file as separate configurations. The configurations use a number of different networks,
defined in separate .NED files.

## Contents

<!-- find active submenu -->
{% for item in site.data.menu %}
  {% if item.submenu %}
    {% if page.tutorial == item.name %}{% assign activeSubmenu = item.submenu %}{% endif %}
  {% endif %}
{% endfor %}

<ul>
{% if activeSubmenu  %}
  {% for submenuitem in activeSubmenu %}
    {% unless submenuitem.separator %}
<li><a href="{{ submenuitem.link }}">{{ submenuitem.name }}</a></li>
    {% endunless %}
  {% endfor %}
{% endif %}
</ul>