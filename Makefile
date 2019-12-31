.PHONY: help rundev test build deploy

help:
	@ echo COMMANDS
	@ echo rundev - 'start in development mode'
	@ echo test   - 'test the app'
	@ echo build  - 'build in a production profile'
	@ echo deploy - 'deploy the app (GitHub pages)'

rundev:
	@ npm start

test:
	@ npm test

build:
	@ npm run build

deploy: build
	@ npm run deploy
