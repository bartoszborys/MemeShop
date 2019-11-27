from django.db import models

class MemeAdd(models.Model):
    blob = models.TextField(max_length=1000000)
    price = models.FloatField()
    quantity = models.IntegerField()
    picture_title = models.CharField(max_length=64)
    name = models.CharField(max_length=255)
    class Meta:
       managed = False