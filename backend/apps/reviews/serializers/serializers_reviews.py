from rest_framework import serializers
from rest_framework.fields import SerializerMethodField

from apps.reviews.models.models_reviews import Review
from apps.users.serializers import UserSerializer
from apps.restaurants.serializers import RestaurantSerializer


class ReviewSerializer(serializers.ModelSerializer):
    idUser = UserSerializer(read_only=True)
    idRestaurant = RestaurantSerializer(read_only=True)
    amount_of_likes = serializers.SerializerMethodField()
    amount_of_comments = serializers.SerializerMethodField()
    current_user_liked = serializers.SerializerMethodField()

    def get_current_user_liked(self, review):
        user = self.context['request'].user
        if not user.is_authenticated:
            return False
        if review in user.review_likes.all():
            return True
        return False

    @staticmethod
    def get_amount_of_likes(review):
        return review.likes.all().count()

    @staticmethod
    def get_amount_of_comments(review):
        return review.fk_Comment_to_Review.all().count()


    class Meta:
        model = Review
        fields = "__all__"