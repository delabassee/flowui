# Fn Flow  UI  

Visualisation tool for showing what's going on with Fn Flow in real time. 

## June 2019 notes


	


### Run locally (port 1979)

```
npm install
node server.js
npm run-script run
```

And then build the image `docker build -t flowui .`	


```
GraphTimeline.jsx:fetchApps() 
	/fn/v2/apps -> http://localhost:8080/v2/apps

GraphTimeline.jsx:fetchFuncId(appId)
	-> http://localhost:8080/v2/fns?app_id=01D6S7HA7XNG8G00GZJ0000002

GraphTimeline.jsx:selectNode(node)...
	node.funcName = this.state.funcId.get(node.function_id);

GraphTimeline.jsx:render()


NodeDetail.jsx:nodeTitle()

```

## Running with Docker

Assuming you are already running Fn Server on port 8080 and Flow Server (previously known as 'Completer') on port 8081 in Docker.

Grab the internal Docker network IP 
```bash
export DOCKER_LOCALHOST=$(docker inspect --type container -f '{{.NetworkSettings.Gateway}}' functions)
```
and run the Flow UI image.
```bash 
docker run -p3000:3000 -e API_URL=http://$DOCKER_LOCALHOST:8080 -e COMPLETER_BASE_URL=http://$DOCKER_LOCALHOST:8081 fnproject/flow:ui
```
The Flow UI should be available on http://localhost:3000.

## Running locally 

You need nodejs (tested with 8.5.0).

This assumes that the Flow Server (pka 'Completer') is running on 127.0.0.1:8081 and the corresponding Fn Server is running on 8080.

```bash
 npm install 
 npm run-script run 
```

The Flow UI should be available on http://localhost:1979.


## Notes
 
The Flow UI should start visualising the first Fn Flow function that starts automatically, and will list any Fn Flow functions that have started since the UI was opened. 
 

