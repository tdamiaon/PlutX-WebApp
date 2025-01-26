from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User



@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
        
class FavoriteCompany(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="favorite_companies")
    symbol = models.CharField(max_length=10)  # Armazena o símbolo da empresa
    logo = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} - {self.symbol}"
