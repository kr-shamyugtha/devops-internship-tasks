#!/bin/bash

usage=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')

if [ $usage -gt 80 ]
then
echo "WARNING: Disk usage above 80%"
else
echo "Disk usage normal"
fi
