#!/bin/sh
DIR="$( cd "$( dirname "$0" )" && pwd )"
sass --cache-location /var/tmp/.sass-cache --watch $DIR/../sass:$DIR/../public/css/compiled
