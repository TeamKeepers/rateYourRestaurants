from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveUpdateAPIView
from django.db.models import Q

from apps.users.models import User
from apps.users.serializers import UserSerializer


class ListCreateUsersView(ListCreateAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(Q(first_name__icontains=self.request.query_params.get('search', '')) | Q(last_name__icontains=self.request.query_params.get('search', '')))


class GetUpdateDeleteUserView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ListMeView(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
