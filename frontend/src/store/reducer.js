const initState = {
    token: localStorage.getItem('token'),
    bestRestaurants: [],
    reviews: [],
    query: '',
    current_restaurant: undefined,
    restaurants: [],
    login_error: '',
};


const reducer = (state = initState, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state,
            token: action.payload
        }
    }
    else if (action.type === "INVALID_LOGIN") {
        return {
            ...state,
            login_error: action.payload
        }
    }
    else if (action.type === "LOGOUT") {
        return {
            ...state,
            token: null
        }
    }
    else if (action.type === "GETBESTRESTAURANTS")
    {
        return {
            ...state,
            bestRestaurants: [action.payload]
        }
    }
    else if (action.type === "FETCH_REVIEWS") {
        return {
            ...state,
            reviews: action.payload
        }
    }
    else if (action.type === "FETCH_RESTAURANT") {
        return {
            ...state,
            current_restaurant: action.payload[0]
        }
    }
    else if (action.type === "FETCH_RESTAURANTS") {
        return {
            ...state,
            restaurants: action.payload
        }
    }

     else if (action.type === "LIKE_REVIEW") {
        return {
            ...state,
            reviews: state.reviews.map((review) => {
                if (review.id === action.payload) {
                    return {
                        ...review,
                        current_user_liked: !review.current_user_liked,
                        amount_of_likes: review.amount_of_likes + (review.current_user_liked ? -1 : 1)
                    };
                } else {
                    return review;
                }
            })
        };
    }
     return state;
};

export default reducer;
