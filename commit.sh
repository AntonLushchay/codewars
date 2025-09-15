#!/bin/bash

# Check if two arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: npm run commit -- <name> <level>"
    exit 1
fi

# Stage all changes
git add .

# Count the number of solved problems
m=$(find . \( -name "script.js" -o -name "script.ts" \) -type f | wc -l)

# Commit with the provided message and the count
git commit -m "+$1 $2kyu. Total: $m"
