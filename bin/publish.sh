#!/bin/bash

status=0

(./bin/try-publish.sh "api-client") || status=1
(./bin/try-publish.sh "apollo-links") || status=1
(./bin/try-publish.sh "apollo-provider") || status=1
(./bin/try-publish.sh "create-apollo-client") || status=1
(./bin/try-publish.sh "forms") || status=1
(./bin/try-publish.sh "utils") || status=1
(./bin/try-publish.sh "validate") || status=1

exit $status