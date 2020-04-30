from django.urls import path
from apps.restaurants.views import ListCreateRestaurantsView, RetrieveUpdateDeleteRestaurantView
from apps.restaurants.views import RetrieveRestaurantByCategoryView


urlpatterns = [
    path('', ListCreateRestaurantsView.as_view()),
    path('new/', ListCreateRestaurantsView.as_view()),
    path('<int:restaurant_id>/', RetrieveUpdateDeleteRestaurantView.as_view()),
    path('category/<int:category_id>/', RetrieveRestaurantByCategoryView.as_view())
]
