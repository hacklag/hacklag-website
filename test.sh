#!/bin/bash
set -e

function run_unit_tests {
    npm run-script eslint
    npm test
}

function run_e2e_tests {
    npm run-script build
    mv ./dist ./dist_e2e
    npm run-script e2e-setup
    nohup npm run-script e2e-http-server &
    nohup npm run-script oauth-server &
    sleep 5
    npm run-script e2e
    rm -rf ./dist_e2e
}

function run_e2e_screenshots {
    git fetch --all
    git reset --hard origin/master
    npm run-script build
    mv ./dist ./dist_e2e
    npm run-script e2e-setup
    nohup npm run-script e2e-http-server &
    sleep 5
    npm run-script e2e-screenshots
    rm -rf ./dist_e2e
    npm run-script upload-screenshots
}

case "$CIRCLE_NODE_INDEX" in
    0)
        run_unit_tests
        ;;
    1)
        if [[ "$CIRCLE_BRANCH" == "screenshots" ]]; then
            run_e2e_screenshots
        else
            run_e2e_tests
        fi
        ;;
    *)
        run_unit_tests
        run_e2e_tests
        ;;
esac
