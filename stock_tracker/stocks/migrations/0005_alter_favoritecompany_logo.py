# Generated by Django 5.1.4 on 2025-01-20 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stocks', '0004_alter_favoritecompany_logo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favoritecompany',
            name='logo',
            field=models.URLField(blank=True, null=True),
        ),
    ]
