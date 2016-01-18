## Tags API

[ ![Codeship Status for rafaeljesus/tags-api](https://codeship.com/projects/fbd54500-9f70-0133-87e5-3206c6610001/status?branch=master)](https://codeship.com/projects/127890)
[![Docker Image Size](https://img.shields.io/imagelayers/image-size/rafaeljesus/tags-api/latest.svg)](https://hub.docker.com/r/rafaeljesus/tags-api/)
[![Docker Image Pulls](https://img.shields.io/docker/pulls/rafaeljesus/tags-api.svg)](https://hub.docker.com/r/rafaeljesus/tags-api/)
[![bitHound Overall Score](https://www.bithound.io/github/rafaeljesus/tags-api/badges/score.svg)](https://www.bithound.io/github/rafaeljesus/tags-api)
[![bitHound Dependencies](https://www.bithound.io/github/rafaeljesus/tags-api/badges/dependencies.svg)](https://www.bithound.io/github/rafaeljesus/tags-api/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/rafaeljesus/tags-api/badges/devDependencies.svg)](https://www.bithound.io/github/rafaeljesus/tags-api/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/rafaeljesus/tags-api/badges/code.svg)](https://www.bithound.io/github/rafaeljesus/tags-api)

Quick practical exam for node.js candidates.

## Requirements

- load `tags.txt` to get an array of tags
- for each of these tags, find out how many times that tag appears within the objects in `data/*.json` (_note:_ objects can be nested).
- final output should look something like this (sorted by most popular tag first):

```
pizza 15
spoon 2
umbrella 0
cats 0
```

- use only core modules.
- use the asynchronous variants of the file IO functions (eg. use `fs.readFile` not `fs.readFileSync`).
- if any of the data files contain invalid JSON, log the error with `console.error` and continue, ignoring that file.
- 
## Docker

This repository has automated image builds on hub.docker.com.
```
$ docker-machine start default
$ eval $(docker-machine env default)
$ docker run -it -p 3000:3000 rafaeljesus/tags-api
$ curl `docker-machine ip default`:3000
```
