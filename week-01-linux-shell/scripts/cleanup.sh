#!/bin/bash

LOG_DIR=~/logs

mkdir -p $LOG_DIR

find $LOG_DIR -type f -name "*.log" -mtime +7 -delete

echo "Old log files deleted successfully"
