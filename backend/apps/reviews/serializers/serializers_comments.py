from rest_framework import serializers
from rest_framework.fields import SerializerMethodField

from apps.reviews.models.models_comments import Comment
from apps.users.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = "__all__"