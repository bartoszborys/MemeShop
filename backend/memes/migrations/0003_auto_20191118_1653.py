# Generated by Django 2.0 on 2019-11-18 15:53

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('memes', '0002_auto_20191118_1551'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meme',
            name='creation_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
