"""luna_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

from apps.restaurants.views import ListBestRestaurant

api_patterns = [
    path('reviews/', include('apps.reviews.urls')),
    path('token/', jwt_views.TokenObtainPairView.as_view()),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view()),
    path('token/verify/', jwt_views.TokenVerifyView.as_view()),
    path('users/', include('apps.users.urls')),
    path('restaurants/', include('apps.restaurants.urls')),
    path('category/', include('apps.categories.urls')),
    path('home/', ListBestRestaurant.as_view())

]

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/', include(api_patterns))
]
