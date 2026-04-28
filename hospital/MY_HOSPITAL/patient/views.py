from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status,generics
from .serializers import Patientsignupapi,Patient_appointment
from .models import Patient_signup
from django.contrib.auth.hashers import make_password, check_password
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.



class Addpatient(APIView):
    def post(self,request):
        data = request.data.copy()
        if 'password' in data:
            data['password'] = make_password(data['password'])
        
        serializer=Patientsignupapi(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'Registration successful'},status=status.HTTP_201_CREATED)
 
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class patientLogin(APIView):
    def post(self,request):
        email_field=request.data.get('email')
        password_field=request.data.get('psw')  
        
        patient=Patient_signup.objects.filter(Email=email_field).first()
        if patient and check_password(password_field, patient.password):
            refresh = RefreshToken.for_user(patient) # This works if Patient_signup is treated as a user or similar
            # Note: For_user expects a model that has an id
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': {
                    'id': patient.id,
                    'fname': patient.First_name,
                    'lname': patient.Last_name,
                    'Email': patient.Email,
                },
                'message': "Login Successful"
            }, status=status.HTTP_200_OK)
        
        return Response({'message':"Invalid email or password"}, status=status.HTTP_401_UNAUTHORIZED)


class patientdetils_crud_view(generics.RetrieveUpdateDestroyAPIView):
    queryset=Patient_signup.objects.all()
    serializer_class=Patientsignupapi
    lookup_field='id'


class patientappointment(APIView):
    def post(self,request):
        serializer=Patient_appointment(data=request.data)
        print(request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response({'message':"Appointment created succesfully"},status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)