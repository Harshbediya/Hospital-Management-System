from rest_framework import serializers
from .models import Patient_signup,Patient_appointment

class Patientsignupapi(serializers.ModelSerializer):
    class Meta:
        model=Patient_signup
        fields='__all__'
        
class Patientappointmentapi(serializers.ModelSerializer):
    class Meta:
        model=Patient_appointment
        fields='__all__'
        