# logcafe.js

PROJECTNAME="logcafe.js"
DESC="logcafe.js"

all: clean test build

check:
	@echo
	@echo "info: checking node_modules."
	if [ ! -d ./node_modules ]; then npm install .; else exit 0; fi

test: check
	@echo
	@echo "info: testing start."
	./node_modules/mocha/bin/mocha test/

build:
	@echo
	@echo "info: build start."
	./build.sh

clean:
	@echo
	@echo "info: clean start."
	rm -f logcafe.min.js

.PHONY: all test build clean
