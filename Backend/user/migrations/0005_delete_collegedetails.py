# Generated by Django 4.2.3 on 2023-07-22 10:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_collegedetails_remove_registration_branch_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='collegedetails',
        ),
    ]
