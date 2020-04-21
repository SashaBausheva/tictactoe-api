#!/bin/sh

API="https://tic-tac-toe-wdi.herokuapp.com/"
URL_PATH="/test-games"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
