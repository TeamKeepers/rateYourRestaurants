from django.urls import path, include

from apps.reviews.views.views_reviews import RetrieveUpdateDestroyReview, CreateReview, ListRestaurantReviews, ListUserReviews, ListUserLikedReview, LikeOrDislikeReview, ListCommentedReviews, ListSearchedReviews

from apps.reviews.views.views_comments import ListUserCommentsDestroyReviewComments, CreateReviewComment


like_patterns = [
    path('', ListUserLikedReview.as_view()),
    path('<int:pk>/', LikeOrDislikeReview.as_view())
]

comment_patterns = [
    path('', ListCommentedReviews.as_view()),
    path('<int:pk>/', ListUserCommentsDestroyReviewComments.as_view()),
    path('new/<int:idReview>/', CreateReviewComment.as_view())
]

urlpatterns = [
    path('<int:pk>/', RetrieveUpdateDestroyReview.as_view()),
    path('new/<int:idRestaurant>/', CreateReview.as_view()),
    path('restaurant/<int:idRestaurant>/', ListRestaurantReviews.as_view()),
    path('user/<int:idUser>/', ListUserReviews.as_view()),
    path('like/', include(like_patterns)),
    path('comments/', include(comment_patterns)),
    path('search/', ListSearchedReviews.as_view())
]