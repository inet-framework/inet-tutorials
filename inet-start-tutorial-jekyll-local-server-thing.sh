#!/bin/bash

CURRENT_DIR=$(pwd)
echo $CURRENT_DIR
PORT_NO=4001

cd ../bin
./start_local_server $PORT_NO $CURRENT_DIR
