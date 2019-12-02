from django.db import models

class MemeAdd(models.Model):
    blob = models.TextField(max_length=1000000)
    price = models.FloatField()
    quantity = models.IntegerField()
    name = models.CharField(max_length=128)
    extension = models.CharField(max_length=16)
    class Meta:
       managed = False