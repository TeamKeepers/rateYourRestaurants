from django.db.models import Avg
from rest_framework.generics import ListCreateAPIView, ListAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView
from django.contrib.admin.views.decorators import staff_member_required
from rest_framework.response import Response
from rest_framework import status

from apps.restaurants.models import Restaurant
from apps.restaurants.serializers import RestaurantSerializer
from apps.reviews.models.models_reviews import Review


class ListCreateRestaurantsView(ListCreateAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.filter(name__icontains=self.request.query_params.get('search', ''))


class RetrieveUpdateDeleteRestaurantView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'restaurant_id'


class RetrieveRestaurantByCategoryView(ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.filter(category__id=self.kwargs.get('category_id'))


class ListBestRestaurant(ListAPIView):
    """"
    get:
    List the 4 best restaurants we've got in DTB

        SQL request with Restaurant.objects.raw():
        SELECT restaurants_restaurant.*, AVG(reviews_review.rating) AS rating
        FROM restaurants_restaurant
        JOIN reviews_review ON restaurants_restaurant.id = reviews_review.id_restaurant_id
        GROUP BY restaurants_restaurant.id
        ORDER BY AVG(reviews_review.rating) DESC
        LIMIT 4
    """
    serializer_class = RestaurantSerializer
    queryset = Restaurant
    permission_classes = []

    def get(self, request, *args, **kwargs):
        restaurants = Restaurant.objects.annotate(avg_rating=Avg('fk_Review_to_Restaurant__rating')).order_by('-avg_rating').all()[:4]
        # restaurants = Restaurant.objects.raw("SELECT restaurants_restaurant.*, AVG(reviews_review.rating) AS rating FROM restaurants_restaurant JOIN reviews_review ON restaurants_restaurant.id = reviews_review.id_restaurant_id GROUP BY restaurants_restaurant.id ORDER BY AVG(reviews_review.rating) DESC LIMIT 4")
        return Response(self.get_serializer(instance=restaurants, many=True).data)