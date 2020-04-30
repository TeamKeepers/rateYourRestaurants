from django.urls import path

from apps.users.views import ListCreateUsersView, GetUpdateDeleteUserView, ListMeView

urlpatterns = [
    path('', ListCreateUsersView.as_view()),
    path('<int:pk>/', GetUpdateDeleteUserView.as_view()),
    path('me/', ListMeView.as_view()),
]
