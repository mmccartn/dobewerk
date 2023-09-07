#!/bin/bash

# Usage:
# ./dq-scrape.sh ./scratch/data

set -e
first_did=0
last_did=80000
url=https://dobequest.org/profile.php?DOGID=
for (( id=$first_did; id<=$last_did; id++ )); do
   wget --directory-prefix=$1 "${url}${id}"
done