from django.db import models
from django.contrib.auth.models import AbstractUser
from phone_field import PhoneField


class User(AbstractUser):

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name']
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=100)
    phone = PhoneField(blank=True, help_text='Your phone number')
    about_me = models.CharField(max_length=400)
    things_loved = models.CharField(max_length=400)
    date_joined = models.DateTimeField(verbose_name='date joined',auto_now_add=True)
    avatar = models.ImageField(upload_to='', blank=True)

    def __str__(self):
        return f'User {self.id}: {self.email}'
