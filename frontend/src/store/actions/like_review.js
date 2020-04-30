import serverUrl from "../../server";

export default (id, token) => (dispatch) => {
    dispatch({type: "LIKE_REVIEW", payload: id});
    const data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({id})
    };
    fetch(serverUrl + 'reviews/like/' + id +'/', data)
        .then((response) => response.json())
        .then((results) => {
        });
};
