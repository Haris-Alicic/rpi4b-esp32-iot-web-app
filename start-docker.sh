#!/bin/bash

# Get the current directory
CURRENT_DIR=$(pwd)

# Open a new gnome-terminal window and run docker-compose commands
gnome-terminal -- bash -c "cd $CURRENT_DIR; docker-compose up -d; docker-compose logs -f; exec bash"