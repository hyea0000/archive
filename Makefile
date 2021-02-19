all:
	node ./scripts/make_index.js > README.md

clean:
	rm README.md
