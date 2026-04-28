from django.db import models

# Create your models here.

class Superadmin_data(models.Model):
    name=models.CharField(max_length=50,default=True)
    psw=models.CharField(max_length=50,default=True)
    
    def __str__(self):
        return self.name