# Generated by Django 4.2.3 on 2023-07-18 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='pincode',
            field=models.IntegerField(),
        ),
    ]
