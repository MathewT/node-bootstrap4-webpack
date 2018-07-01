#! /bin/bash


docker run -p 8080:8080 -v "$(pwd)"/src:/usr/src/app/src  mthomas/node-webpack