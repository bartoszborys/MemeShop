# Generated by Django 2.0 on 2019-12-06 21:00

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('memes', '0006_auto_20191202_2222'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meme',
            name='price',
            field=models.FloatField(validators=[django.core.validators.MinValueValidator(0.01)]),
        ),
        migrations.AlterField(
            model_name='meme',
            name='quantity',
            field=models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1)]),
        ),
    ]