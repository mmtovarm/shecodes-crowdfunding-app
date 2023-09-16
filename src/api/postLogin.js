async function postLogin(username, password) {
    const url = `${import.meta.env.VITE_API_URL}/api-token-auth/`;
    const response =awaitfetch(url,{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
           "username": username,
           "password": password 
        }),
    });

if (!response.ok) {
    const fallbackError = "error trying to login";

    const data = await response.json().catch(() => {
        throw new Error(fallbackError);
    });
    const errorMessage = data?.detail  ?? fallbackError;
  throw new Error(errorMessage);
}
return await response.json();
}

export default postLogin;


