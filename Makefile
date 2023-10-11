build-dev:
	cd frontend && $(MAKE) build-dev
	cd backend && $(MAKE) build

run-dev:
	ENV=dev docker-compose -f docker-compose-dev.yml -d up

###################
build-production:
	cd frontend && $(MAKE) build-production
	cd backend && $(MAKE) build

run-production:
	ENV=production docker-compose -f docker-compose-production.yml up
