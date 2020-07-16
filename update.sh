#!/bin/bash

#
# This script pulls an up-to-date version of https://github.com/arvida/emoji-cheat-sheet.com.git
# and copies the emoji from that project into this project, also updating the emojify.js script
# with any new emoji
#
# Remember to run grunt afterwards
#

set -e

function downloadEmoji() {
	local name=$( echo ${1} | cut -d'=' -f1 )
	local url=$( echo ${1} | cut -d'=' -f2 )
	curl -o "images/emoji/${name}.png" $url
}

export -f downloadEmoji

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
EMOJIS_JSON_FILE="github_emojis.json"
EMOJIS_TEXT_FILE="github_emojis.txt"
TEMPLATE_FILE="emojify.js.template"
OUTPUT_FILE="emojify.js"

# Remember the callers current directory
pushd . > /dev/null && cd ${SCRIPT_DIR}

# Download the list of emojis as name -> url
curl -s https://api.github.com/emojis | jq '.' > ${EMOJIS_JSON_FILE}
cat ${EMOJIS_JSON_FILE} | jq -r '. | to_entries | map([.key, .value] | join("=")) | join("\n")' > ${EMOJIS_TEXT_FILE}

# Download the emoji images and save them to images/emoji/*.png
cat ${EMOJIS_TEXT_FILE} | xargs -P10 -n1 -L1 -I'{}' bash -c 'downloadEmoji "{}"'

# Render the js template with list of emoji-names
EMOJILIST=$( cat ${EMOJIS_JSON_FILE} | jq -r --join-output '. | to_entries | map(.key) | join(",")' )
sed -e "s/{{ EMOJILIST }}/${EMOJILIST}/g" ${TEMPLATE_FILE} > ${OUTPUT_FILE}

# Cleanup
rm -f ${EMOJIS_JSON_FILE}
rm -f ${EMOJIS_TEXT_FILE}

# Go back to callers original directory
popd > /dev/null