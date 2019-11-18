from django.db import models
from django.contrib.auth.models import User

class Meme(models.Model):
    url = models.CharField(max_length=255)
    price = models.FloatField()
    author = models.ForeignKey(User, on_delete = models.CASCADE)
    quantity = models.IntegerField()
    creation_date = models.DateTimeField()
    visits_count = models.IntegerField(default=0)
    name = models.CharField(max_length=255)
    class Meta:
        db_table = 'memes'