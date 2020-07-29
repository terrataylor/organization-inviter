const oAuthToken = "6ff46beb2530da58182d782656fae9335c48efc6";

var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.github.com/orgs/thinkful-ei-rabbit/invitations?access_token=${oAuthToken}`,
    "method": "POST",
    "headers": {
      "authorization": "token 6ff46beb2530da58182d782656fae9335c48efc6",
      "content-type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
      "Accept": "application/vnd.github.v3+json",
      "postman-token": "887e43a3-fa7f-9ea4-6e34-ba2d664a7753",
      'Access-Control-Allow-Origin': '*',
"Access-Control-Allow-Headers": "Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With",
"Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
"Access-Control-Expose-Headers": "ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
"Access-Control-Max-Age": "86400"
    },
    "dataType":"json",
    "contentType": "application/json",
    "data": ""
  }
  
$("form").submit(function (evt) {
    evt.preventDefault();
    console.log($("#cohortDate").val())
    let input = $("#input").val().trim().replace("	", " ").split("\n").sort();
  

  fetch(`https://api.github.com/orgs/thinkful-ei-rabbit/invitations?access_token=${oAuthToken}`, {
      method: 'post',
      body: JSON.stringify({
        "email":"bob1234@gmail.com",
        "role": "direct_member"
    })
    })

   /* var nameList = input.map(function (item) {
        return item.replace("	", " ")
      });
      console.log(nameList)
    console.log(input);
    for (let i = 0; i < nameList.length; i++) {
        let name = nameList[i].split(" ");
        if (name !== "") {
            let firstName = name[0];
            console.log(name,name[1]);
            let lastInitial = name[1].charAt(0).toUpperCase();
            console.log(checkIfDuplicateExists(firstName, nameList))
            if (checkIfDuplicateExists(firstName, nameList)) {
                input[i] = `  - name: ${nameList[i]}\n   shortName: ${firstName}${lastInitial}\n`;
            } else {
                input[i] = `  - name: ${nameList[i]}\n`;
            }
        }
    }

    let stringify = input.toString().replace(/,/g, "");

    $("#output").val(stringify);*/
})


function checkIfDuplicateExists(firstName, list) {
    let counter = 0;
    if (list) {
        for (let i = 0; i < list.length; i++) {
            let fname = list[i].split(" ")[0];
            if (firstName == fname) {
                counter++;
            }
        }
    }
    return counter > 1;



}