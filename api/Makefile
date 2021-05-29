default: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | gawk 'match($$0, /(makefile:)?(.*):.*?## (.*)/, a) {printf "\033[36m%-30s\033[0m %s\n", a[2], a[3]}'


install: ## Install dependencies
	npm install

start: ## Start PM2
	npm run start

stop: ## Stop PM2
	npm run stop

dev: ## Dev mode with nodemon
	npm run dev

