#!/bin/sh
DIR="$( cd "$( dirname "$0" )" && pwd )"
coffee -cwo $DIR/../public/js $DIR/../coffeescript &
coffee -cw $DIR/../test/jasmine/spec
