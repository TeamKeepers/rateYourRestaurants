from django.db import models


class Category(models.Model):

    name = models.TextField(max_length=75)


    def __str__(self):
        return f'Category {self.id}: {self.name}'