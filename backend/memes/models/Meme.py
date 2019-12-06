from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now
from django.core.validators import MinValueValidator
from .MemeAdd import EXTENSION_CHOICES

class Meme(models.Model):
    url = models.ImageField()
    price = models.FloatField(validators=[MinValueValidator(0.01)])
    author = models.ForeignKey(User, on_delete = models.CASCADE)
    quantity = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    creation_date = models.DateTimeField(default=now)
    visits_count = models.IntegerField(default=0)
    name = models.CharField(max_length=128)
    extension = models.CharField(max_length=16, choices=EXTENSION_CHOICES)
    class Meta:
        db_table = 'memes'