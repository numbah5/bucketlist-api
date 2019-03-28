#!/bin/bash

API="http://localhost:4741"
URL_PATH="/list-items"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "listItem": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'",
      "boolean": "'"${BOOL}"'"
    }
  }'

echo
