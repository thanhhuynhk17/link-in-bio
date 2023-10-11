build-dev:
	docker build -t react-ui:latest .

build-production:
	docker build -t react-ui-production:latest \
	--build-arg CADDYFILE=Caddyfile.production \
	--build-arg BASE_URL=http://localhost:5000/api \
	-f "Dockerfile.production" .