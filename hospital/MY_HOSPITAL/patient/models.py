from django.db import models
from datetime import datetime
# Create your models here.
class Patient_signup(models.Model):
     First_name=models.CharField(max_length=50)
     Last_name=models.CharField(max_length=50)
     Contact_number=models.IntegerField()
     Email=models.EmailField(max_length=254)
     password=models.CharField(max_length=50)
     
     def __str__(self):
          return self.First_name
     
class Patient_appointment(models.Model):
     blood=[   
          ('A+','A+'),
          ('A-','A-'),
          ('o','o-')
     ]
     dept=[
          ('cardiology','cardiology'),
          ('cardiology','cardiology'),
          ('cardiology','cardiology')
          
     ]
     patient=models.ForeignKey(Patient_signup,on_delete=models.CASCADE)
     date=models.DateField(default=datetime.now)
     blood_group=models.CharField(max_length=128,choices=blood)
     department=models.CharField(max_length=128,choices=dept)
     address=models.CharField(max_length=128)

     def __str__(self):
          return self.patient.Email