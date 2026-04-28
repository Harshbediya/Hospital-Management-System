from django.urls import path
from . views import Addpatient,patientLogin,patientdetils_crud_view,patientappointment

urlpatterns = [
    path("addpatient/",Addpatient.as_view()),
    path('patientlogin/',patientLogin.as_view()),
    path('patient/<int:id>/',patientdetils_crud_view.as_view(),name='single-patient-crud'),
    path('patientappointment/', patientappointment.as_view(), name='patientappointment'),
]
