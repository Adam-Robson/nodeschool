#!/bin/bash

# Function to print even numbers recursively
print_even_recursive() {
    local current=$1
    local end=$2
    local indentation=$3

    # Base case: if current exceeds end, return
    if [ $current -gt $end ]; then
        return
    fi

    # Print current number with indentation if even
    if [ $((current % 2)) -eq 0 ]; then
        echo "${indentation}${current}"
    fi

    # Recursive call for the next number
    print_even_recursive $((current + 1)) $end "${indentation} "
}

# Declare a function named main
main() {
    # Call the print_even_recursive function with appropriate parameters
    print_even_recursive $1 $2 ""
}

# Print the value of $FUNCNAME, which is the name of the current function
echo "main"

# Call the main function with positional parameters
main $@
