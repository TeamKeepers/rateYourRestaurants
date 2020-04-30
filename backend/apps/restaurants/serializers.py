from django.db.models import Avg
from rest_framework import serializers
from apps.reviews.models.models_reviews import Review
from apps.restaurants.models import Restaurant
from apps.categories.serializers import CategorySerializer


class RestaurantSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    total_of_reviews = serializers.SerializerMethodField()
    avg_rating = serializers.SerializerMethodField()

    def get_total_of_reviews(self, restaurant):
        return Review.objects.filter(idRestaurant=restaurant).count()

    def get_avg_rating(self, restaurant):
        return Restaurant.objects.filter(id=restaurant.id).aggregate(rating=Avg('fk_Review_to_Restaurant__rating'))

    class Meta:
        model = Restaurant
        fields = "__all__"
