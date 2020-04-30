from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.db.models import Q

from apps.restaurants.models import Restaurant
from apps.reviews.models.models_reviews import Review
from apps.reviews.serializers.serializers_reviews import ReviewSerializer

from apps.reviews.permissions import IsOwnerOrReadOnly, IsNotOwner

from apps.reviews.custom_mixins import FilterReviewMixin


class CreateReview(CreateAPIView):
    serializer_class = ReviewSerializer
    queryset = Restaurant.objects.all()
    lookup_url_kwarg = 'idRestaurant'

    def create(self, request, *args, **kwargs):
        restaurant = self.get_object()
        review = Review(content=request.data['content'], rating=request.data['rating'], idUser=request.user, idRestaurant=restaurant)
        review.save()
        return Response(self.get_serializer(instance=review).data)


class ListRestaurantReviews(ListAPIView):
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'idRestaurant'

    def get_queryset(self):
        idRestaurant = self.kwargs.get("idRestaurant")
        return Review.objects.filter(idRestaurant__id=idRestaurant).order_by("-date_created")


class ListUserReviews(ListAPIView):
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'idUser'

    def get_queryset(self):
        idUser = self.kwargs.get("idUser")
        return Review.objects.filter(idUser__id=idUser).order_by("-date_created")


class RetrieveUpdateDestroyReview(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]


class ListUserLikedReview(ListAPIView, FilterReviewMixin):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        reviews = Review.objects.filter(likes__id=self.request.user.id)
        return self.filter_reviews(reviews)


class LikeOrDislikeReview(GenericAPIView):
    queryset = Review
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated, IsNotOwner]

    def post(self, request, *args, **kwargs):
        review = self.get_object()
        if review.likes.filter(id=request.user.id).exists():
            review.likes.remove(request.user.id)
        else:
            review.likes.add(request.user.id)
        serializer = self.get_serializer(review)
        return Response(serializer.data)


class ListCommentedReviews(ListAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    def get_queryset(self):
        return Review.objects.filter(fk_Comment_to_Review__idUser=self.request.user).order_by("-date_created")


class ListSearchedReviews(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Review.objects.filter(Q(content__icontains=self.request.query_params.get('search', '')))