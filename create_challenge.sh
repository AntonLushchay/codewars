#!/bin/bash

# Check if two arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: npm run create -- <level> <name>"
    exit 1
fi

LEVEL=$1
NAME=$2
DIR="TS/${LEVEL}kyu/${NAME}"

# Create the directory structure
mkdir -p "$DIR"

# Create the files
touch "${DIR}/script.ts"
touch "${DIR}/script.test.ts"

echo "Successfully created ${DIR}/script.ts and ${DIR}/script.test.ts"
