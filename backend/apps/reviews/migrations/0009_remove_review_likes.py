# Generated by Django 3.0.3 on 2020-04-02 15:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0008_review_likes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='likes',
        ),
    ]