.PHONY: install migrate deploy

install: ;@echo "Installing ....."; \
	npm install

build: ;@echo "Migrate..."; \
	npm run build

deploy: ;@echo "Deploying....."; \
	pm2 serve ./build 8082 --spa

install-and-deploy: install build deploy