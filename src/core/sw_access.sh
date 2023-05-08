#!/bin/bash

# Prompt the user to enter an ID to search for
#echo "Enter the ID to search for:"
#read search_id
# Get the id value from the command line argument
search_id=$1

# Search for the ID in the dorm-list.json file and extract the corresponding IP address
ip=$(cat /media/srv/data/diplom/web_sw_test_with_datatables/src/core/mocks/dorm-list.json | jq --arg search_id "$search_id" '.[].floors[].switches[] | select(.id == $search_id) | .ip')

# Check if the IP was found
if [ -z "$ip" ]; then
  echo "ID not found"
  exit 1
fi

# Open a screen session and execute telnet command with the IP address
screen -dmS telnet-session bash
#echo -ne '\n'
screen -r telnet-session -X stuff "Telnet session started with switch at IP $ip"$(echo -ne '\015')
#echo "Telnet session started with switch at IP $ip"
#telnet $ip
screen -r telnet-session
