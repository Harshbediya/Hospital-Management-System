from django.contrib import admin

from .models import Patient_signup,Patient_appointment

# Register your models here.

# admin.site.register(Patient_signup)
@admin.register(Patient_signup)

class Patientdata(admin.ModelAdmin):
    list_display=['First_name','Last_name','Contact_number','Email','password']
    
    
@admin.register(Patient_appointment)
class patientappointment(admin.ModelAdmin):
    list_display=['patient','date','blood_group','department','address',]