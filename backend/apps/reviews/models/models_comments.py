from django.db import models
from django.contrib.auth import get_user_model

from apps.reviews.models.models_reviews import Review

User = get_user_model()


class Comment(models.Model):
    content = models.TextField(
        verbose_name="comment content"
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
        related_name="fk_Comment_to_User",
        on_delete=models.CASCADE
    )
    idReview = models.ForeignKey(
        to=Review,
        related_name="fk_Comment_to_Review",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    idComment = models.ForeignKey(
        to="self",
        related_name="fk_Comment_to_Comment",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    likes = models.ManyToManyField(
        to=User,
        related_name='comment_likes',
        blank=True
    )

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return f'Comment #{self.id}'