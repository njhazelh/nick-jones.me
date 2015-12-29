default: build

build:
	gulp build

docker:
	docker build -t nick-jones.me .

run: build docker
	docker run -p 80:80 -d nick-jones.me

stop:
	docker stop nick-jones.me