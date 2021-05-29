.PHONY: install deploy

install: ;@echo "Installing ....."; \
	npm install

deploy: ;@echo "Deploying....."; \
	pm2 restart home

start:
	npm run start

install-and-deploy: install deploy
