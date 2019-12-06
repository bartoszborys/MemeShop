from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now
from django.core.validators import MinValueValidator
from memes.models.Meme import Meme

class Order(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    quantity = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    order_date = models.DateTimeField()
    meme = models.ForeignKey(Meme, on_delete = models.CASCADE)
    class Meta:
        db_table = 'orders'