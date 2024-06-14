#!/bin/bash
# Helper function to automate git pushes

git status
echo ""
if [ $1 ]; then
    if [ $2 ]; then
        git add $2
    else
        # git add .
        echo "Live test-->"
    fi
    echo "$1-----$2"
    # git commit -m "$1"
    # git push
else
    echo "No commit message"
fi 