.PHONY: install migrate deploy

install: ;@echo "Installing ....."; \
	npm install

migrate: ;@echo "Migrate..."; \
	npx sequelize-cli db:migrate

deploy: ;@echo "Deploying....."; \
	pm2 restart home

install-and-deploy: install migrate deploy