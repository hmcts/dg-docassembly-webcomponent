curl -H "Content-type: application/json" -d '{"email":"a@b.com", "password":"password", "forename":"x","surname":"x",  "roles":[{"code":"caseworker","displayName":"caseworker"}]}"' http://betadevaccidamapplb.reform.hmcts.net/testing-support/accounts --silent > /dev/null
userId=$(curl http://betadevaccidamapplb.reform.hmcts.net/testing-support/accounts/a@b.com --silent | jq -r '.id')
curl -F id=$userId -F role=caseworker http://betadevaccidamapplb.reform.hmcts.net/testing-support/lease --silent
