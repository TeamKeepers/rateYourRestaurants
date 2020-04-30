import serverUrl from "../../server";

export default (email, password, history) => (dispatch) => {
    const data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    };
    fetch( serverUrl + 'token/', data)
        .then((response) => {
            if (!response.ok) throw 'invalid login';
            return response.json();
        })
        .then((results) => {
            const token = results.access;
            localStorage.setItem('token', token);
            dispatch({type: 'LOGIN', payload: token});
            history.push("/");
        }).catch(() => {
            dispatch({type: 'INVALID_LOGIN', payload: "Invalid email or password."});
        });
};
