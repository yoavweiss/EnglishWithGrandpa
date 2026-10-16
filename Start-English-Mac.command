#!/bin/bash
# Opens "English at Ease" in its own app window on a Mac (Chrome or Edge), otherwise in the default browser.
DIR="$(cd "$(dirname "$0")" && pwd)"
URL="file://$DIR/index.html"
if [ -d "/Applications/Google Chrome.app" ]; then
  open -na "Google Chrome" --args --app="$URL" --window-size=1200,900
elif [ -d "/Applications/Microsoft Edge.app" ]; then
  open -na "Microsoft Edge" --args --app="$URL" --window-size=1200,900
else
  open "$DIR/index.html"
fi
