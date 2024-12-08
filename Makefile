.PHONY: all update-image update-config

update-config:
	node ./update_conf.js

all: update-image update-config

update-image:
	@for f in src_images/*.jpg; do \
		magick "$$f" -resize x1080 "public/images/$$(basename $$f)"; \
	done



