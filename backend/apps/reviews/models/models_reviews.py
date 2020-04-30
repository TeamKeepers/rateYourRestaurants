from django.db import models
from django.contrib.auth import get_user_model

from apps.restaurants.models import Restaurant

User = get_user_model()


class Review(models.Model):

    NOTATION = (
        (1, "1 star, could do better"),
        (2, "2 stars, experience is ok"),
        (3, "3 stars, expect a good lunch"),
        (4, "4 stars, great restaurant"),
        (5, "5 stars, WOW experience"),
    )

    content = models.TextField(
        verbose_name="review content"
    )
    rating = models.IntegerField(
        verbose_name="review rating",
        choices=NOTATION
    )
    date_created = models.DateTimeField(
        verbose_name="created time",
        auto_now_add=True
    )
    date_modified = models.DateTimeField(
        verbose_name="modified",
        auto_now=True
    )
    idUser = models.ForeignKey(
        to=User,
        related_name="fk_Review_to_User",
        on_delete=models.CASCADE
    )
    idRestaurant = models.ForeignKey(
        to=Restaurant,
        related_name="fk_Review_to_Restaurant",
        on_delete=models.CASCADE
    )
    likes = models.ManyToManyField(
        to=User,
        related_name='review_likes',
        blank=True
    )

    class Meta:
        ordering = ['-date_modified']

    def __str__(self):
        return f'Review #{self.id}'