$("form").submit(function (evt) {
    evt.preventDefault();

    const orgName = $("#orgName").val();
    const token = $("#token").val();
    let input = $("#input").val().trim().replace("	", " ").split("\n").sort();
    if (orgName && token && input) {
        input.forEach(email => {
            fetch(`https://api.github.com/orgs/${orgName}/invitations?access_token=${token}`, {
                method: 'post',
                body: JSON.stringify({
                    "email": email,
                    "role": "direct_member"
                })
            }).then(data => {
                if (data.ok) {
                    $(".results").append(
                        `<div class="alert alert-success" role="alert">
                Invitation sent to ${email}!
              </div>
                `
                    )
                } else {
                    $(".results").append(
                        `<div class="alert alert-danger" role="alert">
                    Fail for ${email}! ${data.statusText}
                  </div>
                    `
                    )
                }
            }).catch((error) => {
                console.error('Error:', error);
            });
        })
    }

});
