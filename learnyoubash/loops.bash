# #!/usr/bin/env bash

   i=$1
   while [[ $i -lt $2 ]]; do
     [ ! $(( $i % 2 )) -eq 0 ] || echo $i
     i=$(( $i + 1 ))
   done

# Alternative answer
# #!/bin/bash
# Check if exactly two positional parameters are provided
# if [ "$#" -ne 2 ]; then
#    echo "Usage: $0 <start> <end>"
#    exit 1
# fi

# Assign positional parameters to variables
# start=$1
# end=$2

# Loop through the range of numbers and print even numbers
#for ((i=start; i<=end; i++)); do
#    if ((i % 2 == 0)); then
#        echo "$i"
#    fi
#done




