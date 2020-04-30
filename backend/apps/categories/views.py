from rest_framework.generics import ListAPIView, RetrieveAPIView

from apps.categories.models import Category
from apps.categories.serializers import CategorySerializer
from apps.restaurants.models import Restaurant
from apps.restaurants.serializers import RestaurantSerializer


class ListCategoriesView(ListAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.filter(name__icontains=self.request.query_params.get('search', ''))


class RetrieveCategoryView(ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.filter(category__id=self.kwargs.get('category_id'))

