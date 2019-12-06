from django.db import models
from django.core.validators import MinValueValidator

EXTENSION_CHOICES = [
    ("jpg", "jpg"),
    ("png", "png"),
    ("gif", "gif"),
    ("jpeg", "jpeg"),
]

class MemeAdd(models.Model):
    blob = models.TextField(max_length=1000000)
    price = models.FloatField(validators=[MinValueValidator(0.01)])
    quantity = models.IntegerField(validators=[MinValueValidator(1)])
    name = models.CharField(max_length=128)
    extension = models.CharField(max_length=16, choices=EXTENSION_CHOICES)
    class Meta:
       managed = False