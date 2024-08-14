##
## this is a hack way to avoid using a DB right now.
## eventually this will be unnecessary, since it'll be part of the server code.
##

import json
import os
import pathlib
from PIL import Image

fpath = pathlib.Path(__file__)
pdir = fpath.parent

files = os.listdir(pdir)
files.remove(fpath.name)
files.remove(".env")

jdata = []
for file in files:
    with Image.open(file) as im:
        width, height = im.size
        jdata.append(
            {
                "path": f"img/photography/{file}",
                "description": "",
                "width": width,
                "height": height,
            }
        )

with open("photography.json", "w") as fp:
    fp.write(json.dumps(jdata, indent=4))
