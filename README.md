# node-webpack

## Build

```bash
docker build . -t mthomas/node-webpack .
```

## Run

```bash
docker run -p 8080:8080 -v "$(pwd)"/src:/usr/src/app/src  mthomas/node-webpack
```