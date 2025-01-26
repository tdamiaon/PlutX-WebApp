# Generated by Django 5.1.4 on 2024-12-17 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Empresa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('symbol', models.CharField(max_length=10, unique=True)),
                ('setor', models.CharField(blank=True, max_length=50, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('last_updated', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
