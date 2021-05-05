.PHONY: install deploy

install: ;@echo "Installing ....."; \
	npm install

deploy: ;@echo "Deploying....."; \
	pm2 restart home

install-and-deploy: install deploy
