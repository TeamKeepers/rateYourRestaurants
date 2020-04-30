from django.contrib.auth import get_user_model
from rest_framework import serializers
from apps.reviews.models.models_reviews import Review

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    number_of_reviews = serializers.SerializerMethodField()

    def get_number_of_reviews(self, user):
        return Review.objects.filter(idUser=user).count()

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'location', 'phone', 'about_me',
                  'things_loved', 'date_joined', 'avatar', 'number_of_reviews']

