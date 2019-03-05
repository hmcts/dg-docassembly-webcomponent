echo $(curl -H 'Content-type: application/json' -d '{"microservice":"em_gw"}' localhost:4502/testing-support/lease --silent)

