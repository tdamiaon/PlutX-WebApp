# Generated by Django 5.1.4 on 2025-01-20 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stocks', '0002_favoritecompany_delete_empresa'),
    ]

    operations = [
        migrations.AddField(
            model_name='favoritecompany',
            name='logo',
            field=models.CharField(default='website', max_length=30),
            preserve_default=False,
        ),
    ]