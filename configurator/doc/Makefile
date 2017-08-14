#
# Definitions
#
DOXYGEN=doxygen
OUTDIR=../html

#
# Targets
#
all:
	rm -rf $(OUTDIR)
	mkdir $(OUTDIR)
	rm -f ../omnetpp.uncommented.ini
	cat ../omnetpp.ini | grep -v "#!" >> ../omnetpp.uncommented.ini
	$(DOXYGEN)
	rm -f ../omnetpp.uncommented.ini
	cp *.gif *.mp4 *.png *.svg $(OUTDIR)
	cp -r images $(OUTDIR)
clean:
	-rm -rf $(OUTDIR)
