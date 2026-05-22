#!/bin/bash

SOURCE=~/Documents
DEST=~/backup

mkdir -p $DEST
cp -r $SOURCE $DEST

echo "Backup completed successfully"
