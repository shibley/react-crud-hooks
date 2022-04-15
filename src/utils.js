const strapiUrl = `${process.env.REACT_APP_STRAPI_URL}`;

export function apiExternalRequest(path, method = "GET", data) {
    //const accessToken = process.env.STRAPI_TOKEN;
    // var data = JSON.stringify({
    //     "event": "New User Registered",
    //     "project": "checkride",
    //     "channel": "user-register",
    //     "description": "User: Carter Doe\nEmail: carter@gmail.com\nUsername: carter-doe"
    //   });
    return fetch(`${strapiUrl}${path}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            //Authorization: `Bearer ${accessToken}`,
        },
        body: data ? JSON.stringify(data) : undefined,
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.status === "error") {
                // Automatically signout user if accessToken is no longer valid
                if (response.code === "auth/invalid-user-token") {
                    //fakeAuth.signout();
                }

                throw new CustomError(response.code, response.message);
            } else {
                return response;
            }
        });
}