#!/bin/bash

# Get the current directory
CURRENT_DIR=$(pwd)

# Open a new gnome-terminal window and run the command to display docker-compose logs
gnome-terminal -- bash -c "cd $CURRENT_DIR; docker-compose logs -f; exec bash"