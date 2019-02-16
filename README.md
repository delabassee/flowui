# Fn Flow  UI  


This is a simple visualisation tool for showing what's going on with Fn Flow in real time. 

## Running with Docker

Assuming you are already running Fn Server on port 8080 and Flow Server (aka Completer) on port 8081 in Docker.

Grab the internal docker network IP 
```bash
export DOCKER_LOCALHOST=$(docker inspect --type container -f '{{.NetworkSettings.Gateway}}' functions)
```

```bash 
docker run -p3000:3000 -e API_URL=http://$DOCKER_LOCALHOST:8080 -e COMPLETER_BASE_URL=http://$DOCKER_LOCALHOST:8081 fnproject/flow:ui
```

## running locally 

You need nodejs (tested with 8.5.0).

This assumes that the Flow Server (aka Completer) is running on 127.0.0.1:8081 and the corresponding Fn Server is running on 8080.

```bash
 npm install 
 npm run-script run 
```

The Flow UI should be available on http://localhost:1979.


## Notes
 
 The Flow UI should start visualising the first Fn Flow function that starts automatically, and will list any Fn Flow functions that have started since the UI was opened. 
 

